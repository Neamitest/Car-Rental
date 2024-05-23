import { UserRound } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { getCurrentUser } from "@/actions/api";
import { useCookies } from "react-cookie";


export default function Navbar() {
    const [cookies, setCookie] = useCookies(["token"]);
    console.log(cookies?.token);
    const [navBarToggle, setNavbarToggle] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const auth = async () => {
        const response = await getCurrentUser(cookies?.token);
        console.log(response);
        if (response?.error == null && response?.result?.role == "admin") {
            setIsAdmin(true);
            console.log(response?.error);
        }
    };
    useEffect(() => {
        auth();
    }, []);
    return (
        <div className=" flex justify-between md:justify-around items-center w-full z-50 py-6 md:p-3 realtive text-white bg-[#222222]">
            {/* logo */}
            <h1 className=" w-[100px] md:w-[130px] ml-4">
                <a href="/">
                    <img
                        src="https://duruthemes.com/demo/html/renax/dark/img/logo-light.png"
                        alt="logo"
                    />
                </a>
            </h1>
            <ul
                className={`${
                    navBarToggle === false && "hidden md:flex"
                } flex flex-col md:flex-row z-50 gap-3 lg:gap-5 xl:gap-8 font-semibold  bg-[#222222] absolute md:static top-[80px] md:top-0  w-full md:w-fit p-6 md:p-0 `}
            >
                <li>
                    <Link to="/">
                        <span className="text-white capitalize hover:text-[#f5B754] text-sm ">
                            home
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <span className="text-white capitalize hover:text-[#f5B754] text-sm ">
                            about
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/services">
                        <span className="text-white capitalize hover:text-[#f5B754] text-sm">
                            services
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/cars">
                        <span className="text-white capitalize hover:text-[#f5B754] text-sm">
                            cars
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <span className="text-white capitalize hover:text-[#f5B754] text-sm">
                            blog
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <span className="text-white capitalize hover:text-[#f5B754] text-sm">
                            contact
                        </span>
                    </Link>
                </li>
                <li>
                    {isAdmin === true && (
                        <NavigationMenu>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="p-0 m-0 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent">
                                    <span className="text-white capitalize hover:text-[#f5B754] text-sm font-semibold ">
                                        dashboard
                                    </span>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="bg-[#222222]">
                                    <ul className="flex flex-col text-sm gap-2 py-5 px-2 w-[150px] ">
                                    <li>
                                            <Link
                                                to="/dashboard"
                                                className="hover:text-[#f5B754]"
                                            >
                                                dashboard
                                            </Link>
                                        </li>
                                        <hr />
                                        <li>
                                            <Link
                                                to="/dashboard/rental-booking "
                                                className="hover:text-[#f5B754]"
                                            >
                                                Rental Booking
                                            </Link>
                                        </li>
                                        <hr />
                                        <li>
                                            <Link
                                                to="/dashboard/users"
                                                className="hover:text-[#f5B754]"
                                            >
                                                Users
                                            </Link>
                                        </li>
                                        <hr />
                                        <li>
                                            <Link
                                                to="/dashboard/vehicles"
                                                className="hover:text-[#f5B754]"
                                            >
                                                Vehicles
                                            </Link>
                                        </li>
                                        <hr />
                                        <li>
                                            <Link
                                                to="/dashboard/fuel-types"
                                                className="hover:text-[#f5B754]"
                                            >
                                                Fuel types
                                            </Link>
                                        </li>
                                        <hr />
                                        <li>
                                            <Link
                                                to="/dashboard/vehicles-categories"
                                                className="hover:text-[#f5B754]"
                                            >
                                                Vehicles categories
                                            </Link>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenu>
                    )}
                </li>
            </ul>

            <div className="flex  items-center">
                <div className=" flex items-center gap-3 mr-8">
                    <span className="w-[40px] h-[40px] flex justify-center items-center border-2  border-[#f5B754] rounded-full hover:bg-[#f5B754] cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-phone"
                        >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                    </span>
                    <ul className="hidden lg:block">
                        <li className="text-sm">need help ?</li>
                        <li className=" font-medium hover:text-[#f5B754] cursor-pointer">
                            4949289402
                        </li>
                    </ul>
                    <span className="w-[40px] h-[40px] md:w-[40px] md:h-[40px] flex justify-center items-center border-2  lg:ml-8 border-[#f5B754] rounded-full bg-[#f5B754] hover:bg-transparent cursor-pointer">
                        <Link to="/login">
                            <UserRound />
                        </Link>
                    </span>
                </div>
                <svg
                    onClick={() => {
                        navBarToggle
                            ? setNavbarToggle(false)
                            : setNavbarToggle(true);
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-align-justify block bg-black mr-4 md:hidden"
                >
                    <line x1="3" x2="21" y1="6" y2="6" />
                    <line x1="3" x2="21" y1="12" y2="12" />
                    <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
            </div>
        </div>
    );
}
