import '../styles/section12.scss';
export default function Section12(): JSX.Element {
  return (
    // You will be coding here!
    <div id="section12">
      <p id="name" className="header">
        Ayub Ali
      </p>
      <h2 className="header2">
        Why is Ayub the GOAT?
        <ol>
          <li className="reason1">Comedic genius</li>
          <li className="reason1">Kind man</li>
          <li className="reason1">No further reason needed</li>
        </ol>
      </h2>
      <h3>
        <img
          src="https://media.tenor.com/tFftINGqFDYAAAAC/thats-too-easy-easy.gif"
          alt="lebron saying that's too easy"
        />
      </h3>

      <h4 className="header4">
        Click{' '}
        <a
          href="https://images.freshop.com/00016000122543/97d7fa46f37a416f7db58a6dbf152533_large.png"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>{' '}
        for a picture of my favorite cereal
      </h4>
    </div>
  );
}
