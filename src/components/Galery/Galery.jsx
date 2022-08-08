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

function Galery(){
    const images = [first, second, third, fourth, fifth, sixth, seventh, eighth, ninth];
    const carousel_texts = [
        'Установка защиты моторного отсека',
        'Компьютерная диагностика',
        'Замена комплекта сцепления',
        'Замена заднего сальника каленвала',
        'Чистка клапана холостого хода',
        'Чистка дроссельной заслонки',
        'Ремонт радиатора системы охлаждения двигателя',
        'Установка перфорированных тормозных дисков',
        'Ремонт выхлопной системы',
    ]
    return(
        <div className={s.galery__wrapper}>
            <div className={s.galery__wrapper_text}>
                <h1 className={s.intro__info_title}>
                    MAGDAK-AUTO - надёжность
                </h1>
                <p className={s.intro__info_subtitle}>Мы показываем наглядный пример качественного ремонта вашего авто.</p>
            </div>
            <Carousel images={images} texts={carousel_texts}/>
        </div>
    )
}

export default Galery;