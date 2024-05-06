import { Result } from '../../assets/types/types';
import styles from './Card.module.scss';

interface Card {
  character: Result;
}
export const Card = ({ character }: Card) => {
  const displayCharacterInfoHandler = (characterID: number) => {
    console.log(characterID);
  };
  return (
    <div className={styles.flip_card}>
      <div className={styles.flip_card_inner}>
        <div className={styles.flip_card_front}>
          <img
            className={styles.character_image}
            src={character.image}
            alt=""
          />
        </div>
        <div className={styles.flip_card_back}>
          <div className={styles.flip_card_back_box}>
            {' '}
            <h3 className={styles.character_name}>{character.name}</h3>
            <div
              className={styles.read_more_btn}
              onClick={() => displayCharacterInfoHandler(character.id)}
            >
              Read More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
