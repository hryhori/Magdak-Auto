import s from './styles/main.module.scss'
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Galery from './components/Galery/Galery';
import Contacts from './components/Contacts/Contacts';
import { useState} from 'react';
import LangContext from './LangContext';
import Vacancy from './components/Vacancy/Vacancy';


function App() {
  const [lang, setLang] = useState('ua')
  return (
    <div className={s.App}>
      <div className={s.container}>
        <LangContext.Provider value={{lang, setLang}}>
          <Header />
          <Intro />
          <Galery />
          <Contacts />
          <Vacancy/>
        </LangContext.Provider>
      </div>
    </div>
  );
}


export default App;
