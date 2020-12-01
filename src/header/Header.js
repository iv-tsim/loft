import logo from '../img/header/logo.svg';

const Header = (props) => (

    <header className="header">
        <div className="header-logo">
            <img src={logo} alt={"logo"} className="header-logo__img" />
        </div>
        <div className="header-menu">
            <div onClick={() => props.navigate('map')} className="header-menu__item" data-name="map">Карта</div>
            <div onClick={() => props.navigate('profile')} className="header-menu__item" data-name="profile">Профиль</div>
            <div onClick={() => props.navigate('logout')} className="header-menu__item" data-name="logout">Выйти</div>
        </div>
    </header>

);

export default Header;