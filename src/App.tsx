import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import { Footer } from './components/Footer/Footer';
import { GridCard } from './components/GridCard/GridCard';
import { FetchingDataResponse, Result } from './assets/types/types';
import axios from 'axios';
import { Paginator } from './components/Paginator/Paginator';

function App() {
  const [characters, setCharacters] = useState<null | Result[]>(null);
  console.log(characters);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get<FetchingDataResponse>(
        ' https://rickandmortyapi.com/api/character/'
      );
      const data = response.data.results;
      setCharacters(data);
    };
    getData();
  }, []);
  return (
    <div className={styles.main_app_box}>
      <div className={styles.app_box}>
        {' '}
        <Footer />
        <GridCard characters={characters} />
        <Paginator />
      </div>
    </div>
  );
}

export default App;
