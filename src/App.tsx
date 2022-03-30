import React from 'react';
import './App.scss';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import AddUserComponent from './components/AddUserComponent/AddUserComponent';
import ListUserComponent from './components/ListUser/ListUserComponent';

function App() {
  return (
    <>
    <HeaderComponent></HeaderComponent>  
    <AddUserComponent></AddUserComponent>  
    <ListUserComponent></ListUserComponent>
    </>
  );
}

export default App;
