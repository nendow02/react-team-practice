import '../styles/section4.scss';
import name from '/Users/tiffanywang/Desktop/acm teach/react-team-practice-s23/src/components/IMG_8859.jpeg';

export default function Section4(): JSX.Element {
  return (
    // You will be coding here!
    <div id="section4">
      <h1 id="nameheader">Tiffany Wang</h1>
      <h3 className='about'>About Me</h3>
      <p className='list'>1. I like drinking boba with 0 sugar.</p>
      <p className='list'>2. I only have 1 wisdom tooth.</p>
      <p className='list'>3. I have a shiba named Yuka. :)</p>
      <img id="image1" src = {name} height = "380" width = "300"></img>
    </div>
  );
}
