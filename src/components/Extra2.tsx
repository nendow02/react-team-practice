import { useState } from 'react';
import '../styles/extra2.scss';
import CustomButton from './shared/CustomButton';
export default function Extra2(): JSX.Element {
  const [count, setCount] = useState(0);
  return (
    <div id="extra2">
      <p>Nathan :)</p>
      <CustomButton
        text={'Count: ' + String(count)}
        onClick={() => setCount(count + 1)}
      />
    </div>
  );
}
