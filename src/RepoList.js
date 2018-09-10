import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Button, TouchableHighlight, Image } from 'react-native';
import { connect } from 'react-redux';

import { listRepos } from './store/reducers/reducer';


class RepoList extends Component {

  componentDidMount() {
    this.props.listRepos('strawhataaron');
  }

  _onPressAdd(){
    return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      alert(responseJson.title);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  flatListCell = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
        <TouchableHighlight
            style={styles.touch}
            onPress={this._onPressAdd}>
            <Image
              style={{width:35, height:35}}
              source={require('./assets/icons/blue.png')}
            />
        </TouchableHighlight>
    </View>
  );

  render() {
    const { repos } = this.props;
    return (
      <FlatList
        styles={styles.container}
        data={repos}
        renderItem={this.flatListCell}
      />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  touch: {
    marginRight:7,
    alignSelf: 'flex-end'
  }
});

const mapStateToProps = state => {
  let storedRepositories = state.repos.map(repo => ({ key: repo.id, ...repo }));
  return {
    repos: storedRepositories
  };
};

const mapDispatchToProps = {
  listRepos
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);
