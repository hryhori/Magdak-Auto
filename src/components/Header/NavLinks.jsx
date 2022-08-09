import s from '../../styles/main.module.scss'
import { motion } from 'framer-motion';

function NavLinks({setMenuActive, isMobile}){
  const animateFrom = {opacity: 0, y: -20};
  const animateTo = {opacity: 1, y: 0};

     return (
       <nav className={s.header__menu} onClick={()=>isMobile && setMenuActive(false)}>
         <ul className={s.header__menu_list}>
           <motion.li initial={animateFrom} animate={animateTo} transition={{delay:0.1}} className={s.header__menu_item}>
             <a href="#about" className={s.header__menu_link}>
               О нас
             </a>
           </motion.li>
           <motion.li initial={animateFrom} animate={animateTo} transition={{delay:0.15}} className={s.header__menu_item}>
             {" "}
             <a href="#galery" className={s.header__menu_link}>
               Галерея
             </a>
           </motion.li>
           <motion.li initial={animateFrom} animate={animateTo} transition={{delay:0.25}} className={s.header__menu_item}>
             {" "}
             <a href="#contacts" className={s.header__menu_link}>
               Контакты
             </a>
           </motion.li>
           <motion.li initial={animateFrom} animate={animateTo} transition={{delay:0.3}} className={s.header__menu_item}>
             {" "}
             <a href="/" className={s.header__menu_link}>
               Запись
             </a>
           </motion.li>
           <motion.li initial={animateFrom} animate={animateTo} transition={{delay:0.4}} className={s.header__menu_item}>
             {" "}
             <a href="/" className={s.header__menu_link}>
               Электробайки
             </a>
           </motion.li>
         </ul>
       </nav>
     ); 
}

export default NavLinks;