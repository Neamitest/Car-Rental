import { Button } from "@/components/ui/button";
import {
    Carousel as CarouselMatrail,
    Typography,
} from "@material-tailwind/react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Check } from "lucide-react";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
    const [date, setDate] = useState();
    const carTypes = [
        "all",
        "luxury cars",
        "sport cars",
        "SUVs",
        "convertible",
    ];
    const pickUpLocation = ["safi", "casa", "fas"];
    const dropOffLocation = ["safi", "casa", "fas"];

    return (
        <div className="">
            <div className="w-full h-[89vh] relative">
                <CarouselMatrail className="relative">
                    <div className="relative h-full w-full">
                        <img
                            src="https://duruthemes.com/demo/html/renax/dark/img/slider/11.jpg"
                            alt="image 1"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                            <div className="ml-20 flex flex-col gap-6 justify-center  h-full">
                                <Typography
                                    variant="paragraph"
                                    className=" text-[#f5B754]  font-extralight"
                                >
                                    Premium
                                </Typography>
                                <Typography
                                    variant="h1"
                                    color="white"
                                    className=" text-3xl md:text-8xl"
                                >
                                    Rental Car
                                </Typography>
                                <Typography
                                    color="white"
                                    className=" text-lg font-medium"
                                >
                                    Bentley Bentaygo{" "}
                                    <span className="text-[#f5B754]  font-semibold">
                                        $600
                                    </span>{" "}
                                    /day
                                </Typography>
                                <div className="flex gap-2">
                                    <Button
                                        size="lg"
                                        className="bg-[#f5B754] hover:bg-white text-black rounded-full "
                                    >
                                        View Details
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-arrow-up-right ml-4"
                                        >
                                            <path d="M7 7h10v10" />
                                            <path d="M7 17 17 7" />
                                        </svg>
                                    </Button>
                                    <Button
                                        size="lg"
                                        className=" bg-transparent border-[1px] hover:bg-[#f5B754] hover:border-[#f5B754] text-white rounded-full "
                                    >
                                        Rent Now
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-arrow-up-right ml-4 "
                                        >
                                            <path d="M7 7h10v10" />
                                            <path d="M7 17 17 7" />
                                        </svg>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-full w-full">
                        <img
                            src="https://duruthemes.com/demo/html/renax/dark/img/slider/12.jpg"
                            alt="image 1"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                            <div className="ml-20 flex flex-col gap-6 justify-center  h-full">
                                <Typography
                                    variant="paragraph"
                                    className=" text-[#f5B754]  font-extralight"
                                >
                                    Premium
                                </Typography>
                                <Typography
                                    variant="h1"
                                    color="white"
                                    className=" text-3xl md:text-8xl"
                                >
                                    Rental Car
                                </Typography>
                                <Typography
                                    color="white"
                                    className=" text-lg font-medium"
                                >
                                    Bentley Bentaygo{" "}
                                    <span className="text-[#f5B754]  font-semibold">
                                        $600
                                    </span>{" "}
                                    /day
                                </Typography>
                                <div className="flex gap-2">
                                    <Button
                                        size="lg"
                                        className="bg-[#f5B754] hover:bg-white text-black rounded-full "
                                    >
                                        View Details
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-arrow-up-right ml-4"
                                        >
                                            <path d="M7 7h10v10" />
                                            <path d="M7 17 17 7" />
                                        </svg>
                                    </Button>
                                    <Button
                                        size="lg"
                                        className=" bg-transparent border-[1px] hover:bg-[#f5B754] hover:border-[#f5B754] text-white rounded-full "
                                    >
                                        Rent Now
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-arrow-up-right ml-4 "
                                        >
                                            <path d="M7 7h10v10" />
                                            <path d="M7 17 17 7" />
                                        </svg>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-full w-full">
                        <img
                            src="https://duruthemes.com/demo/html/renax/dark/img/slider/14.jpg"
                            alt="image 1"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                            <div className="ml-20 flex flex-col gap-6 justify-center  h-full">
                                <Typography
                                    variant="paragraph"
                                    className=" text-[#f5B754]  font-extralight"
                                >
                                    Premium
                                </Typography>
                                <Typography
                                    variant="h1"
                                    color="white"
                                    className=" text-3xl md:text-8xl"
                                >
                                    Rental Car
                                </Typography>
                                <Typography
                                    color="white"
                                    className=" text-lg font-medium"
                                >
                                    Bentley Bentaygo{" "}
                                    <span className="text-[#f5B754]  font-semibold">
                                        $600
                                    </span>{" "}
                                    /day
                                </Typography>
                                <div className="flex gap-2">
                                    <Button
                                        size="lg"
                                        className="bg-[#f5B754] hover:bg-white text-black rounded-full "
                                    >
                                        View Details
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-arrow-up-right ml-4"
                                        >
                                            <path d="M7 7h10v10" />
                                            <path d="M7 17 17 7" />
                                        </svg>
                                    </Button>
                                    <Button
                                        size="lg"
                                        className=" bg-transparent border-[1px] hover:bg-[#f5B754] hover:border-[#f5B754] text-white rounded-full "
                                    >
                                        Rent Now
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-arrow-up-right ml-4 "
                                        >
                                            <path d="M7 7h10v10" />
                                            <path d="M7 17 17 7" />
                                        </svg>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </CarouselMatrail>
            </div>
            {/*  */}
            <div className="flex flex-col items-center lg:flex-row justify-center w-full p-4 mt-14 gap-4">
                <ul className="flex flex-col md:w-[500px] gap-4 px-3 my-9 text-[#9b9b9b] text-[15px] ">
                    {/* <li>
                        <p className=" text-[#f5B754]  font-extralight">
                            RENTAX
                        </p>
                    </li> */}
                    <li>
                        <h3 className="text-white text-xl md:text-3xl lg:text-4xl">
                            We Are More Than
                        </h3>
                    </li>
                    <li>
                        <h3 className="text-[#f5B754] text-xl md:text-3xl lg:text-4xl">
                            A Car Rental Company
                        </h3>
                    </li>
                    <li>
                        <p>
                            Car repair quisque sodales dui ut varius vestibulum
                            drana tortor turpis porttiton tellus eu euismod nisl
                            massa nutodio in the miss volume place urna lacinia
                            eros nunta urna mauris vehicula rutrum in the miss
                            on volume interdum.
                        </p>
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] flex justify-center items-center rounded-full text-[#f5B754]  bg-[#222222] ">
                            <Check />
                        </span>
                        <p>Sports and Luxury Cars</p>
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] flex justify-center items-center rounded-full text-[#f5B754] bg-[#222222] ">
                            <Check />
                        </span>
                        <p>Economy Cars</p>
                    </li>
                    <li>
                        <Button
                            size="lg"
                            className="bg-[#f5B754] my-3 hover:bg-white text-black rounded-full "
                        >
                            read more
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-arrow-up-right ml-4"
                            >
                                <path d="M7 7h10v10" />
                                <path d="M7 17 17 7" />
                            </svg>
                        </Button>
                    </li>
                </ul>
                <div className=" sm:w-[70%] md:w-[60%] lg:w-[46%]">
                    <img
                        className="rounded-3xl w-full"
                        src="https://img.freepik.com/free-photo/portrait-car-salesman_23-2148130726.jpg?t=st=1715804804~exp=1715808404~hmac=190e38e1fd936ff43b778da36aa727a95950bc3e21026331a511639c5b107677&w=740"
                    />
                </div>
            </div>
            <div className="relative w-full  text-[#9b9b9b]">
                <div className=" inset-0 bg-black opacity-40 w-full h-full z-10 absolute" />
                <ul
                    className=" w-full py-8 relative flex flex-col gap-5   items-center bg-fixed bg-cover bg-center "
                    style={{
                        backgroundImage: `url('https://duruthemes.com/demo/html/renax/dark/img/slider/2.jpg')`,
                    }}
                >
                    <li className="text-[#f5B754] z-20  pt-[110px] font-extralight">
                        RENT NOW
                    </li>
                    <li className="text-white text-xl z-20  md:text-3xl lg:text-4xl">
                        Book Auto Rental
                    </li>
                    <li className="z-20 w-full flex justify-center">
                        <ul className="w-[90%] sm:w-[70%] md:w-[90%] flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4  bg-[#1b1b1b] p-5 rounded-lg ">
                            <li>
                                <Select className="outline-none border-none ">
                                    <SelectTrigger className="w-full min-w-[200px] bg-[#1b1b1b] outline-none">
                                        <SelectValue placeholder="choose car type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>
                                                choose car type
                                            </SelectLabel>
                                            {carTypes?.map((carType, index) => (
                                                <SelectItem
                                                    key={index}
                                                    value={carType}
                                                >
                                                    {carType}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </li>
                            <li>
                                <Select className="outline-none border-none">
                                    <SelectTrigger className="w-full min-w-[200px] bg-[#1b1b1b] outline-none">
                                        <SelectValue placeholder="Pick Up Location" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>
                                                Pick Up Location
                                            </SelectLabel>
                                            {carTypes?.map((carType, index) => (
                                                <SelectItem
                                                    key={index}
                                                    value={carType}
                                                >
                                                    {carType}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </li>

                            <li>
                                <Select className="outline-none border-none">
                                    <SelectTrigger className="w-full min-w-[200px] bg-[#1b1b1b] outline-none">
                                        <SelectValue placeholder="Drop Off Location" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>
                                                Drop Off Location
                                            </SelectLabel>
                                            {carTypes?.map((carType, index) => (
                                                <SelectItem
                                                    key={index}
                                                    value={carType}
                                                >
                                                    {carType}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </li>
                            <li>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            className={cn(
                                                "w-full min-w-[200px] bg-transparent border hover:bg-transparent justify-start text-left font-normal",
                                                !date && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {date ? (
                                                format(date, "PPP")
                                            ) : (
                                                <span>Pick Up date</span>
                                            )}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </li>
                            <li>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            className={cn(
                                                "w-full min-w-[200px] bg-transparent border hover:bg-transparent justify-start text-left font-normal",
                                                !date && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {date ? (
                                                format(date, "PPP")
                                            ) : (
                                                <span>Return Date</span>
                                            )}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </li>
                            <li>
                                <Button
                                    size="lg"
                                    className="bg-[#f5B754] min-w-[200px] my-3 hover:bg-white text-black rounded-full "
                                >
                                    Rent Now
                                </Button>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="w-full flex  flex-col justify-center items-center py-20">
                <p className="text-[#f5B754]">CATEGORIES</p>
                <h1 className="text-3xl  lg:text-[40px] py-8">
                    Rental <span className="text-[#f5B754]"> Car Types</span>
                </h1>

                <Carousel className=" w-[90%] ">
                    <CarouselContent className="ml-1">
                        <CarouselItem className=" relative pl-1 p-5 md:basis-1/2 lg:basis-1/3 ">
                            <h2 className=" top-9 left-9 absolute text-2xl font-bold">
                                Luxury Cars
                            </h2>
                            <img
                                className=" rounded-3xl"
                                src="https://duruthemes.com/demo/html/renax/dark/img/cars/03.jpg"
                            />
                        </CarouselItem>
                        <CarouselItem className=" relative pl-1 p-5 md:basis-1/2 lg:basis-1/3 ">
                            <h2 className=" top-9 left-9 absolute text-2xl font-bold">
                                Sport Cars
                            </h2>
                            <img
                                className=" rounded-3xl"
                                src="https://duruthemes.com/demo/html/renax/dark/img/cars/04.jpg"
                            />
                        </CarouselItem>
                        <CarouselItem className=" relative pl-1 p-5 md:basis-1/2 lg:basis-1/3">
                            <h2 className=" top-9 left-9 absolute text-2xl font-bold">
                                SUV
                            </h2>
                            <img
                                className=" rounded-3xl"
                                src="https://duruthemes.com/demo/html/renax/dark/img/cars/02.jpg"
                            />
                        </CarouselItem>
                        <CarouselItem className=" relative pl-1 p-5 md:basis-1/2 lg:basis-1/3">
                            <h2 className=" top-9 left-9 absolute text-2xl font-bold">
                                Convertible
                            </h2>
                            <img
                                className=" rounded-3xl"
                                src="https://duruthemes.com/demo/html/renax/dark/img/cars/01.jpg"
                            />
                        </CarouselItem>
                        <CarouselItem className=" relative pl-1 p-5 md:basis-1/2 lg:basis-1/3">
                            <h2 className=" top-9 left-9 absolute text-2xl font-bold">
                                Sedan
                            </h2>
                            <img
                                className=" rounded-3xl"
                                src="https://duruthemes.com/demo/html/renax/dark/img/cars/05.jpg"
                            />
                        </CarouselItem>
                        <CarouselItem className=" relative pl-1 p-5 md:basis-1/2 lg:basis-1/3">
                            <h2 className=" top-9 left-9 absolute text-2xl font-bold">
                                Small Cars
                            </h2>
                            <img
                                className=" rounded-3xl"
                                src="https://duruthemes.com/demo/html/renax/dark/img/cars/06.jpg"
                            />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    );
}
