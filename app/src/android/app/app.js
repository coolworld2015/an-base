import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    ListView,
    ScrollView,
    ActivityIndicatorIOS,
    TabBarIOS,
    NavigatorIOS,
    TextInput,
	BackAndroid,
	AsyncStorage
} from 'react-native';

console.disableYellowBox = true;

import Login from './login';
import AppContainer from './appContainer';

class App extends Component {
    constructor(props) {
        super(props);
		
		BackAndroid.addEventListener('hardwareBackPress', () => {
			if (this.props.navigator) {
				this.props.navigator.pop();
			}
			return true;
		});
		
        this.state = {
            isLoggedIn: false
        };
		
        appConfig = {
            access_token: '',
			url: 'http://jwt-base.herokuapp.com/',
			users: {
                refresh: false
            },
			phones: {
                refresh: false
            }	
        };		
    }
	
	componentWillMount() {
		this.init();
	}
	
    init() {
        AsyncStorage.getItem('rn-budget.language')
            .then(req => JSON.parse(req))
            .then(json => {
                if (json == undefined || json == null || json[0] == null) {
					appConfig.lang = 'eng';
					appConfig.language = appConfig.eng;
					AsyncStorage.setItem('rn-budget.language', JSON.stringify('eng'))
						.then(json => {})
						.catch(error => console.log(error))
                } else {
					appConfig.lang = json;
					appConfig.language = appConfig[json];
                }
            })
            .catch(error => console.log(error))
			.finally(()=> {
                this.setState({
					isLoading: false
                });
            });
    }

    render() {
        if (this.state.isLoggedIn) {
            return (
                <AppContainer onLogOut={this.onLogOut.bind(this)}/>
            )
        } else {
            return (
                <Login onLogin={this.onLogin.bind(this)}/>
            )
        }
    }

    onLogin() {
        console.log('onLogin');
        this.setState({isLoggedIn: true});
    }

    onLogOut() {
        console.log('onLogOut');
        this.setState({isLoggedIn: false});
    }
}

export default App;
