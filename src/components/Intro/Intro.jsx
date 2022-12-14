import s from '../../styles/main.module.scss';
import human from '../../images/Human.svg';
import honda from '../../images/honda.svg';
import infiniti from '../../images/infiniti.svg';
import lexus from '../../images/lexus.svg';
import mitsubishi from '../../images/mitsubishi.svg';
import nissan from '../../images/nissan.svg';
import toyota from '../../images/toyota.svg';
import { useContext } from 'react';
import LangContext from '../../LangContext';

function Intro(){
  const {lang} = useContext(LangContext);
  const Texts = {language: {
    'ru' : ['лучшее решение','для вашего автомобиля','Уделяем максимальное внимание каждому автомобилю,','что делает качество обслуживания наивысшим.',
            'Оставить отзыв','Записаться', 'Наши специалисты подготовлены во всех направлениях авто-ремонта.'],
    'ua' : ['краще рішення','для вашого автомобіля','Приділяємо максимальну увагу кожному автомобілю,','що робить якість обслуговування найвищою.',
            'Залишити вiдгук','Записатись','Наші фахівці підготовлені у всіх напрямках авто-ремонту.'],
    'en' : ['best choice', 'for youre vehicle', 'We pay maximum attention to each car,', 'which makes the quality of service the highest.',
             'Leave a comment', 'Make appointment', 'Our specialists are trained in all areas of auto repair.'],
  }}
  const TextsArray = Texts.language[lang];
    return (
      <main className={s.intro} id={'about'}>
        <div className={s.intro__info}>
          <h1 className={s.intro__info_title}>
            MAGDAK-AUTO <br />
            {TextsArray[0]}
            <br />
            {TextsArray[1]}
          </h1>
          <p className={s.intro__info_subtitle}>
          {TextsArray[2]}
            <br /> {TextsArray[3]}
          </p>
          <div className={s.intro__info_btn_group}>
            <a href="https://www.google.com/maps/place/MAGDAK-AUTO+NISSAN+INFINITI+TOYOTA+LEXUS/@48.3831311,35.0014359,17z/data=!3m1!4b1!4m6!3m5!1s0x40dbfb2720632e2f:0x558b12c8229d6b4d!8m2!3d48.3831311!4d35.0014359!16s%2Fg%2F11g6_3rqmy" className={s.btn}>{TextsArray[4]}</a>
            <a href="tel:+380675657221" className={s.btn_outline}>{TextsArray[5]}</a>
          </div>
          <div className={s.intro__info_video}>
            <iframe
              width="280"
              height="160"
              src="https://www.youtube.com/embed/0FLOLDIekB0?controls=0"
              title="YouTube video player"
              frameBorder="0"
            ></iframe>
            <span className={s.intro__info_subtitle}>{TextsArray[6]}</span>
          </div>
        </div>
        <div className={s.intro__humanFrame}>
          <img src={human} alt="Human" />
        </div>
        <div className={s.intro_logotypes}>
          <img src={honda} alt="Honda" />
          <img src={infiniti} alt="Honda" />
          <img src={lexus} alt="Honda" />
          <img src={mitsubishi} alt="Honda" />
          <img src={nissan} alt="Honda" />
          <img src={toyota} alt="Honda" />
        </div>
      </main>
    );
}

export default Intro;