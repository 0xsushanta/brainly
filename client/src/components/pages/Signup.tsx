import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../ui/Button"
import { Input } from "../ui/Input"
import axios from "axios"
import { BACKEND_URL } from "../../config"
export function Signup() {
     const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
     const navigate = useNavigate();
   async function signup() {
        const username = usernameRef.current?.value;
        console.log(usernameRef.current)
        const password = passwordRef.current?.value;
        await axios.post(BACKEND_URL + "/api/v1/user/signup", {
            username,
            password
        })
        navigate("/signin")
        alert("You have signed up!")
    }
    return <div className="h-screen w-screen bg-gray-300 flex justify-center items-center">


        <div className="bg-white rounded border p-4  min-w-48">
            <div className="text-center text-xl font-bold ">
                <div>
                    Wellcome to 
                    Brainly
                </div>
                <div className="text-purple-600 font-bold text-2xl">
                    SignUp
                </div>
            </div>
            <Input reference={usernameRef} placeholder="Username" />
            <Input reference={passwordRef} placeholder="Password" />
            <div className="flex justify-center items-center p-4">
                <Button onClick={signup} text="SignUp" variant="primary" />
            </div>

        </div>

    </div>
}