import '../../styles/customButton.scss';
interface customButtonProps {
  text: string;
  onClick: ()=>void;
}

export default function CustomButton(props: customButtonProps): JSX.Element {
  return (
    <button id="custom" onClick={props.onClick}>
      {props.text}
    </button>
  );
}
