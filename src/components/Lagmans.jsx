import React from 'react'
import { useNavigate } from 'react-router-dom';
import lagmans from '../images/лагман1 1.png'
import lagmans1 from '../images/лагманы2 1.png'

function Lagmans() {
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
            <img src={lagmans} alt="lagmans" />
            <img src={lagmans1} alt="lagmans" />
          </div>
         


</div>

</div>

  )
}

export default Lagmans