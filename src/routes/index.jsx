import { BrowserRouter, Route, Routes } from "react-router";
import DashboardLayout from "../layouts/Dashboard";
import Home from "../pages/Home";

const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardLayout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
 
export default Paths;