interface CustomJenniferProp
{
    text: string;
    onClick: ()=>void
}

export default function CustomJennifer(props: CustomJenniferProp) : JSX.Element
{
    return (
        <div>
            <input type="text" placeholder={props.text} onClick={props.onClick}/>
        </div>
    );

}