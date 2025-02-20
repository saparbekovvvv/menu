import React from 'react'
import { useNavigate } from 'react-router-dom';
import teas from "../images/чаи 1.png"

function Teas() {
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
          <img src={teas} alt="teas" />
          </div>
         


</div>

</div>

  )
}

export default Teas