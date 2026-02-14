/**
 * My To Do List App
 *@author Tram Nguyen
 * @format
 */




import React from 'react';
import { SafeAreaView } from 'react-native';

import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';

const Index = () => {
  return (
    <SafeAreaView>
      <ToDoList />
      <ToDoForm />
    </SafeAreaView>
  );
};

export default Index;