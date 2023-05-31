import '../styles/section5.scss';
import dog from '/Users/natalielord/react-team-practice-s23/src/components/dog.jpeg';
export default function Section5(): JSX.Element {
  return (
    // You will be coding here!
    <div className="section5">
      <h1>Natalie</h1>
      <p id = "test">About me:</p>
      <ol className ="test2">
        <li> I'm from Florida. </li>
        <li> I love matcha! </li>
        <li> I have run a half marathon</li>
      </ol>
      <img src={dog} height="400px"/>
    </div>
  );
}
