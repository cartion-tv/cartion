import { Account } from './account';
import styles from './Header.module.scss';

import logo from '../../../assets/images/CARTION_LOGO_COLO01.png';

type Props = {
  isAccountVisible: boolean;
};

function Header({ isAccountVisible }: Props) {
  return (
    <header className={styles.header}>
      <img src={logo} alt='logo' />
      {isAccountVisible && <Account />}
    </header>
  );
}

export { Header };
