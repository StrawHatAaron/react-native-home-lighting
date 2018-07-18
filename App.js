import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import Drawer from 'react-native-drawer'

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
    closeControlPanel = () => {
      this._drawer.close()
    };
    openControlPanel = () => {
      this._drawer.open()
    };

    return (


      <Provider store={store}>
        <View style={styles.container}>
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
