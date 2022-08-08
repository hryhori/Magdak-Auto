import s from './styles/main.module.scss'
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Galery from './components/Galery/Galery';
import Contacts from './components/Contacts/Contacts';
import { useRef, useEffect, useState } from 'react';

function App() {
  const [BlockWidth, setBlockWidth] = useState();
  const ContainerRef = useRef(null);

  useEffect(() => {setBlockWidth(ContainerRef.current.clientWidth)}, []);
  return (
    <div className={s.App}>
      <div className={s.container} ref={ContainerRef}>
        <Header width={BlockWidth}/>
        <Intro/>
        <Galery/>
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
