import React from 'react';
import logo from './img/log/logo.svg';


const Registration = (props) => {

    return (

        <div className="log">
            <div className="log-dec">
                <img src={logo} alt={"logo"} className="log-dec__img" />
            </div>
            <div className="log-main">
                <div className="log-main__form-wrapper">
                    <h1 className="log-main__title">Регистрация</h1>
                    <form className="log-main__form" onSubmit={() => props.navigate('map')}>
                        <div className="log-main__form-item">
                            <div className="log-main__form-item__title">Email*</div>
                            <input type="email" className="log-main__form-item__input" placeholder="mail@mail.ru" />
                        </div>
                        <div className="log-main__form-item">
                            <div className="log-main__form-item__title">Как вас зовут?*</div>
                            <input type="text" className="log-main__form-item__input" placeholder="Петр Александрович" />
                        </div>
                        <div className="log-main__form-item">
                            <div className="log-main__form-item__title">Придумайте пароль*</div>
                            <input type="password" className="log-main__form-item__input" placeholder="*************" />
                        </div>
                        <input type="submit" value="Зарегистрироваться" className="log-main__form-submit btn" />
                    </form>
                    <div className="log-main__caption">
                        Уже зарегестрированны? <span onClick={() => props.navigate('login')}>Войти</span>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Registration;