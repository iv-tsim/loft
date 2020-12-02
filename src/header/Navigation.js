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
                
                { (page === 'map' ||  page === 'profile') && <Header navigate={this.navigate} /> }

                <div className="main">
                    { page === 'login' && <Login navigate={this.navigate} /> }
                    { page === 'registration' && <Registration navigate={this.navigate} /> }
                    { page === 'map' && <Map /> }
                    { page === 'profile' && <Profile /> }
                </div>

            </div>

        );

    }


}

export default Navigation;