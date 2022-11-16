import s from '../../styles/main.module.scss';
import { useContext } from 'react';
import LangContext from '../../LangContext';

export default function Vacancy() {
  const {lang} = useContext(LangContext);
  const Texts = {language: {
    'ru': ['Ищете работу в надежной команде?', 'Тогда зваоните', 'Мы всегда рады расмотреть кандидатуру новых сотрудников', 'Вакансии', 'Автоэлектрик', 'Позвонить', 'Автослесарь'],
    'ua': ['Шукаєте роботу у надійній команді?', 'Тоді дзвонiть', 'Ми завжди раді розглянути кандидатуру нових співробітників', 'Вакансії', 'Автоэлектрик', 'Зателефонувати', 'Автослюсар'],
    'en': ['Looking for a job with reliable team?', 'Then contact us', 'We are always happy to consider the candidacy of new employees', 'Vacancies', 'Auto-Electrician', 'Call Us', 'Car Mechanic'],
    }}
  return (
    <div className={s.vacancy} id={"vacancy"}>
      <div className={s.vacancy__main}>
        <div className={s.contacts__block}>
          <div className={s.contacts__card}>
            <div className={s.contacts__card_text} style={{height:'400px', display:'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection:'column'}}>
              <h1 className={s.contacts__card_title} style={{justifyContent: 'center'}}>
                {Texts.language[lang][3]}
              </h1>
              <div style={{ border: '1px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', borderRadius:'20px'}}>
              <ul className={s.contacts__card_telephone_list} style={{listStyleType: 'disc', margin: '0'}}>
                <li className={s.contacts__card_telephone_list_item}>
                  <b> {Texts.language[lang][4]}</b>
                </li>
                <li className={s.contacts__card_telephone_list_item}>
                  <b> {Texts.language[lang][6]}</b>
                  </li>
              </ul>
              </div>
              <div className={s.contacts__card_block} style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <a href="tel:+380675657221" className={s.btn}>
                  {Texts.language[lang][5]}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.vacancy__info}>
        <h1 className={s.contacts__info_title}>
          {Texts.language[lang][0]}
          <br />
          <span className={s.contacts__info_title_accent}>
            <br /> {Texts.language[lang][1]}
          </span>
        </h1>
        <p className={s.contacts__info_subtitle}>{Texts.language[lang][2]}</p>
      </div>
    </div>
  );
}
