import React, { Component } from 'react';
import { StyleSheet, Text, View, Settings, TouchableOpacity, Image } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import {StackNavigator} from 'react-navigation';

import reducer from './store/reducers/reducer';
import RepoList from './RepoList';
import UserSettings from './UserSettings'


const client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

export default class App extends Component {
  render() {
    return (

      <Provider store={store}>

        <View style={styles.container}>
          <Image
            style={{width:35, height:35, margin:10}}
            source={require('./assets/icons/settings-cog.png')}
          />
          <RepoList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    marginTop: 20
  }
});
