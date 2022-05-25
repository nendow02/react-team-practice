import '../styles/cadence.scss';
import { useState } from 'react';
import CustomButton from './shared/CustomButton';
export default function Cadence(): JSX.Element {
function handleChange(myBool : boolean)
{
  /* eslint-disable */
  console.log(myBool);
  /* eslint-enable */
}
const [number, setNumber] = useState(0);
const [my_string, setMy_String] = useState('Type something.');
  return (
    <div id="cadence">
      <p>cadence</p>
      <p>Hello World</p>
      <div id = "checkbox">
      <input
      type = "checkbox"
      onChange={function (e) {handleChange(e.target.checked);}}
      />
      I am in ACM TeachLA!
      <CustomButton text = {number.toString()} onClick = {() => setNumber(number + 1) }/>
      </div>
      <input
      type = "text"
      onChange = {function (e) {setMy_String(e.target.value);}}
      />
      <p>
        {my_string}
      </p>
    </div>

  );
}
