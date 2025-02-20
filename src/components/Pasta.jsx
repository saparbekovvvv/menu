import React from 'react'
import { useNavigate } from 'react-router-dom';
import pasta from "../images/паста1 1 (1).png"

function Pasta() {
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
          <img src={pasta} alt="pasta" />
          </div>
         


</div>

</div>

  )
}

export default Pasta