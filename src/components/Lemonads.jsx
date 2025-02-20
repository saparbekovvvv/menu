import React from 'react'
import { useNavigate } from 'react-router-dom';
import lemonads from "../images/лимонады 1 (1).png"

function Lemonads() {
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
          <img src={lemonads} alt="lemonads" />
          </div>
         


</div>

</div>

  )
}

export default Lemonads