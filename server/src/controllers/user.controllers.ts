import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import { UserModel } from '../models/user.model'
import { signupValidator, SignupInput } from '../validators/signup.validator'
import bcrypt from "bcrypt"
import { z } from 'zod'
export const signup = async (req: Request, res: Response): Promise<void> => {

    const pareseDataWithSuccess = signupValidator.safeParse(req.body)
    if (!pareseDataWithSuccess.success) {
        res.status(400).json({ msg: pareseDataWithSuccess.error.issues })
        return;
    }

    const { username, password }= pareseDataWithSuccess.data
    const hashedPassword= await bcrypt.hash(password,10)
    const existingUser = await UserModel.findOne({
        username,
        password
    })

    
    if (existingUser) {
        res.status(400).json({ msg: "user already exists" })
        return;
    }
    try {
        await UserModel.create({
            username: username,
            password: hashedPassword
        })
        res.status(201).json({ msg: "user created" })
    } catch (error) {
        res.status(411).json({ msg: `${error}` })
    }
}