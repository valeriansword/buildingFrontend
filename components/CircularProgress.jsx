import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CircularProgress({ value }) {

  let color = "green";

  if (value < 50) color = "red";
  else if (value < 80) color = "orange";

  return (

    <div className="w-32 h-32">

      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={{
          path: {
            stroke: color
          }
        }}
      />

    </div>

  );
}

export default CircularProgress;