import '../styles/jennifer.scss';
import { useState } from 'react';
import CustomButton from './shared/CustomButton';
import CustomJennifer from './shared/CustomJennifer';
export default function Jennifer(): JSX.Element {
  // function handleChange(input: boolean)
  // {
  //   if(input) console.log('check');
  //   else console.log(':(');
  // }

  const [number, setNumber] = useState(0);
  const [txt, setTxt] = useState('');
  const [dsply, setDisply] = useState('');
  const food: string[] = ['cake'];
  return (
    <div id="jennifer">
      <p>jennifer</p>
      <p id="message">hello world</p>
      {/* <div>
        <input type="checkbox" onChange={function(e) {handleChange(e.target.checked);}}/>
      </div> */}
      <div>
        {' '}
        input text
        <input type="text" onChange={(e) => setTxt(e.target.value)} />
      </div>
      {txt === 'pass' ? <div> welcome! </div> : null}
      <div>
        {food.map((fd) => (
          <div key={fd}> {fd}! </div>
        ))}
      </div>
      <CustomButton
        text={number.toString()}
        onClick={() => {
          number < 100 ? setNumber(number + 1) : setNumber(number - 1);
        }}
      />{' '}
      click
      <CustomJennifer
        text={dsply}
        onClick={() => {
          setDisply('ooh typing');
        }}
      />
    </div>
  );
}
