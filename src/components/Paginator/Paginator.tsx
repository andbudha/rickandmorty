import styles from './Paginator.module.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
interface Paginator {
  setNewNextPage: () => void;
  setNewPrevPage: () => void;
  pageNum: number;
}
export const Paginator = ({
  setNewNextPage,
  setNewPrevPage,
  pageNum,
}: Paginator) => {
  console.log(pageNum);

  const goToPrevPageHandler = () => {
    setNewPrevPage();
  };
  const goToNextPageHandler = () => {
    setNewNextPage();
  };
  return (
    <div className={styles.paginator_main_box}>
      <div className={styles.paginator_box}>
        <button
          disabled={pageNum === 1}
          className={styles.chevron_btn}
          onClick={goToPrevPageHandler}
        >
          <FaChevronLeft
            className={`${styles.chevron} ${pageNum === 1 && styles.disabled}`}
          />
        </button>
        <button
          disabled={pageNum === 42}
          className={styles.chevron_btn}
          onClick={goToNextPageHandler}
        >
          <FaChevronRight
            className={`${styles.chevron} ${pageNum === 42 && styles.disabled}`}
          />
        </button>
      </div>
    </div>
  );
};
