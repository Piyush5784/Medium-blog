import { useState } from "react";
import { Link } from "react-router-dom";
import LabeledInput from "./LabeledInput";



const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const [, setPostInputs] = useState({
        email: "",
        username: "",
        password: ""
    })

    return <div className="h-screen flex justify-center flex-col">

        <div className="flex justify-center items-center flex-col">

            <div className="text-center w-full">
                <div className="text-3xl font-bold">
                    Create an account
                </div>
                <div className="text-slate-400">
                    {type === "signin" ? "Don't have an account" : "Already have an account?"}

                    <Link to={type === "signin" ? "/signup" : "/signin"} className="underline pl-2">{type === "signin" ? "Register" : "Login"}</Link>
                </div>
            </div>

            <div className="w-[50%] mt-2">
                {type === "signup" ? <LabeledInput label="Username" placeholder="Piyush" onChange={(e) => setPostInputs(c => ({
                    ...c,
                    username: e.target.value
                }))} /> : null}
                <LabeledInput label="Email" placeholder="Piyush" onChange={(e) => setPostInputs(c => ({
                    ...c,
                    email: e.target.value
                }))} />
                <LabeledInput label="Password" type="password" placeholder="Piyush" onChange={(e) => setPostInputs(c => ({
                    ...c,
                    password: e.target.value
                }))} />
                <button type="button" className="text-white bg-gray-800 w-full mt-6 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signin" ? "Sign in" : "Sign up"}</button>


            </div>

        </div>
    </div>;
};

export default Auth;
