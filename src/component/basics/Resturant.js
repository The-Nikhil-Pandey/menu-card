import React, { useState } from 'react'
import "./style.css"
import Menu from './menuApi';
import MenuCard from './MenuCard';
const Resturant = () => {
  const [menuData, setmenuData] = useState(Menu);
  const filterItem =(category) => {
      const updatedlist = Menu.filter((curElem) => {
               return curElem.category === category;
      });
      setmenuData(updatedlist);
    };

    const updateMenuData = (data) =>{
      setmenuData(data)
    }
  return (
    <>
      <MenuCard menuData={menuData} filterItem={filterItem} updateMenuData={updateMenuData}/>
    </>
  )
};

export default Resturant;
