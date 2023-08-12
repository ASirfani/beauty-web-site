
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { AiOutlineHeart } from "react-icons/ai";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import { NavLink, useNavigate } from 'react-router-dom';

const SearchMenu = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('home'); // Default selected option

  const handleOptionChange = (event) => {
    const newOption = event.target.value;
    setSelectedOption(newOption);

    // Navigate to the selected option's page
    navigate(`/${newOption}`);
  };

  return (
    <div className='blackColor'>
      <div className='container searchmenu'>
        <div className='searchRow'>
          {/* first colm */}
          <div className='col text-white'>
            <NavLink className={"text-white"} to={"/"}><h2>Electro.</h2></NavLink>
          </div>
          {/* second col */}
          <div className='col-6 '>
            <div className='searchMenuForm'>
              <form>
              <select name="options" id="options" value={selectedOption} onChange={handleOptionChange}>
                  <option value="home">       Category    </option>
                  <option value="products">   Products    </option>
                  <option value="new-arrivals"> New Arrivals </option>
                  <option value="offers">     Offers      </option>
                  <option value="top-selling">Top Selling </option>
                </select>
      <input type='text' />
      <input type='button' className='redColor text-white' value={"Search"} />
    </form>
      </div >
    </div >
  {/* third col */ }
  < div className = 'col' >
    <div className='text-white d-flex searchmenuRight'>
      {/* your whislist */}
      <div className='flex-nowrap text-white yourwishlist'>
        <div>
          <AiOutlineHeart size={22} />
          <span className='notificationNum bg-info'>3</span>
        </div>
        <div>
          <p>Your Wishlist</p>
        </div>
      </div>
      {/* your card */}
      <div className='flex-nowrap text-white yourcard'>
        <div><BiSolidShoppingBagAlt size={22} />
          <span className='notificationNum'>4</span></div>
        <p>Your Card</p>
      </div>
    </div>
  </div >
        </div >
      </div >
    </div >
  );
}

export default SearchMenu;
