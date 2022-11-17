import s from '../../styles/main.module.scss'
import { motion } from 'framer-motion';
import { useContext,useRef, useState } from 'react';
import LangContext from '../../LangContext';

function NavLinks({setMenuActive, isMobile}){

  const animateFrom = {opacity: 0, y: -20};
  const animateTo = {opacity: 1, y: 0};

  const {lang, setLang} = useContext(LangContext);
  const [langWidth, setLangWidth] = useState('80px');
  const SelRef = useRef();

  const Text = {language:{ 
    'ru': ['О нас','Галерея','Контакты','Электробайки', 'Вакансии'],
    'ua': ['Про нас','Фотоплiвка','Контакти', 'Электробайки', 'Вакансії'],
    'en': ['About', 'Galery', 'Contacts', 'Electrobikes', 'Vacancies'],
  }};
  let TextsArray =  Text.language[lang];
  return (
       <motion.nav initial={animateFrom} animate={animateTo} exit={animateFrom} transition={{delay:0.1}} className={s.header__menu} onClick={()=>isMobile && setMenuActive(false)}>
         <ul className={s.header__menu_list}>
           <motion.li initial={animateFrom} animate={animateTo} exit={animateFrom} transition={{delay:0.4}} className={s.header__menu_item}>
             <a href="#about" className={s.header__menu_link}>
               {TextsArray[0]}
             </a>
           </motion.li>
           <motion.li initial={animateFrom} animate={animateTo} exit={animateFrom} transition={{delay:0.5}} className={s.header__menu_item}>
             {" "}
             <a href="#galery" className={s.header__menu_link}>
             {TextsArray[1]}
             </a>
           </motion.li>
           <motion.li initial={animateFrom} animate={animateTo} exit={animateFrom} transition={{delay:0.6}} className={s.header__menu_item}>
             {" "}
             <a href="#contacts" className={s.header__menu_link}>
             {TextsArray[2]}
             </a>
           </motion.li>
           <motion.li initial={animateFrom} animate={animateTo} exit={animateFrom} transition={{delay:0.6}} className={s.header__menu_item}>
             {" "}
             <a href="#vacancy" className={s.header__menu_link}>
             {TextsArray[4]}
             </a>
           </motion.li>
           <motion.li className={s.header__menu_item} exit={animateFrom}>
            <select onClick={(e)=>e.stopPropagation()} className={s.header__menu_language_switch} style={{width: langWidth}} ref={SelRef}
             onChange={()=>{setLang(SelRef.current.value); 
             let width;  SelRef.current.value!=='ua' && SelRef.current.value!=='en' ? width='200px' : width='80px';
             setLangWidth(width)}}> 
             <option value='ua' >UA 🇺🇦</option>
              <option value='ru'>ru [Страна Террорист]</option>
              <option value='en' >EN 🇺🇸</option>
            </select>
           </motion.li>
         </ul>
       </motion.nav>
     ); 
}

export default NavLinks;