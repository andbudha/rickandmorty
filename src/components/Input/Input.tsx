import { ChangeEvent, useState } from 'react';
import styles from './Input.module.scss';

interface Input {
  filterCharactersByName: (inpuValue: string) => void;
}
export const Input = ({ filterCharactersByName }: Input) => {
  const [inputValue, setInputValue] = useState<string>('');

  const inputValueCatchingHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
    filterCharactersByName(e.currentTarget.value);
  };

  return (
    <div className={styles.input_main_box}>
      <input
        className={styles.input}
        value={inputValue}
        onChange={inputValueCatchingHandler}
      />
    </div>
  );
};
