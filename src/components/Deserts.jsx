import React from 'react'
import { useNavigate } from 'react-router-dom';
import deserts from "../images/десерты 1.png"

function Deserts() {
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
          <img src={deserts} alt="deserts" />
          </div>
         


</div>

</div>

  )
}

export default Deserts