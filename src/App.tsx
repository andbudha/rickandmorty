import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import { Footer } from './components/Footer/Footer';
import { GridCard } from './components/GridCard/GridCard';
import { FetchingDataResponse, Result } from './assets/types/types';
import axios from 'axios';
import { Paginator } from './components/Paginator/Paginator';

function App() {
  const [characters, setCharacters] = useState<null | Result[]>(null);
  const [pageNum, setPageNum] = useState<number>(1);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get<FetchingDataResponse>(
        `https://rickandmortyapi.com/api/character/?page=${pageNum}`
      );
      const data = response.data.results;
      setCharacters(data);
    };
    getData();
  }, [pageNum]);

  const setNewNextPage = () => {
    setPageNum(pageNum + 1);
  };
  const setNewPrevPage = () => {
    setPageNum(pageNum - 1);
  };
  return (
    <div className={styles.main_app_box}>
      <div className={styles.app_box}>
        {' '}
        <Footer />
        <GridCard characters={characters} />
        <Paginator
          setNewNextPage={setNewNextPage}
          setNewPrevPage={setNewPrevPage}
          pageNum={pageNum}
        />
      </div>
    </div>
  );
}

export default App;
