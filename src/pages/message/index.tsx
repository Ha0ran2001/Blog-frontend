import * as React from 'react';

import './message.css';

import earth from '../../assets/img/earth.png';
import background from '../../assets/img/background.jpg';
import man from '../../assets/img/man.png';
import planet1 from '../../assets/img/planet1.png';
import planet2 from '../../assets/img/planet2.png';
import planet3 from '../../assets/img/planet3.png';
import planet4 from '../../assets/img/planet4.png';
import planet5 from '../../assets/img/planet5.png';
import rocket from '../../assets/img/rocket.png';
import text from '../../assets/img/text.png';

export interface MessgaeProps {

}

const Messgae: React.FC<MessgaeProps> = () => {

  const canvasRef = React.useRef(null);



  const sentMessage = (e) => {
    if (e.keyCode === 13) {
      console.log(e.target.value);

    }
  }


  return (
    <div className='min-h-screen w-full relative'>
      <canvas ref={canvasRef} width="100vw" height="100vh"></canvas>
      <header id="header" className='w-full'>
        <div><img src={background} alt="" /></div>
        <div><img src={earth} alt="" /></div>
        <div><img src={man} alt="" /></div>
        <div><img src={planet1} alt="" /></div>
        <div><img src={planet2} alt="" /></div>
        <div><img src={planet3} alt="" /></div>
        <div><img src={planet4} alt="" /></div>
        <div><img src={planet5} alt="" /></div>
        <div><img src={rocket} alt="" /></div>
        <div><img src={text} alt="" /></div>

        <div className='message-title'>输入留言试试！</div>
        <input type="text" className='message-input' onKeyUp={(e) => sentMessage(e)} />
      </header>
    </div>
  );
}

export default Messgae;