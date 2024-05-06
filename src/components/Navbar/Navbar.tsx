import { Input } from '../Input/Input';
import styles from './Navbar.module.scss';

interface Navbar {
  filterCharactersByName: (inputValue: string) => void;
}
export const Navbar = ({ filterCharactersByName }: Navbar) => {
  return (
    <div className={styles.navbar_main_box}>
      <Input filterCharactersByName={filterCharactersByName} />
    </div>
  );
};
