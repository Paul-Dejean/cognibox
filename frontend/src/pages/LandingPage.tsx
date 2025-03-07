import { NavLink } from "react-router";
import { NavigationBar } from "../components/NavigationBar";

export function LandingPage() {
  return (
    <div className="h-screen w-screen  bg-[url(/cloud-storage.jpg)] bg-center overflow-hidden">
      <NavigationBar />
      <div className="container mx-auto flex justify-center items-center h-full">
        <div className="flex gap-x-8 justify-center items-center bg-blue-800 rounded-lg">
          <h1 className=" height-1/2 w-1/2 p-4 rounded-lg text-white">
            A revolutionary new way of sharing files
          </h1>

          <NavLink to="/register" className="text-white bg-blue-800 text-2xl ">
            <span className="text-white hover:text-white/50 border-1 border-white px-2 py-1 hover:border-white/50 rounded-lg">
              Get Started
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
