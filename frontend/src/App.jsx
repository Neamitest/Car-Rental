import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import { Toaster } from "@/components/ui/toaster";
import Home from "./pages/home";
import Cars from "./pages/cars";
import { ThemeProvider } from "./components/theme-provider";
import Details from "./pages/details";
import Login from "./pages/auth/login";
import SignUp from "./pages/auth/signUp";
import Dashboard from "./pages/dashboard/dashboard";
import AddRentalBooking from "./pages/dashboard/addRentalBooking";
import Vehicles from "./pages/dashboard/vehicles";
import AddVehicles from "./pages/dashboard/addVehicles";
import RentalBooking from "./pages/dashboard/rentalBooking";


function App() {
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cars" element={<Cars />} />
                        <Route path="/cars/:id" element={<Details />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/Sign-up" element={<SignUp />} />

                        <Route path="dashboard" element={<Outlet />}>
                            <Route index element={<Dashboard />} />
                            {/* <Route path="users" element={<Dashboard />} />
                            <Route path="fuel-types" element={<Dashboard />} /> */}
                            <Route path="vehicles" element={<Outlet />} >
                            <Route index element={<Vehicles />} />
                            <Route path="add" element={<AddVehicles/>} />
                            </Route>
                            <Route
                                path="rental-booking"
                                element={<RentalBooking />}
                            />

                            <Route
                                path="add-renatl-booking"
                                element={<AddRentalBooking />}
                            />
                        </Route>
                        {/* <Route path="*" element={<NotFound />} /> */}
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
            <Toaster />
        </>
    );
}

export default App;
