import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducer from './reducer';
import RepoList from './RepoList';
import FancyButton from './FancyButton';

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
          <TouchableHighlight
            style={{marginRight:10}}>
            <Image
              style={{width:35, height:35}}
              source={require('./icons/blue.png')}
              />
          </TouchableHighlight>
          
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
    marginTop: 50
  }
});