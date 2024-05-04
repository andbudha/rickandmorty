import styles from './App.module.scss';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className={styles.main_app_box}>
      <div className={styles.app_box}>
        {' '}
        <Footer />
      </div>
    </div>
  );
}

export default App;
