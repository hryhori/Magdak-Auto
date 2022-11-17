import s from '../../styles/main.module.scss'
import { GearFill, X }  from 'react-bootstrap-icons';
import { useRef, useState } from 'react';
import NavLinks from './NavLinks';
import { AnimatePresence } from 'framer-motion';

export function HeaderMain(){
    return(
        <div className={s.header} id={'about'}>
            <div className={s.header__logo}><GearFill color="#fff" size={25}/></div>
            <NavLinks/>
        </div>
    )
}

export function HeaderAdaptive(){
    const [menuActive, setMenuActive] = useState(false);
    const Gear = <GearFill color="#fff" size={25}/>
    const Cancel = <X color="#fff" size={50}/>
    const BodyRef = useRef();

    return (
      <div className={s.headerAdaptive} ref={BodyRef}>
        <div
          className={s.header__logo}
          onClick={() => setMenuActive(!menuActive)}
        >
          {menuActive ? Cancel : Gear}
        </div>
        <h3 className={s.headerAdaptive__text}>We stand with Ukraine 🇺🇦</h3>
        <AnimatePresence>
        {menuActive ? (
          <NavLinks isMobile={true} setMenuActive={setMenuActive} />
        ) : null}
        </AnimatePresence>
      </div>
    );
}

function Header({width}){ 
    return (
        <>
        <HeaderMain/>
        <HeaderAdaptive/>
        </>
    )
}

export default Header;