import s from '../../styles/main.module.scss'
import { GearFill, X }  from 'react-bootstrap-icons';
import { useState } from 'react';
import NavLinks from './NavLinks';

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
    return(
        <div className={s.headerAdaptive}>
        <div className={s.header__logo} onClick={()=>setMenuActive(!menuActive)}>{menuActive? Cancel : Gear}</div>
       {menuActive && <NavLinks isMobile={true} setMenuActive={setMenuActive}/>} 
    </div>
    )
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