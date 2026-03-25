function About() {

  return (

    <div className="p-6">

      <h1 className="text-2xl font-bold mb-4">

        About Project

      </h1>

      <p>

        This system detects cracks in building surfaces using deep learning models.
        The uploaded images are analyzed using a trained YOLO-based classifier.
        Structural health percentage is calculated based on detected crack confidence.

      </p>

    </div>

  );
}

export default About;