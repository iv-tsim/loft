import logo from './img/header/logo.svg';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header-logo">
          <img src={logo} alt={"logo"} className="header-logo__img" />
        </div>
        <div className="header-menu">
          <div className="header-menu__item">Карта</div>
          <div className="header-menu__item">Профиль</div>
          <div className="header-menu__item">Выйти</div>
        </div>
      </header>
    </div>
  );
}

export default App;
