import React from 'react';
import {View, StyleSheet} from 'react-native';

import Content from '../components/Content/Content';
import Header from '../components/Header/Header';
import Input from '../components/Input/Input';
import TodoList from '../components/TodoList/TodoList';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inner_container}>
        <Input />
      </View>
      <TodoList />
      <Content />

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
});
