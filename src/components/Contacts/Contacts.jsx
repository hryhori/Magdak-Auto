import s from '../../styles/main.module.scss';
import map from '../../images/worldmap.svg';
import arrowUp from '../../images/ArrowUp.svg';
import { TelephoneFill, EnvelopeFill, } from 'react-bootstrap-icons';

function Contacts(){
    return (
      <div className={s.contacts} id={'contacts'}>
        <div className={s.contacts__info}>
          <h1 className={s.contacts__info_title}>
            Вы всегда можете
            <br /> расcчитывать
            <span className={s.contacts__info_title_accent}>
              <br /> на нас
            </span>
          </h1>
          <p className={s.contacts__info_subtitle}>
            Применяем индивидуальный подход к каждому клиенту.
          </p>
          <a
            className={s.contacts__info_call + " " + s.btn}
            href="tel:+380675657221"
          >
            ПОЗВОНИТЬ НАМ
          </a>
        </div>
        <div className={s.contacts__main}>
          <div className={s.contacts__map}>
            <img src={map} alt="map" />
          </div>
          <div className={s.contacts__block}>
            <div className={s.contacts__card}>
              <div className={s.contacts__card_top}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2649.8232705377213!2d35.0014359!3d48.3831311!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x558b12c8229d6b4d!2sMAGDAK-AUTO%20NISSAN%20INFINITI%20TOYOTA%20LEXUS!5e0!3m2!1sru!2str!4v1659977955562!5m2!1sru!2str"
                  width="260"
                  height="200"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>
              <div className={s.contacts__card_text}>
                <h1 className={s.contacts__card_title}>
                  Контакты:
                  <TelephoneFill />
                </h1>
                <ul className={s.contacts__card_telephone_list}>
                  <li className={s.contacts__card_telephone_list_item}>
                    <a href="tel:+38 067 565 72 21">+38 067 565 72 21</a> -{" "}
                    <b>Мастер СТО</b>
                  </li>
                  <li className={s.contacts__card_telephone_list_item}>
                    <a href="tel:+38 056 789 32 32">+38 056 789 32 32</a> -{" "}
                    <b>Автоэлектрик</b>
                  </li>
                  <li className={s.contacts__card_telephone_list_item}>
                    <a href="tel:+38 056 789 28 28">+38 056 789 28 28</a> -{" "}
                    <b>Автозапчасти</b>
                  </li>
                  <li className={s.contacts__card_telephone_list_item}>
                    <a href="tel:+38 067 560 86 90">+38 067 560 86 90</a> -{" "}
                    <b>Байки</b>
                  </li>
                </ul>
                <hr />
                <h1 className={s.contacts__card_title}>
                  Email:
                  <EnvelopeFill />
                </h1>
                <ul className={s.contacts__card_telephone_list}>
                  <li className={s.contacts__card_telephone_list_item}>
                    <a href="mailto:nissan.sto.2@gmail.com">
                      nissan.sto.2@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={s.card__aside}>
            <a href="https://g.page/Magdak-Auto?share">
                    <span className={s.card__aside_title}>Как проехать?</span>
                    <br />
                    <span className={s.card__aside_subtitle}>Нажми на меня</span>
              </a>
            </div>
            <div className={s.card__asideArrow}>
                <img src={arrowUp} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Contacts;