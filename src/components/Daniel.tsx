import '../styles/daniel.scss';
import { useState } from 'react';
import CustomButton from './shared/CustomButton';
export default function Daniel(): JSX.Element {
  const [number, setNumber] = useState(0);
  const [myValue, setMyValue] = useState('');
  const [anotherValue, setAnotherValue] = useState('');

  /*
  const shouldDisplay = (theValue: boolean) => {
    if (theValue)
    {
      return <CustomButton text={number.toString()} onClick={() => setNumber(number + 1)}/>;
    }
  };
  */

  const handleChange = (didChange: boolean) => {
    if (didChange) return;
    else return;
  };

  return (
    <div id="daniel">
      <input
        placeholder="Type HIDE to hide the button"
        onChange={(e) => {
          setMyValue(e.target.value);
        }}
      />
      {myValue !== 'HIDE' ? (
        <CustomButton
          text={number.toString()}
          onClick={() => setNumber(number + 1)}
        />
      ) : null}

      <div id="myCheckbox">
        <input
          type="checkbox"
          onChange={function (e) {
            handleChange(e.target.checked);
          }}
        />
        I am a TeachLA Member
      </div>

      <input
        placeholder="What number to display?"
        onChange={(e) => {
          setAnotherValue(e.target.value);
        }}
      />

      <ol>
        {anotherValue === 'One' ? <li>One</li> : null}
        {anotherValue === 'Two' ? <li>Two</li> : null}
        {anotherValue === 'Three' ? <li>Three</li> : null}
        {anotherValue === 'One Hundred' ? <li>One Hundred</li> : null}
        {anotherValue === 'Two Hundred' ? <li>Two Hundred</li> : null}
        {anotherValue === 'Three Hundred' ? <li>Three Hundred</li> : null}
      </ol>
    </div>
  );
}
