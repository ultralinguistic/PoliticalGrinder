import React, { Component } from 'react';
import App from './App';

class Home extends Component {

    componentDidMount() {
        console.log(this.props);        
        
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.props.auth.isAuthenticated());

    }

    //calling login method from authentication service
    login = () => {this.props.auth.login();}

    //calling the logout method from the authentication service
    logout = () => {this.props.auth.logout();}

    render() { 
        //checking to see if person is authenticated
        const { isAuthenticated } = this.props.auth;
        return ( 
            <div>
                {
                    isAuthenticated() && 
                    <div className="container column" >
                    <h5>
                        You are logged in! {''}
                        <a
                        style={{cursor: 'pointer'}}
                        onClick={this.logout}
                        >
                        Log Out
                        </a>.
                    </h5>
                        <App />
                    </div>
                }
                {
                    !isAuthenticated() && 
                    (
                        <div className="container column" >
                            <h5>React auth0 training</h5>
                            <h5>
                                You are not logged in! Please {''}
                                <a 
                                 style={{cursor: 'pointer'}}
                                 onClick={this.login}
                                >
                                Log In
                                </a>
                                {' '} to continue.
                            </h5>
                            <h6>This is the default <b><code>Home</code></b> component. The <b><code>App</code></b> component will only be visible once you authenticate.
                            </h6>
                        </div>
                    )

                }
            </div>
         );
    }
}
 
export default Home;