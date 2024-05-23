import { format } from "date-fns";
import { Calendar as CalendarIcon, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { useCookies } from 'react-cookie';

export default function SignUp() {
    const [dateOfBirth, setDateOfBirth] = useState();
    const [gender, setGender] = useState();
    const [showpsw, setShowPsw] = useState(false);
    const fnameRef = useRef();
    const lnameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();
    const driverLicenseRef = useRef();
    const navigate = useNavigate();
    const { toast } = useToast();
    const [cookies, setCookie] = useCookies(["token"]);

    const handleFrom = async (e) => {
        e.preventDefault();
        const firstName = fnameRef?.current.value;
        const lastName = lnameRef?.current.value;
        const email = emailRef?.current.value;
        const password = passwordRef?.current.value;
        const phoneNumber = phoneRef?.current?.value;
        const address = addressRef?.current.value;
        const driverLicense = driverLicenseRef?.current.value;
        if (
            !firstName ||
            !lastName ||
            !email ||
            !password ||
            !phoneNumber ||
            !gender ||
            !address ||
            !driverLicense ||
            !dateOfBirth
        ) {
            toast({
                description:"the fields required !",
                variant: "destructive",
              })
            return;
        }

        const date = format(new Date(dateOfBirth), "yyyy-MM-dd");

      const response = await fetch(`http://127.0.0.1:8000/api/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                password,
                address,
                phoneNumber,
                dateOfBirth: date,
                gender,
                driverLicense,
            }),
        });
        const result = await response.json();
        console.log({result});
        if (result?.status === 'success') {
            setCookie("token",result?.token);
            toast({
                description:"create an account successfully !",
              })
              navigate("/");
        }else{

            toast({
                description:result?.message,
                variant: "destructive",
              })
        }
    };

    return (
        <div className="w-[90%] sm:w-[80%] lg:w-[60%] xl:w-[55%] mx-auto mt-6 rounded-2xl bg-[#1b1b1b]">
            <div className="bg-[#f5b754] rounded-t-2xl text-black font-semibold pl-12 py-6">
                create an account !
            </div>
            <form
                onSubmit={handleFrom}
                className="flex flex-col w-[90%]  md:flex-row md:flex-wrap mx-auto justify-center items-center gap-5 py-9"
            >
                <input
                    ref={fnameRef}
                    className="bg-[#222222] w-full md:w-[48%] px-4 py-2 outline-none rounded-3xl placeholder:text-[#999] placeholder:text-[14px]"
                    type="text"
                    id="fname"
                    placeholder="Your first name.."
                />

                <input
                    ref={lnameRef}
                    className="bg-[#222222]  w-full  md:w-[48%] px-4 py-2 outline-none rounded-3xl placeholder:text-[#999] placeholder:text-[14px]"
                    type="text"
                    id="lname"
                    placeholder="Your last name.."
                />
                <input
                    ref={emailRef}
                    className="bg-[#222222]  w-full md:w-[48%] px-4 py-2 outline-none rounded-3xl placeholder:text-[#999] placeholder:text-[14px]"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email.."
                />

                <div className="w-full md:w-[48%] relative">
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

                <input
                    ref={addressRef}
                    className="bg-[#222222]  w-full md:w-[48%] px-4 py-2 outline-none rounded-3xl placeholder:text-[#999] placeholder:text-[14px]"
                    type="text"
                    placeholder="Your adress.."
                />
                <input
                    ref={phoneRef}
                    className="bg-[#222222] w-full md:w-[48%] px-4 py-2 outline-none rounded-3xl placeholder:text-[#999] placeholder:text-[14px]"
                    type="text"
                    placeholder="Your phone number.."
                />
                <input
                    ref={driverLicenseRef}
                    className="bg-[#222222] w-full md:w-[48%] px-4 py-2 outline-none rounded-3xl placeholder:text-[#999] placeholder:text-[14px]"
                    type="text"
                    placeholder="Your driver license.."
                />
                <Popover>
                    <PopoverTrigger asChild>
                        <Button className="bg-[#222222] hover:bg-[#141313] shadow-2xl  w-full md:w-[48%] px-4 py-3 outline-none rounded-3xl text-[#999]">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {dateOfBirth ? (
                                format(dateOfBirth, "PPP")
                            ) : (
                                <span>Pick a date</span>
                            )}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar
                            mode="single"
                            selected={dateOfBirth}
                            onSelect={setDateOfBirth}
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>
                <div className="w-full text-[#999]">
                    <RadioGroup onValueChange={setGender} className="ml-9 my-1">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="male" id="r1" />
                            <Label htmlFor="r1">male</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Female" id="r2" />
                            <Label htmlFor="r2">female</Label>
                        </div>
                    </RadioGroup>
                </div>
                <Button className="bg-[#f5b754] hover:bg-[#f2ab39] font-bold shadow-2xl  w-full px-4 py-3 outline-none rounded-3xl">
                    create an account
                </Button>
            </form>
        </div>
    );
}
