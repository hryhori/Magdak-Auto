import s from '../../styles/main.module.scss'
import { GearFill, PatchQuestionFill, Image, TelephoneFill, PencilSquare, Bicycle }  from 'react-bootstrap-icons';
import { useState } from 'react';

export function HeaderMain(){
    return(
        <div className={s.header}>
            <div className={s.header__logo}><GearFill color="#fff" size={25}/></div>
            <nav className={s.header__menu}>
                <a href="/" className={s.header__menu_link}>О нас</a>
                <a href="/" className={s.header__menu_link}>Галерея</a>
                <a href="/" className={s.header__menu_link}>Контакты</a>
                <a href="/" className={s.header__menu_link}>Запись</a>
                <a href="/" className={s.header__menu_link}>Электробайки</a>
            </nav>
            <div className={s.header_button_group}></div>
        </div>
    )
}

export function HeaderAdaptive(){
    const [menuActive, setMenuActive] = useState(false);
    return(
        <div className={s.headerAdaptive} active={menuActive}>
            <div className={s.headerAdaptive__content}>
                <nav className={s.headerAdaptive__content_menu}>
                    <span className={s.headerAdaptive__content_menu_logo}>MAGDAK-AUTO</span>
                    <a href="/" className={s.headerAdaptive__menu_link}>О нас<PatchQuestionFill color='#000000'/></a>
                    <a href="/" className={s.headerAdaptive__menu_link}>Галерея<Image color='#000000'/></a>
                    <a href="/" className={s.headerAdaptive__menu_link}>Контакты<TelephoneFill color='#000000'/></a>
                    <a href="/" className={s.headerAdaptive__menu_link}>Запись<PencilSquare color='#000000'/></a>
                    <a href="/" className={s.headerAdaptive__menu_link}>Электробайки<Bicycle color='#000000'/></a>
                </nav>
            </div>
        </div>
    )
}

function Header({width}){ return <HeaderMain/>

    // if(width < 600){ return <HeaderAdaptive/>;}
    // else{ return <HeaderMain/>;}
}

export default Header;