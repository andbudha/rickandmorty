import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import { GridCard } from './components/GridCard/GridCard';
import { FetchingDataResponse, Result } from './assets/types/types';
import axios, { AxiosError } from 'axios';
import { Paginator } from './components/Paginator/Paginator';
import { Navbar } from './components/Navbar/Navbar';
import { Page404 } from './components/404/Page404';
import { Footer } from './components/Footer/Footer';

function App() {
  const [characters, setCharacters] = useState<null | Result[]>(null);
  const [pageNum, setPageNum] = useState<number>(1);
  const [typedInCharacterName, setTypedInCharacterName] = useState('');
  const [axiosErr, setAxiosErr] = useState<boolean | string>(false);

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
        if (
          error instanceof AxiosError &&
          error.response?.data.error === 'There is nothing here'
        ) {
          setAxiosErr('Sorry, no match found!');
          setCharacters([]);
        } else if (error instanceof AxiosError) {
          setAxiosErr(error.message);
        } else {
          console.log(error);
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
        {!!characters?.length && characters.length > 19 && (
          <Paginator
            setNewNextPage={setNewNextPage}
            setNewPrevPage={setNewPrevPage}
            pageNum={pageNum}
          />
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;
