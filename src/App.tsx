import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import { GridCard } from './components/GridCard/GridCard';
import { FetchingDataResponse, Result } from './assets/types/types';
import axios, { AxiosError } from 'axios';
import { Paginator } from './components/Paginator/Paginator';
import { Navbar } from './components/Navbar/Navbar';
import { Page404 } from './components/404/Page404';

function App() {
  const [characters, setCharacters] = useState<null | Result[]>(null);
  const [pageNum, setPageNum] = useState<number>(1);
  const [typedInCharacterName, setTypedInCharacterName] = useState('');
  const [axiosErr, setAxiosErr] = useState<boolean | string>(false);
  console.log(axiosErr);

  console.log(typedInCharacterName);
  console.log(characters);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get<FetchingDataResponse>(
          `https://rickandmortyapi.com/api/character/?page=${pageNum}&name=${typedInCharacterName}`
        );

        const data = response.data.results;
        setCharacters(data);
        setAxiosErr(false);
      } catch (error: unknown) {
        console.log(error);

        if (error instanceof AxiosError) {
          console.log(error.message);
          setAxiosErr(error.message);
          setCharacters([]);
        }
      }
    };
    getData();
  }, [pageNum, typedInCharacterName]);

  const setNewNextPage = (): void => {
    setPageNum(pageNum + 1);
  };
  const setNewPrevPage = (): void => {
    setPageNum(pageNum - 1);
  };

  const filterCharactersByName = (inputValue: string) => {
    const typedInputValue = inputValue.toLowerCase();
    setTypedInCharacterName(typedInputValue);
  };
  return (
    <div className={styles.main_app_box}>
      <div className={styles.app_box}>
        {' '}
        <Navbar filterCharactersByName={filterCharactersByName} />
        {axiosErr ? (
          <Page404 axiosErr={axiosErr} />
        ) : (
          <GridCard characters={characters} />
        )}
        {characters?.length && (
          <Paginator
            setNewNextPage={setNewNextPage}
            setNewPrevPage={setNewPrevPage}
            pageNum={pageNum}
          />
        )}
      </div>
    </div>
  );
}

export default App;
