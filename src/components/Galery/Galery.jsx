import s from '../../styles/main.module.scss';
import first from '../../images/GaleryPhotos/1.png';
import second from '../../images/GaleryPhotos/2.jpg';
import third from '../../images/GaleryPhotos/3.jpg';
import fourth from '../../images/GaleryPhotos/4.jpg';
import fifth from '../../images/GaleryPhotos/5.jpg';
import sixth from '../../images/GaleryPhotos/6.jpg';
import seventh from '../../images/GaleryPhotos/7.jpg';
import eighth from '../../images/GaleryPhotos/8.jpg';
import ninth from '../../images/GaleryPhotos/9.jpg';
import Carousel from './Carousel/Carousel';
import { useContext } from 'react';
import LangContext from '../../LangContext';

function Galery(){
    const images = [first, second, third, fourth, fifth, sixth, seventh, eighth, ninth];
    const {lang} = useContext(LangContext);
    const carousel_texts = {
      language: {
        'ru': [
          "Установка защиты моторного отсека",
          "Компьютерная диагностика",
          "Замена комплекта сцепления",
          "Замена заднего сальника коленвала",
          "Чистка клапана холостого хода",
          "Чистка дроссельной заслонки",
          "Ремонт радиатора системы охлаждения двигателя",
          "Установка перфорированных тормозных дисков",
          "Ремонт выхлопной системы",
        ],
        'ua': [
          "Установка захисту моторного відсіку",
          "Комп`ютерна діагностика",
          "Заміна комплекту зчеплення",
          "Заміна заднього сальника колінвалу",
          "Чищення клапана холостого ходу",
          "Чищення дросельної заслінки",
          "Ремонт радіатора системи охолодження двигуна",
          "Установка перфорованих гальмівних дисків",
          "Ремонт вихлопної системи",
        ],
        'en': [
          "Installation of protection of a motor compartment",
          "Computer diagnostics",
          "Clutch Kit Replacement",
          "Replacing the rear crankshaft oil seal",
          "Idle valve cleaning",
          "Throttle cleaning",
          "Repair of the radiator of the engine cooling system",
          "Installation of perforated brake discs",
          "Exhaust system repair",
        ],
      },
    };
    const Texts = {language:{
        'ru':['надёжность', 'Мы показываем наглядный пример качественного ремонта вашего авто.'],
        'ua':['надійність', 'Ми показуємо приклад якісного ремонту вашого авто.'],
        'en':['reliability', 'We show a clear example of high-quality repair of your car.'],
    }}
    return(
        <div className={s.galery__wrapper} id={'galery'}>
            <div className={s.galery__wrapper_text}>
                <h1 className={s.intro__info_title}>
                    MAGDAK-AUTO - {Texts.language[lang][0]}
                </h1>
                <p className={s.intro__info_subtitle}>{Texts.language[lang][1]}</p>
            </div>
            <Carousel images={images} texts={carousel_texts.language[lang]}/>
        </div>
    )
}

export default Galery;