import s from '../../styles/main.module.scss'
import { motion } from 'framer-motion';
import { useContext, useState } from 'react';
import LangContext from '../../LangContext';

function NavLinks({setMenuActive, isMobile}){

  const animateFrom = {opacity: 0, y: -20};
  const animateTo = {opacity: 1, y: 0};

  const {lang, setLang} = useContext(LangContext);
  const [langWidth, setLangWidth] = useState('50px');

  const Text = {language:{ 
    'ru': ['О нас','Галерея','Контакты','Электробайки'],
    'ua': ['Про нас','Фотоплiвка','Контакти', 'Электробайки'],
    'en': ['About', 'Galery', 'Contacts', 'Electrobikes'],
  }};
  let TextsArray =  Text.language[lang];

  return (
       <motion.nav initial={animateFrom} animate={animateTo} transition={{delay:0.1}} className={s.header__menu} onClick={()=>isMobile && setMenuActive(false)}>
         <ul className={s.header__menu_list}>
           <motion.li initial={animateFrom} animate={animateTo} transition={{delay:0.4}} className={s.header__menu_item}>
             <a href="#about" className={s.header__menu_link}>
               {TextsArray[0]}
             </a>
           </motion.li>
           <motion.li initial={animateFrom} animate={animateTo} transition={{delay:0.5}} className={s.header__menu_item}>
             {" "}
             <a href="#galery" className={s.header__menu_link}>
             {TextsArray[1]}
             </a>
           </motion.li>
           <motion.li initial={animateFrom} animate={animateTo} transition={{delay:0.6}} className={s.header__menu_item}>
             {" "}
             <a href="#contacts" className={s.header__menu_link}>
             {TextsArray[2]}
             </a>
           </motion.li>
           <motion.li initial={animateFrom} animate={animateTo} transition={{delay:0.7}} className={s.header__menu_item}>
             {" "}
             <a href="/" className={s.header__menu_link}>
             {TextsArray[3]}
             </a>
           </motion.li>
           <motion.li className={s.header__menu_item}>
            <select onClick={(e)=>e.stopPropagation()} className={s.header__menu_language_switch} style={{width: langWidth}}> 
              <option value="ru" onClick={()=>{setLang('ru'); setLangWidth('200px')}}>ru [Страна Террорист]</option>
              <option value="ua" onClick={()=>{setLang('ua'); setLangWidth('80px')}}>UA 🇺🇦</option>
              <option value="en" onClick={()=>{setLang('en'); setLangWidth('80px')}}>EN 🇺🇸</option>
              <option value={lang} selected onClick={()=>{setLangWidth('50px')}}>🌏</option>
            </select>
           </motion.li>
         </ul>
       </motion.nav>
     ); 
}

export default NavLinks;