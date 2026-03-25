import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HistoryTable from "../components/HistoryTable";

function History() {

  return (

    <div className="flex bg-gray-100 min-h-screen">

      {/* <Sidebar /> */}

      <div className="flex-1 flex flex-col">

        <Navbar />

        <div className="p-6 flex-1">

          <HistoryTable />

        </div>

        <Footer />

      </div>

    </div>

  );

}

export default History;