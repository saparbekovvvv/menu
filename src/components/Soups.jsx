import React from 'react'
import { useNavigate } from 'react-router-dom';
import Supy from "../images/супы2 1.png"
import Supy1 from "../images/супы1 1.png"

function Soups() {
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
          <img src={Supy} alt="Supy" />
          <img src={Supy1} alt="Supy1" />
          </div>
         


</div>

</div>

  )
}

export default Soups