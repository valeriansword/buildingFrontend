function HistoryTable() {

  // Dummy data (later can connect backend)
  const historyData = [

    {
      id: 1,
      image: "sample1.jpg",
      result: "Crack Detected",
      health: "42%",
      date: "24-03-2026 18:30"
    },

    {
      id: 2,
      image: "sample2.jpg",
      result: "No Crack",
      health: "96%",
      date: "24-03-2026 18:45"
    }

  ];

  return (

    <div className="bg-white shadow-lg rounded-xl p-6">

      <h2 className="text-xl font-semibold mb-4">

        Upload History

      </h2>

      <table className="w-full border-collapse">

        <thead>

          <tr className="bg-gray-100 text-left">

            <th className="p-3">Image</th>
            <th className="p-3">Result</th>
            <th className="p-3">Health %</th>
            <th className="p-3">Date</th>

          </tr>

        </thead>

        <tbody>

          {historyData.map((item) => (

            <tr
              key={item.id}
              className="border-b hover:bg-gray-50"
            >

              <td className="p-3">
                {item.image}
              </td>

              <td className={`p-3 font-semibold ${
                item.result === "Crack Detected"
                  ? "text-red-500"
                  : "text-green-500"
              }`}>

                {item.result}

              </td>

              <td className="p-3">

                {item.health}

              </td>

              <td className="p-3">

                {item.date}

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default HistoryTable;