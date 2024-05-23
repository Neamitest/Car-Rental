import React, { useEffect } from "react";
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
import { getCategories, getFuelTypes } from "@/actions/api";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function AddVehicles() {
    const [categories, setCategories] = useState([]);
    const [fuelTypes, setFuelTypes] = useState([]);
    const [purchaseDay, setPurchaseDay] = useState(new Date());
    const [categoryId, setCategoryId] = useState(null);
    const [fuelTypeId, setFuelTypeId] = useState(null);
    const makeRef = useRef();
    const modelRef = useRef();
    const yearRef = useRef();
    const colorRef = useRef();
    const pricePerDayRef = useRef();
    const mileageRef = useRef();
    const plateNumberRef = useRef();
    const purchasePriceRef = useRef();
    const photoRef = useRef();
    const navigate = useNavigate();
    const { toast } = useToast();
    const baseURL = "http://127.0.0.1:8000/api";
console.log(categoryId,fuelTypeId);
    const getData = async () => {
        setCategories((await getCategories())?.result);
        setFuelTypes((await getFuelTypes())?.result);
    };
    useEffect(() => {
        getData();
        console.log(purchaseDay);
    }, [purchaseDay]);

    const handleFrom = async (e) => {
        e.preventDefault();
        const make = makeRef?.current?.value;
        const model = modelRef?.current?.value;
        const year = yearRef?.current?.value;
        const color = colorRef?.current?.value;
        const pricePerDay = pricePerDayRef?.current?.value;
        const mileage = mileageRef?.current?.value;
        const plateNumber = plateNumberRef?.current?.value;
        const purchasePrice = purchasePriceRef?.current?.value;
        const photo = photoRef?.current?.files[0];
        console.log({ photo });
        if (
            !make ||
            !model ||
            !year ||
            !color ||
            !pricePerDay ||
            !mileage ||
            !plateNumber ||
            !purchasePrice ||
            !photo ||
            !fuelTypeId ||
            !categoryId
        ) {
            toast({
                description: "the fields required !",
                variant: "destructive",
            });
            return;
        }
        const date = format(new Date(purchaseDay), "yyyy-MM-dd");

        const formData = new FormData();
        formData.append("make", make);
        formData.append("model", model);
        formData.append("categoryId", categoryId);
        formData.append("fuelTypeId", fuelTypeId);
        formData.append("year", year);
        formData.append("color", color);
        formData.append("pricePerDay", pricePerDay);
        formData.append("mileage", mileage);
        formData.append("plateNumber", plateNumber);
        formData.append("purchasePrice", purchasePrice);
        formData.append("purchaseDate", date);
        formData.append("photo", photo);
        const response = await fetch(`${baseURL}/vehicles`, {
            method: "POST",
            body: formData,
        });
        const result = await response.json();
        console.log({ result });
        if (result?.status === "success") {
            
            toast({
                description: "create vehicle successfully !",
            });
            navigate("/dashboard/vehicles");
        } else {
            toast({
                description: result?.message,
                variant: "destructive",
            });
        }
    };

    return (
        <div className="w-[90%] sm:w-[80%] lg:w-[60%] xl:w-[55%] mx-auto mt-6 rounded-2xl bg-[#1b1b1b]">
            <div className="bg-[#f5b754] rounded-t-2xl text-black font-semibold pl-12 py-6">
                add vehicle
            </div>
            <form
                onSubmit={handleFrom}
                className="flex flex-col w-[90%]  md:flex-row md:flex-wrap mx-auto justify-center items-center gap-5 py-9"
            >
                <input
                    ref={makeRef}
                    className="bg-[#222222] w-full md:w-[48%] px-4 py-2 outline-none rounded-3xl placeholder:text-[#999] placeholder:text-[14px]"
                    type="text"
                    id="make"
                    placeholder="Vehicle Make.."
                />
                <input
                    ref={modelRef}
                    className="bg-[#222222] w-full md:w-[48%] px-4 py-2 outline-none rounded-3xl placeholder:text-[#999] placeholder:text-[14px]"
                    type="text"
                    id="model"
                    placeholder="Vehicle Model.."
                />
                <input
                    ref={yearRef}
                    className="bg-[#222222] w-full md:w-[48%] px-4 py-2 outline-none rounded-3xl placeholder:text-[#999] placeholder:text-[14px]"
                    type="number"
                    id="year"
                    placeholder="Vehicle Year.."
                />
                <input
                    ref={colorRef}
                    className="bg-[#222222] w-full md:w-[48%] px-4 py-2 outline-none rounded-3xl placeholder:text-[#999] placeholder:text-[14px]"
                    type="text"
                    id="color"
                    placeholder="Vehicle Color.."
                />
                <input
                    ref={pricePerDayRef}
                    className="bg-[#222222] w-full md:w-[48%] px-4 py-2 outline-none rounded-3xl placeholder:text-[#999] placeholder:text-[14px]"
                    type="text"
                    id="fname"
                    placeholder="price per day.."
                />
                <input
                    ref={mileageRef}
                    className="bg-[#222222] w-full md:w-[48%] px-4 py-2 outline-none rounded-3xl placeholder:text-[#999] placeholder:text-[14px]"
                    type="text"
                    id="mileage"
                    placeholder="mileage.."
                />
                <input
                    ref={plateNumberRef}
                    className="bg-[#222222] w-full md:w-[48%] px-4 py-2 outline-none rounded-3xl placeholder:text-[#999] placeholder:text-[14px]"
                    type="text"
                    id="fname"
                    placeholder="Plate Number.."
                />
                <Popover>
                    <PopoverTrigger asChild>
                        <Button className="px-4 bg-[#222222] w-full hover:bg-[#222222] text-[#999] md:w-[48%] py-2 outline-none rounded-3xl ">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {purchaseDay ? (
                                format(purchaseDay, "PPP")
                            ) : (
                                <span className="text-[#999] text-[14px]">
                                    Pick a date
                                </span>
                            )}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar
                            mode="single"
                            selected={purchaseDay}
                            onSelect={setPurchaseDay}
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>
                <input
                    ref={purchasePriceRef}
                    className="bg-[#222222] w-full md:w-[48%] px-4 py-2 outline-none rounded-3xl placeholder:text-[#999] placeholder:text-[14px]"
                    type="text"
                    id="purchasePrice"
                    placeholder="purchase price.."
                />

                <Select onValueChange={setCategoryId}>
                    <SelectTrigger className="px-4 bg-[#222222] w-full md:w-[48%] py-2 outline-none rounded-3xl placeholder:text-[#999] placeholder:text-[14px]">
                        <SelectValue placeholder="category.." />
                    </SelectTrigger>
                    <SelectContent className="bg-[#222222] hover:bg-[#222222] ">
                        <SelectGroup>
                            {categories?.map((category) => {
                                return (
                                    <SelectItem
                                        key={category?.id}
                                        value={category?.id}
                                    >
                                        {category?.name}
                                    </SelectItem>
                                );
                            })}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select onValueChange={setFuelTypeId}>
                    <SelectTrigger className="px-4 bg-[#222222] w-full md:w-[48%] py-2 outline-none rounded-3xl placeholder:text-[#999] placeholder:text-[14px]">
                        <SelectValue placeholder="Fuel Type.." />
                    </SelectTrigger>
                    <SelectContent className="bg-[#222222] hover:bg-[#222222] ">
                        <SelectGroup>
                            {fuelTypes?.map((fuelType) => {
                                return (
                                    <SelectItem
                                        key={fuelType?.id}
                                        value={fuelType?.id}
                                    >
                                        {fuelType?.name}
                                    </SelectItem>
                                );
                            })}
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <input
                    ref={photoRef}
                    className="bg-[#222222] w-full md:w-[48%] px-4 py-2 outline-none rounded-3xl placeholder:text-[#999] placeholder:text-[14px]"
                    type="file"
                    id="Photo"
                    placeholder="Photo.."
                />
                <Button className="bg-[#f5b754] hover:bg-[#f2ab39] font-bold shadow-2xl  w-full px-4 py-3 outline-none rounded-3xl">
                    create an vehicle
                </Button>
            </form>
        </div>
    );
}
