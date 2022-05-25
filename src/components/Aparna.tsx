//import AparnaComponent from './AparnaComp';
import { useState } from 'react';
import CustomButton from './shared/CustomButton';
import '../styles/aparna.scss';
export default function Aparna(): JSX.Element {
  function handleChange(a: boolean) {
    if (a) {
      /* eslint-disable */
      console.log("We're happy you're a part of TeachLA!");
      /* eslint-enable */
    }
  }

  const feelings = ['happy', 'sad'];

  const [number, setNumber] = useState(0);
  const [bool, setBool] = useState(true);

  return (
    <div id="aparna">
      <p>aparna</p>
      <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Fwave-hi-sticker-wave-hi-hello-discover-share-gifs--149392912630760632%2F&psig=AOvVaw2uYcjGHywCEhEcJiEUQh7Q&ust=1650505754822000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJCO8ZvDofcCFQAAAAAdAAAAABAJ">
        Hello World
      </a>
      <img
        src="https://www.thespruce.com/thmb/2fz1zlPNq7cj7QkLAtKdqYrKvs0=/3704x2778/smart/filters:no_upscale()/the-difference-between-trees-and-shrubs-3269804-hero-a4000090f0714f59a8ec6201ad250d90.jpg"
        alt="Tree"
        width="100"
        height="100"
      />
      <CustomButton
        text={bool ? 'True!' : 'False!'}
        onClick={() => setBool(!bool)}
      />{' '}
      Set to False!
      <CustomButton
        text={number.toString()}
        onClick={() => setNumber(number + 1)}
      />{' '}
      Add 1 to number!
      {number === 5 ? <p>Test</p> : null}
      {feelings.map((feeling) => (
        <div key={feeling}> Im feeling {feeling}</div>
      ))}
      <div id="check">
        <input
          type="checkbox"
          onChange={function (e) {
            handleChange(e.target.checked);
          }}
        />
        I am in ACM Teach LA
      </div>
    </div>
  );
}
