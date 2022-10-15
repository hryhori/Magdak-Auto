import s from '../../styles/main.module.scss';
import arrowUp from '../../images/ArrowUp.svg';
import { TelephoneFill, EnvelopeFill, } from 'react-bootstrap-icons';
import { useContext } from 'react';
import LangContext from '../../LangContext';

function Contacts(){
  const {lang} = useContext(LangContext);
  const Texts = {language: {
    'ru': ['Вы всегда можете','расcчитывать','на нас','Применяем индивидуальный подход к каждому клиенту.','ПОЗВОНИТЬ НАМ','Контакты:','Мастер СТО','Автоэлектрик',
    'Автозапчасти','Байки','Email', 'Как проехать?', 'Нажми на меня'],
    'ua': ['Ви завжди можете','розраховувати','на нас','Застосовуємо індивідуальний підхід до кожного клієнта.','зателефонувати нам',
    'Контакти:','Майстер СТО','Автоелектрик','Автозапчастини','Байки','Email','Як проїхати?','Натисни на мене'],
    'en': ['You always can','depend','on us','We apply an individual approach to each client.','Call Us',
    'Contacts:','SS Master','Electrician','Parts','Bikes','Email','How to get?','Click on me'],
    }}
    return (
      <div className={s.contacts} id={'contacts'}>
        <div className={s.contacts__info}>
          <h1 className={s.contacts__info_title}>
            {Texts.language[lang][0]}
            <br /> {Texts.language[lang][1]}
            <span className={s.contacts__info_title_accent}>
              <br /> {Texts.language[lang][2]}
            </span>
          </h1>``
          <p className={s.contacts__info_subtitle}>
            {Texts.language[lang][3]}
          </p>
          <a
            className={s.contacts__info_call + " " + s.btn}
            href="tel:+380675657221"
          >
            {Texts.language[lang][4]}
          </a>
        </div>
        <div className={s.contacts__main}>
          <div className={s.contacts__block}>
            <div className={s.contacts__card}>
              <div className={s.contacts__card_top}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2649.8232705377213!2d35.0014359!3d48.3831311!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x558b12c8229d6b4d!2sMAGDAK-AUTO%20NISSAN%20INFINITI%20TOYOTA%20LEXUS!5e0!3m2!1sru!2str!4v1659977955562!5m2!1sru!2str"
                  width="280"
                  height="200"
                  style={{ border: 0 }}
                  loading="lazy"
                  title='map'
                ></iframe>
              </div>
              <div className={s.contacts__card_text}>
                <h1 className={s.contacts__card_title}>
                {Texts.language[lang][5]}
                  <TelephoneFill />
                </h1>
                <ul className={s.contacts__card_telephone_list}>
                  <li className={s.contacts__card_telephone_list_item}>
                    <a href="tel:+38 067 565 72 21">+38 067 565 72 21</a> -{" "}
                    <b>{Texts.language[lang][6]}</b>
                  </li>
                  <li className={s.contacts__card_telephone_list_item}>
                    <a href="tel:+38 056 789 32 32">+38 056 789 32 32</a> -{" "}
                    <b>{Texts.language[lang][7]}</b>
                  </li>
                  <li className={s.contacts__card_telephone_list_item}>
                    <a href="tel:+38 056 789 28 28">+38 056 789 28 28</a> -{" "}
                    <b>{Texts.language[lang][8]}</b>
                  </li>
                  <li className={s.contacts__card_telephone_list_item}>
                    <a href="tel:+38 067 560 86 90">+38 067 560 86 90</a> -{" "}
                    <b>{Texts.language[lang][9]}</b>
                  </li>
                </ul>
                <hr />
                <h1 className={s.contacts__card_title}>
                {Texts.language[lang][10]}
                  <EnvelopeFill />
                </h1>
                <ul className={s.contacts__card_telephone_list} style={{margin: '0px'}}>
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
                    <span className={s.card__aside_title}>{Texts.language[lang][11]}</span>
                    <br />
                    <span className={s.card__aside_subtitle}>{Texts.language[lang][12]}</span>
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