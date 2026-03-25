import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageUpload from "../components/ImageUpload";
import ResultCard from "../components/ResultCard";

function Dashboard() {

  const [result, setResult] = useState(null);

  return (

    <div className="flex bg-gray-100 min-h-screen">

      {/* <Sidebar /> */}

      <div className="flex-1 flex flex-col">

        <Navbar />

        <div className="p-6 flex-1">

          <h1 className="text-2xl font-bold mb-6">

            Dashboard

          </h1>

          <ImageUpload setResult={setResult} />

          <ResultCard result={result} />

        </div>

        <Footer />

      </div>

    </div>

  );

}

export default Dashboard;