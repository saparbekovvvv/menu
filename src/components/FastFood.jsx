import React from 'react'
import { useNavigate } from 'react-router-dom';
import fastFood from "../images/фастфуд 1.png"

function FastFood() {
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
          <img src={fastFood} alt="fastFood" />
          </div>
         


</div>

</div>

  )
}

export default FastFood