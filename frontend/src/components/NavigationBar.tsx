import { NavLink } from "react-router";

export function NavigationBar() {
  return (
    <div className="bg-blue-800 p-4 flex justify-between w-full">
      <p className="text-white"> CogniBox</p>
      <div className="flex gap-x-2">
        <NavLink to="/login" className="text-white">
          <span className="text-white hover:text-white/50">Login</span>
        </NavLink>
        <NavLink to="/register" className="text-white">
          <span className="text-white hover:text-white/50 border-1 border-white px-2 py-1 hover:border-white/50 rounded-lg">
            Register
          </span>
        </NavLink>
      </div>
    </div>
  );
}
