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
        <div className={styles.chevron_box} onClick={goToPrevPageHandler}>
          <FaChevronLeft className={styles.chevron} />
        </div>
        <div className={styles.chevron_box} onClick={goToNextPageHandler}>
          <FaChevronRight className={styles.chevron} />
        </div>
      </div>
    </div>
  );
};
