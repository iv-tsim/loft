import React from 'react';

class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.navItems = document.querySelectorAll('.header-menu__item');
        this.state = {
            name: "login"
        };

    }


    navClick = () => {

        this.navItems.forEach((item) => {

            item.classList.remove('active');

        });

        console.log(this);

        // this.setState({name: this.dataset.name});

        this.classList.add('active');

    }

    render () {

        return (
            <div className="header-menu">
                <div onClick={this.navClick} className="header-menu__item" data-name="map">Карта</div>
                <div onClick={this.navClick} className="header-menu__item" data-name="profile">Профиль</div>
                <div onClick={this.navClick} className="header-menu__item" data-name="logout">Выйти</div>
            </div>
        );

    };

}

export default Navigation;