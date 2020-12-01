import React from 'react';
import Header from './Header';
import Login from '../Login';
import Registration from '../Registration';
import Map from '../Map';
import Profile from '../Profile';

class Navigation extends React.Component {


    state = {
        page: 'login'
    }

    navigate = (page) => {

        this.setState({ page });

    }

    render() {

        const { page } = this.state;

        return (

            <div>
                
                <Header navigate={this.navigate} />

                <div className="main">
                    { page === 'login' && <Login /> }
                    { page === 'registration' && <Registration /> }
                    { page === 'map' && <Map /> }
                    { page === 'profile' && <Profile /> }
                </div>

            </div>

        );

    }


}

export default Navigation;