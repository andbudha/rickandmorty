import { ChangeEvent, useState } from 'react';
import styles from './Input.module.scss';
export const Input = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const inputValueCatchingHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    setInputValue(e.currentTarget.value);
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
