import styles from './Paginator.module.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const Paginator = () => {
  return (
    <div className={styles.paginator_main_box}>
      <div className={styles.paginator_box}>
        <div className={styles.chevron_box}>
          <FaChevronLeft className={styles.chevron} />
        </div>
        <div className={styles.chevron_box}>
          <FaChevronRight className={styles.chevron} />
        </div>
      </div>
    </div>
  );
};
