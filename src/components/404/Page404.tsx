import styles from './Page404.module.scss';

interface Page404 {
  axiosErr: string | boolean;
}
export const Page404 = ({ axiosErr }: Page404) => {
  return (
    <div className={styles.page404_main_box}>
      <h2 className={styles.error_text}>{axiosErr}</h2>
    </div>
  );
};
