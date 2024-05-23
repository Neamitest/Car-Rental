import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Eye, EyeOff } from "lucide-react";
import React, { useRef, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [showpsw, setShowPsw] = useState(false);
    const navigate = useNavigate();
    const { toast } = useToast();
    const [cookies, setCookie] = useCookies(["token"]);
    const handleFrom = async (e) => {
        e.preventDefault();

        const email = emailRef?.current.value;
        const password = passwordRef?.current.value;

        if (!email || !password) {
            toast({
                description: "the fields required !",
                variant: "destructive",
            });
            return;
        }
        const response = await fetch(
            `http://127.0.0.1:8000/api/auth/login`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email,
                    password,
                }),
            }
        );
        const result = await response.json();
        console.log({ result });
        if (result?.status === "success") {
            setCookie("token", result?.token);
            toast({
                description: "Logged In Successfully !",
            });
            navigate("/");
        } else {
            toast({
                description: result?.message,
                variant: "destructive",
            });
        }
    };
    return (
        <>
            <div className=" w-[90%] sm:w-[340px] mx-auto mt-9 md:mt-12 rounded-2xl bg-[#1b1b1b]">
                <div className="bg-[#f5b754] rounded-t-2xl text-black font-semibold pl-12 py-6">
                    Sign in to your account
                </div>
                <form
                    onSubmit={handleFrom}
                    className="flex flex-col w-[90%] md:flex-row md:flex-wrap mx-auto justify-center items-center gap-5 py-9"
                >
                    <input
                        ref={emailRef}
                        className="bg-[#222222]  w-full   px-4 py-2 outline-none rounded-3xl placeholder:text-[#999] placeholder:text-[14px]"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email.."
                    />

                    <div className="w-full   relative">
                        <span
                            onClick={() => {
                                if (showpsw) {
                                    setShowPsw(false);
                                } else {
                                    setShowPsw(true);
                                }
                            }}
                            className=" absolute top-[10px] right-[16px] text-[#999] cursor-pointer "
                        >
                            {showpsw ? <EyeOff size={20} /> : <Eye size={20} />}
                        </span>
                        <input
                            ref={passwordRef}
                            className="bg-[#222222]  w-full px-4 py-2 outline-none rounded-3xl placeholder:text-[#999] placeholder:text-[14px]"
                            type={showpsw ? "text" : "password"}
                            id="password"
                            name="password"
                            placeholder="Your pasword.."
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        {/* <a
                                        href="#"
                                        className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                                    >
                                        Forgot password?
                                    </a> */}
                        <Button
                            type="submit"
                            size="lg"
                            className="bg-[#f5B754] min-w-[180px] my-2 hover:bg-[#faad30] text-black  rounded-3xl"
                        >
                            Sign in
                        </Button>
                    </div>

                    <p className="text-sm font-light text-[#999]">
                        Don’t have an account yet?
                        <Link to="/sign-up">
                            <span className="font-medium text-blue-600 mx-2 hover:underline dark:text-primary-500">
                                Sign up
                            </span>
                        </Link>
                    </p>
                </form>
            </div>
        </>
    );
}
