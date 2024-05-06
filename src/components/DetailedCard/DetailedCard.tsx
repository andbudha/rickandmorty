import { Result } from '../../assets/types/types';
import styles from './DetailedCard.module.scss';

interface DetailedCard {
  toggleDetailsCard: () => void;
  selectedCharacter: Result | undefined;
}

export const DetailedCard = ({
  toggleDetailsCard,
  selectedCharacter,
}: DetailedCard) => {
  const closeDetailedCardHandler = () => {
    toggleDetailsCard();
  };
  return (
    <div className={styles.detailed_card_box}>
      <div className={styles.detailed_card}>
        <h2 className={styles.selected_character_name}>
          {selectedCharacter?.name}
        </h2>
        <div className={styles.detailed_card_img_box}>
          <img
            className={styles.detailed_card_img}
            src={selectedCharacter?.image}
            alt="character image"
          />
        </div>
        <h4 className={styles.species}>
          Species: <span>{selectedCharacter?.species}</span>
        </h4>
        <h4 className={styles.status}>
          Status: <span>{selectedCharacter?.status}</span>
        </h4>
        <div
          className={styles.close_btn_box}
          onClick={closeDetailedCardHandler}
        >
          close
        </div>
      </div>
    </div>
  );
};
