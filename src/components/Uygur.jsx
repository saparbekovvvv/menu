import React from 'react'
import { useNavigate } from 'react-router-dom';
import uygur from '../images/уйгурка1 1.png';
import uygur1 from '../images/уйгурка2 1.png';
import uygur2 from '../images/уйгурка3 1.png';

function Uygur() {
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
            <img src={uygur} alt="" />
            <img src={uygur1} alt="" />
            <img src={uygur2} alt="" />
          </div>
         


</div>

</div>

  )
}

export default Uygur