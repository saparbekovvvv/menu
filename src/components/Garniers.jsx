import React from 'react'
import { useNavigate } from 'react-router-dom';
import garniers from "../images/гарниры 1.png"

function Garniers() {
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
          <img src={garniers} alt="garniers" />
          </div>
         


</div>

</div>

  )
}

export default Garniers