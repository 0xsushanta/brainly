import { Button } from "../ui/Button"
import { Input } from "../ui/Input"
export function Signin() {
    return <div className="h-screen w-screen bg-gray-300 flex justify-center items-center">


        <div className="bg-white rounded border p-4  min-w-48">
            <div className="text-center text-xl font-bold ">
                <div>
                    Wellcome to 
                    Brainly
                </div>
                <div className="text-purple-600 font-bold text-2xl">
                    Sign In
                </div>
            </div>
            <Input placeholder="Username" />
            <Input placeholder="Password" />
            <div className="flex justify-center items-center p-4">
                <Button text="Sign In" variant="primary" />
            </div>

        </div>

    </div>
}