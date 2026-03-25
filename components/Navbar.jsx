import { Link } from "react-router-dom";

function Navbar() {

  return (

    <div className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center">

      <h1 className="text-xl font-bold text-blue-600">

        AI Building Health Detection System

      </h1>

      <div className="flex gap-6 text-gray-600 font-medium">

        <Link to="/dashboard" className="hover:text-blue-600">
          Dashboard
        </Link>

        <Link to="/history" className="hover:text-blue-600">
          History
        </Link>

        <Link to="/about" className="hover:text-blue-600">
          About
        </Link>

      </div>

    </div>

  );

}

export default Navbar;