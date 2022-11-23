import '../styles/section1.scss';
export default function Section1(): JSX.Element {
  return (
    // You will be coding here!
    <div id="section1">
      <p className="text" id="title">
        Kati RP
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/78/BlackStar.PNG"
        alt="can't load the image"
      ></img>
      <ol className="text">
        <li>This</li>
        <li>is</li>
        <li>a</li>
        <li>black</li>
        <li>star</li>
      </ol>
      <ul className="text">
        <li>on</li>
        <li>a</li>
        <li>green</li>
        <li>background</li>
      </ul>
      <a
        href="https://apod.nasa.gov/apod/astropix.html"
        target="_blank"
        rel="noreferrer"
      >
        Astronomy pic of the day
      </a>
    </div>
  );
}

//https://apod.nasa.gov/apod/astropix.html
