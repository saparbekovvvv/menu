import React from 'react'
import { useNavigate } from 'react-router-dom';
import european from '../images/IMG_2083 1.png';
import european1 from '../images/европейка 3.png';
import european2 from '../images/европейка 4.png';

function European() {
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
            <img src={european} alt="european" />
            <img src={european1} alt="european1" />
            <img src={european2} alt="european2" />
          </div>
         


</div>

</div>

  )
}

export default European