'use strict';

import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Navigator,
	TouchableHighlight
} from 'react-native';

import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';

import Audit from '../audit/audit';
import AuditDetails from '../audit/auditDetails';
import AuditAdd from '../audit/auditAdd';

import Users from '../users/users';
import UserDetails from '../users/userDetails';
import UserAdd from '../users/userAdd';

import Phones from '../phones/phones';
import PhoneDetails from '../phones/phoneDetails';

import Search from '../search/search';
import SearchResults from '../search/searchResults';

class AppContainer extends Component {
	constructor(props) {
		super(props);				
	}
	
	onLogOut() {
        this.props.onLogOut();
    }
	
	render() {
		return (
			<ScrollableTabView 
				renderTabBar={() => <DefaultTabBar backgroundColor='white' />}
			>
				<SearchTab tabLabel="Search" />
				<PhonesTab tabLabel="Phones" />
				<UsersTab tabLabel="Users" />
				<AuditTab tabLabel="Audit" />
				<Logout onLogOut={this.onLogOut.bind(this)} tabLabel="Logout" />
			</ScrollableTabView>
		);
	}
}

class Logout extends Component {
	constructor(props) {
		super(props);
		
		this.props.onLogOut();
	}
	
	render() {
		return null;
	}	
}
	
class SearchTab extends Component {
	constructor(props) {
		super(props);
		this.routes = [
			{title: 'Search', index: 0},
			{title: 'Search Results', index: 1},
			{title: 'Phones Details', index: 2}
		];
	}
		  
	renderScene(route, navigator) {
		switch (route.index) {
			case 0: return <Search routes={this.routes} navigator={navigator} />
					break;			
			case 1: return <SearchResults data={route.data} routes={this.routes} navigator={navigator} />
					break;			
			case 2: return <PhoneDetails data={route.data} routes={this.routes} navigator={navigator} />
					break
 		}
 	}	
	
	render() {
		return (
	  		<Navigator
			initialRoute={this.routes[0]}
			initialRouteStack={this.routes}
		    renderScene={this.renderScene.bind(this)}
			style={{padding: 0}}
		  
			configureScene={(route, routeStack) =>
				Navigator.SceneConfigs.PushFromRight}
		/>
		)
	}
}

class PhonesTab extends Component {
	constructor(props) {
		super(props);
		this.routes = [
			{title: 'Phones', index: 0},
			{title: 'Phones Details', index: 1}
		];
	}
		  
	renderScene(route, navigator) {
		switch (route.index) {
			case 0: return <Phones routes={this.routes} navigator={navigator} />
					break;			
			case 1: return <PhoneDetails data={route.data} routes={this.routes} navigator={navigator} />
					break
 		}
 	}	
	
	render() {
		return (
	  		<Navigator
			initialRoute={this.routes[0]}
			initialRouteStack={this.routes}
		    renderScene={this.renderScene.bind(this)}
			style={{padding: 0}}
		  
			configureScene={(route, routeStack) =>
				Navigator.SceneConfigs.PushFromRight}
		/>
		)
	}
}

class UsersTab extends Component {
	constructor(props) {
		super(props);
		this.routes = [
			{title: 'Users', index: 0},
			{title: 'Users Details', index: 1},
			{title: 'Add User', index: 2}
		];
	}
		  
	renderScene(route, navigator) {
		switch (route.index) {
			case 0: return <Users routes={this.routes} navigator={navigator} />
					break;			
			case 1: return <UserDetails data={route.data} routes={this.routes} navigator={navigator} />
					break;
			case 2: return <UserAdd data={route.data} routes={this.routes} navigator={navigator} />
					break
 		}
 	}	
	
	render() {
		return (
	  		<Navigator
			initialRoute={this.routes[0]}
			initialRouteStack={this.routes}
		    renderScene={this.renderScene.bind(this)}
			style={{padding: 0}}
		  
			configureScene={(route, routeStack) =>
				Navigator.SceneConfigs.PushFromRight}
		/>
		)
	}
}

class AuditTab extends Component {
	constructor(props) {
		super(props);
		this.routes = [
			{title: 'Audit', index: 0},
			{title: 'Audit Details', index: 1},
			{title: 'Add Audit', index: 2}
		];
	}
		  
	renderScene(route, navigator) {
		switch (route.index) {
			case 0: return <Audit routes={this.routes} navigator={navigator} />
					break;			
			case 1: return <AuditDetails data={route.data} routes={this.routes} navigator={navigator} />
					break			
			case 2: return <AuditAdd data={route.data} routes={this.routes} navigator={navigator} />
					break
 		}
 	}	
	
	render() {
		return (
	  		<Navigator
			initialRoute={this.routes[0]}
			initialRouteStack={this.routes}
		    renderScene={this.renderScene.bind(this)}			
			style={{padding: 0}}
		  
			configureScene={(route, routeStack) =>
				Navigator.SceneConfigs.PushFromRight}
		/>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
});

module.exports = AppContainer;
