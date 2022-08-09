import s from './styles/main.module.scss'
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Galery from './components/Galery/Galery';
import Contacts from './components/Contacts/Contacts';
import { useRef, useEffect, useState } from 'react';

function App() {
  return (
    <div className={s.App}>
      <div className={s.container}>
        <Header />
        <Intro/>
        <Galery/>
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
