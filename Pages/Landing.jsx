import { Link } from "react-router-dom";

function Landing() {

  return (

    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center">

      <div className="text-center text-white">

        <h1 className="text-4xl font-bold mb-4">
          AI Building Health Detection System
        </h1>

        <p className="mb-6 max-w-md mx-auto">
          Upload building images to detect cracks and analyze structural health using Artificial Intelligence.
        </p>

        <Link to="/dashboard">

          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg shadow-lg hover:bg-gray-100">

            Get Started

          </button>

        </Link>

      </div>

    </div>

  );
}

export default Landing;