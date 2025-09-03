import express, { Request, Response } from 'express'
import { UserModel } from '../models/user.model'
import { signupValidator, SignupInput } from '../validators/signup.validator'
import dotenv from "dotenv"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
dotenv.config()
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
export const signin = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;

    const finderUser = await UserModel.findOne({ username });
    if (!finderUser) {
      res.status(401).json({ msg: "Invalid username or password" });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, finderUser.password as string);
    if (!passwordMatch) {
      res.status(401).json({ msg: "Invalid username or password" });
      return;
    }

    const token = jwt.sign(
      { id: finderUser._id, username: finderUser.username },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" }
    );

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};
