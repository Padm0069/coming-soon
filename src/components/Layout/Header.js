import { Fragment } from "react";
import logoImage from "../../assets/logo.jpg";
import classes from './Header.module.css';
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes}>
        <img src={logoImage} alt="Logo Image" />
        <h1>Biased For Action</h1>
        <button>Join Waitlist</button>
      </header>
    </Fragment>
  );
};

export default Header;