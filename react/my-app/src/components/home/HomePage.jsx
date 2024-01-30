

import React,{useEffect,useState} from 'react';
import './StyleHomePage.css'
import HomePageScrollImg from './HomePageScrollImg';
import HomePageAboutUs from './HomePageAboutUs';
import HomePageWhatWeDo from './HomePageWhatWeDo';
import HomePageAdvantages from './HomePageAdvantages';
import HomePageStatement from './HomePageStatement';
import HomePageBooks from './HomePageBooks';
const HomePage = () => {

  const [showAbout, setShowAbout] = useState(false);
  const handleClickButtonAbout = () => {
    setShowAbout(true);
  }
  return (
    <div>
      
      <HomePageScrollImg></HomePageScrollImg>
      <HomePageAboutUs setShowAbout={setShowAbout} handleClickButtonAbout={handleClickButtonAbout}></HomePageAboutUs>
      <HomePageWhatWeDo></HomePageWhatWeDo>
      
     <HomePageStatement></HomePageStatement>
      <HomePageAdvantages></HomePageAdvantages>
      <HomePageBooks></HomePageBooks>
    






    </div>
  );
};

export default HomePage;


