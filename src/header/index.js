import logo from '../img/header/logo.svg';
import Navigation from './Navigation';

const Header = () => {

    return (

        <header className="header">
            <div className="header-logo">
                <img src={logo} alt={"logo"} className="header-logo__img" />
            </div>
            <Navigation />
        </header>
        
    );

}

export default Header;