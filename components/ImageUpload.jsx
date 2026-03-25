import { useState } from "react";
import axios from "axios";

function ImageUpload({ setResult }) {

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadImage = async () => {

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);

    try {

      const res = await axios.post(
        "http://127.0.0.1:8000/predict/",
        formData
      );

      setResult(res.data);

    } catch {

      alert("Backend error");

    }

    setLoading(false);
  };

  return (

    <div className="bg-white rounded-xl shadow-md p-6">

      <input
        type="file"
        onChange={(e)=>setFile(e.target.files[0])}
        className="mb-4"
      />

      <button
        onClick={uploadImage}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg">

        {loading ? "Processing..." : "Upload Image"}

      </button>

    </div>

  );
}

export default ImageUpload;