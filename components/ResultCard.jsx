import CircularProgress from "./CircularProgress";

function ResultCard({ result }) {

  if (!result) return null;

  return (

    <div className="bg-white rounded-xl shadow-md p-6 mt-6">

      <h2 className="text-xl font-semibold mb-4">

        Detection Result

      </h2>

      <p className={`font-bold ${
        result.prediction === "Positive"
        ? "text-red-500"
        : "text-green-500"
      }`}>

        {result.prediction === "Positive"
          ? "Crack Detected"
          : "No Crack Detected"}

      </p>

      <div className="mt-4 flex items-center gap-6">

        <CircularProgress
          value={result.structural_health}
        />

        <div>

          <p>
            Confidence: {result.confidence}%
          </p>

          <p>
            Status: {result.status}
          </p>

        </div>

      </div>

    </div>

  );
}

export default ResultCard;