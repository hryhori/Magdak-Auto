import s from '../../styles/main.module.scss';
import human from '../../images/Human.svg';
import honda from '../../images/honda.svg';
import infiniti from '../../images/infiniti.svg';
import lexus from '../../images/lexus.svg';
import mitsubishi from '../../images/mitsubishi.svg';
import nissan from '../../images/nissan.svg';
import toyota from '../../images/toyota.svg';

function Intro(){
    return (
      <main className={s.intro} id={'about'}>
        <div className={s.intro__info}>
          <h1 className={s.intro__info_title}>
            MAGDAK-AUTO <br />
            лучшее решение
            <br />
            для вашего автомобиля
          </h1>
          <p className={s.intro__info_subtitle}>
            Уделяем максимальное внимание каждому автомобилю,
            <br /> что делает качество обслуживания наивысшим.
          </p>
          <div className={s.intro__info_btn_group}>
            <button className={s.btn}>Узнать больше</button>
            <button className={s.btn_outline}>Записаться</button>
          </div>
          <div className={s.intro__info_video}>
            <iframe
              width="280"
              height="160"
              src="https://www.youtube.com/embed/0FLOLDIekB0?controls=0"
              title="YouTube video player"
              frameBorder="0"
            ></iframe>
            <span className={s.intro__info_subtitle}>Наши специалисты подготовлены во всех направлениях авто-ремонта.</span>
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