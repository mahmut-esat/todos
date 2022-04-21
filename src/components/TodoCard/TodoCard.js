import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {deleteTodo, changeTodoCompleted} from '../../redux/todosSlice';
import styles from './TodoCard.style'

const TodoCard = ({todo}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleDelete = id => {
    dispatch(deleteTodo(id));
  };

  const handleEditPage = () => {
    navigation.navigate('Edit', todo);
  };

  const handleComplete = () => {
    dispatch(
      changeTodoCompleted({
        id: todo.id,
        changes: {completed: !todo.completed},
      }),
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.check_container}>
        <BouncyCheckbox
          size={30}
          fillColor="#7e57c2"
          unfillColor="#d1c4e9"
          text={todo.text}
          textStyle={{color: '#7e57c2'}}
          iconStyle={{borderColor: '#e6e6e6'}}
          isChecked={todo.completed}
          onPress={() => handleComplete()}
          onLongPress={() => handleDelete(todo.id)}
        />
      </View>
      <View style={styles.button_container}>
        <TouchableOpacity onPress={handleEditPage}>
          <Icon
            name="playlist-edit"
            size={40}
            color="#7e57c2"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(todo.id)}>
          <Icon name="delete" size={40} color="#7e57c2" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoCard;
