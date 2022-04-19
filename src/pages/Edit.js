import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {TodoSelector, changeTodoCompleted} from '../redux/todosSlice';
import ButtonCard from '../components/Button/Button';
import {useNavigation} from '@react-navigation/native';

const Edit = ({route}) => {
  const [newText, setNewText] = useState(null);

  const title = route.params.text;
  const {id} = route.params;

  const navigation = useNavigation();

  const handleEditTodo = () => {
    if (!newText) {
      return;
    }

    dispatch(
      changeTodoCompleted({
        id: id,
        changes: {
          text: newText,
        },
      }),
    );
    navigation.navigate('Home');
  };

  const dispatch = useDispatch();

  const todoItem = useSelector(state => TodoSelector.selectById(state, id));

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={title}
        placeholderTextColor="#bdbdbd"
        value={newText}
        onChangeText={item => setNewText(item)}
        multiline
      />
      <View style={styles.button_container}>
        <ButtonCard title="Update" onPress={handleEditTodo} />
      </View>
    </View>
  );
};

export default Edit;

const styles = StyleSheet.create({
  container: {},

  input: {
    position: 'relative',
    marginVertical: 50,
    marginHorizontal: 10,
    fontSize: 20,
    color: '#4d2c91',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#d1c4e9',
    borderTopStartRadius: 20,
    borderTopEndRadius: 10,
  },
  button_container: {
    marginTop: 5,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
