import React from 'react'
import { useNavigate } from 'react-router-dom';
import Assorty from '../images/Ассорти 1.png';
import Shashlyki1 from '../images/шашлыки 1.png';
import Shashlyki2 from '../images/шашлыки1 1 (1).png';
import Shashlyki3 from '../images/шашлыки2 1.png';

function Shashlyki() {
  const Navigate = useNavigate();
  const handleMenu = () => {
      Navigate('/menu');
  }
  return (
    <div id='bgForPages'>
      <div className="exitPages">

   <h2  onClick={handleMenu}>&#10005;</h2>
      </div>
        <div className='pages'>
          <div className="pagesImg">
          <img src={Assorty} alt="Assorty" />
          <img src={Shashlyki1} alt="Shashlyki" />
          <img src={Shashlyki2} alt="Shashlyki" />
          <img src={Shashlyki3} alt="Shashlyki" />
          </div>
         


</div>

</div>

  )
}

export default Shashlyki