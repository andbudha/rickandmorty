import { Input } from '../Input/Input';
import styles from './Navbar.module.scss';

interface Navbar {
  filterCharactersByName: (inputValue: string) => void;
}
export const Navbar = ({ filterCharactersByName }: Navbar) => {
  return (
    <div className={styles.footer_main_box}>
      <Input filterCharactersByName={filterCharactersByName} />
    </div>
  );
};
