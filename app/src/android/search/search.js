'use strict';

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
    ActivityIndicator,
    TabBarIOS,
    NavigatorIOS,
    TextInput,
    Switch,
	Dimensions
} from 'react-native';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showProgress: false,
            eventSwitchTitle: true,
			eventSwitchBase: true,
            textSwitchBase: 'Search by phone',
			bugANDROID: ''
        }
    }
	
	componentDidMount() {
		this.setState({
			width: Dimensions.get('window').width
        });
	}
	
    clearSearch() {
        this.setState({
            searchQuery: '',
            invalidValue: false
        })
    }

    onSearchPressed() {
        if (this.state.searchQuery == undefined ||
			this.state.searchQuery == '') {
            this.setState({
                invalidValue: true
            });
            return;
        }
		 
		this.props.navigator.push({
			index: 3,
			data: {
				searchQuery: this.state.searchQuery,
				searchType: this.state.textSwitchBase
			}
		});
    }
	
    toggleTypeChange() {
        if (!this.state.eventSwitchBase) {
            this.setState({
                textSwitchBase: 'Search by phone'
            });
        } else {
            this.setState({
                textSwitchBase: 'Search by name'
            });
        }
    }
	
	goBack() {
		this.props.navigator.pop();
	}
	
    render() {
        var errorCtrl = <View />;

        if (this.state.serverError) {
            errorCtrl = <Text style={styles.error}>
                Something went wrong.
            </Text>;
        }

        var validCtrl = <View />;

        if (this.state.invalidValue) {
            validCtrl = <Text style={styles.error}>
                Value required - please provide.
            </Text>;
        }

        return (
			<View style={{flex: 1, justifyContent: 'center', backgroundColor: 'white'}}>
				<View style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					backgroundColor: '#48BBEC',
					borderWidth: 0,
					borderColor: 'whitesmoke'
				}}>
					<View>
						<TouchableHighlight
							onPress={()=> this.goBack()}
							underlayColor='#ddd'
						>
							<Text style={{
								fontSize: 16,
								textAlign: 'center',
								margin: 14,
								fontWeight: 'bold',
								color: 'white'
							}}>
								Back
							</Text>
						</TouchableHighlight>	
					</View>
					<View>
						<TouchableHighlight
							underlayColor='#ddd'
						>
							<Text style={{
								fontSize: 20,
								textAlign: 'center',
								margin: 10,
								fontWeight: 'bold',
								color: 'white'
							}}>
								Search 
							</Text>
						</TouchableHighlight>	
					</View>						
					<View>
						<TouchableHighlight
							onPress={()=> this.clearSearch()}
							underlayColor='#ddd'
						>
							<Text style={{
								fontSize: 16,
								textAlign: 'center',
								margin: 14,
								fontWeight: 'bold',
								color: 'white'
							}}>
								Clear 
							</Text>
						</TouchableHighlight>	
					</View>
				</View>
				
				<ScrollView>
					<View style={{
						flex: 1,
						padding: 10,
						paddingBottom: 40,
						justifyContent: 'center',
						backgroundColor: 'white'
					}}>	
                        <View style={{
							height: 50,
							borderWidth: 1,
							borderColor: '#48BBEC',
							flex: 1,
							flexDirection: 'row',
							justifyContent: 'space-between',
							borderRadius: 5
						}}>
							<View style={{
									fontSize: 18,
									marginTop: 10,
									margin: 10,
								}}>
								<Text style={{
									fontSize: 18
								}}>
									{this.state.textSwitchBase}
								</Text>
							</View>

							<View style={{
									fontSize: 18,
									marginTop: 10,
									margin: 10,
								}}>
								<Switch
									onValueChange={(value) => {
										this.toggleTypeChange();
										this.setState({
											eventSwitchBase: value
										});
									}}
									value={this.state.eventSwitchBase}
								/>
							</View>
						</View>                        
						
						<View style={{
							height: 50,
							marginTop: 10,
							borderWidth: 1,
							borderColor: '#48BBEC',
							flex: 1,
							flexDirection: 'row',
							justifyContent: 'space-between',
							borderRadius: 5,
							paddingTop: 2,
							paddingLeft: 6
						}}>
							<TextInput
								underlineColorAndroid='rgba(0,0,0,0)'
								onChangeText={(text)=> this.setState({
									searchQuery: text,
									invalidValue: false
								})}
								value={this.state.searchQuery}
								style={{ 
									height: 50,
									width: this.state.width * .94,
									//margin: 10,
									//padding: 10,
									fontSize: 18,
									//borderWidth: 1,
									//borderColor: '#48BBEC',
									//borderRadius: 5,
									color: 'black'
								}} 
								placeholder="Search here">
							</TextInput>
						</View>
						
						{validCtrl}
						
						<TouchableHighlight
							onPress={()=> this.onSearchPressed()}
							style={styles.button}>
							<Text style={styles.buttonText}>
								Submit
							</Text>
						</TouchableHighlight>
						
                    </View>
				</ScrollView>
			</View>
		)
    }
}

const styles = StyleSheet.create({
    AppContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    countHeader: {
        fontSize: 16,
        textAlign: 'center',
        padding: 15,
        backgroundColor: '#F5FCFF',
    },
    countFooter: {
        fontSize: 16,
        textAlign: 'center',
        padding: 10,
        borderColor: '#D7D7D7',
        backgroundColor: 'whitesmoke'
    },
    countHeader1: {
        fontSize: 16,
        textAlign: 'center',
        padding: 15,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 20,
    },
    container: {
		padding: 10,
        paddingBottom: 210,
        alignItems: 'center',
        flex: 1,
		backgroundColor: 'white',
    },
    logo: {
        width: 66,
        height: 65
    },
    heading: {
        fontSize: 30,
        margin: 10,
        marginBottom: 20
    },
    loginInput: {
        height: 50,
		width: 360,
        marginTop: 10,
        padding: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 0,
        color: 'black'
    },
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        alignSelf: 'stretch',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
		fontWeight: 'bold'
    },
    loader: {
        marginTop: 40
    },
    error: {
        color: 'red',
        paddingTop: 10,
        textAlign: 'center'
    }
});

export default Search;
