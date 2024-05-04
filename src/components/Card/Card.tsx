import { Result } from '../../assets/types/types';
import styles from './Card.module.scss';

interface Card {
  character: Result;
}
export const Card = ({ character }: Card) => {
  return (
    <div className={styles.card_main_box}>
      <div className={styles.card_box}>
        <img className={styles.character_image} src={character.image} alt="" />
      </div>
    </div>
  );
};
