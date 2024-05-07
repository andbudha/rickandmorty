import { useState } from 'react';
import { Result } from '../../assets/types/types';
import { Card } from '../Card/Card';
import styles from './GridCard.module.scss';
import { DetailedCard } from '../DetailedCard/DetailedCard';

interface GridCard {
  characters: Result[] | null;
}
export const GridCard = ({ characters }: GridCard) => {
  const [detailsCard, setDetailsCard] = useState<boolean>(false);
  const [selectedCharacter, setSelectedCharacter] = useState<
    undefined | Result
  >(undefined);

  const toggleDetailsCard = (characterID?: number) => {
    const character = characters?.find(
      (character) => character.id === characterID
    );
    setSelectedCharacter(character);
    setDetailsCard(!detailsCard);
  };

  const cards = characters?.map((character) => (
    <div key={character.id}>
      <Card character={character} toggleDetailsCard={toggleDetailsCard} />
    </div>
  ));
  return (
    <div className={styles.gridcard_main_box}>
      {detailsCard && (
        <DetailedCard
          toggleDetailsCard={toggleDetailsCard}
          selectedCharacter={selectedCharacter}
        />
      )}
      <div className={styles.gridcard_box}>{cards}</div>
    </div>
  );
};
