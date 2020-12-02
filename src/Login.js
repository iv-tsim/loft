import React from 'react';
import logo from './img/log/logo.svg';


const Login = (props) => {

    return (

        <div className="log">
            <div className="log-dec">
                <img src={logo} alt={"logo"} className="log-dec__img" />
            </div>
            <div className="log-main">
                <div className="log-main__form-wrapper">
                    <h1 className="log-main__title">Войти</h1>
                    <form className="log-main__form" onSubmit={() => props.navigate('map')}>
                        <div className="log-main__form-item">
                            <div className="log-main__form-item__title">Email</div>
                            <input type="email" className="log-main__form-item__input" placeholder="mail@mail.ru" />
                        </div>
                        <div className="log-main__form-item">
                            <div className="log-main__form-item__title">Пароль</div>
                            <input type="password" className="log-main__form-item__input" placeholder="*************" />
                        </div>
                        <input type="submit" value="Войти" className="log-main__form-submit btn" />
                    </form>
                    <div className="log-main__caption">
                        Новый пользователь? <span onClick={() => props.navigate('registration')}>Регистрация</span>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Login;