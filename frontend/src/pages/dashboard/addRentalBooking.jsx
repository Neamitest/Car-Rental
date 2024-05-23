import React from 'react'
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
export default function AddRentalBooking() {
  return (
    <div className="w-[90%] sm:w-[80%] lg:w-[60%] xl:w-[55%] mx-auto mt-6 rounded-2xl bg-[#1b1b1b]">
            <div className="bg-[#f5b754] rounded-t-2xl text-black font-semibold pl-12 py-6">
                add rental booking
            </div>
            
        </div>
  )
}
