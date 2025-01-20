import { Outlet } from "react-router";
import Header from "../components/Header";

const DashboardLayout = () => {
    return (
        <div className="flex">
            <Header />
            <main className="w-10/12 p-4">
                <Outlet />
            </main>
        </div>
    );
}
 
export default DashboardLayout;