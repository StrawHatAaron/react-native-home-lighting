import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableHighlight, Image } from 'react-native';
import { connect } from 'react-redux';


import { listRepos } from './reducer';


class RepoList extends Component {
  componentDidMount() {
    this.props.listRepos('strawhataaron');
  }

_onPressAdd(){
    alert("I need work");
}

  flatListCell = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
        <TouchableHighlight
            style={{marginRight:7,
                    alignSelf: 'flex-end'
                 }}
            onPress={this._onPressAdd}>
            <Image
              style={{width:35, height:35}}
              source={require('./icons/blue.png')}
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
