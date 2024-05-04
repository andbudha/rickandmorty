import { Result } from '../../assets/types/types';
import { Card } from '../Card/Card';
import styles from './GridCard.module.scss';

interface GridCard {
  characters: Result[] | null;
}
export const GridCard = ({ characters }: GridCard) => {
  const cards = characters?.map((character) => (
    <div key={character.id}>
      <Card character={character} />
    </div>
  ));
  return (
    <div className={styles.gridcard_main_box}>
      <div className={styles.gridcard_box}>{cards}</div>
    </div>
  );
};
