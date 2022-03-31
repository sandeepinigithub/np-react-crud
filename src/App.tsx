import React, { useState } from 'react';
import './App.scss';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import AddUserComponent from './components/AddUserComponent/AddUserComponent';
import ListUserComponent from './components/ListUser/ListUserComponent';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  function listUsers() {
    axios.get('http://localhost:3001/api/getUsers').then((res: any) => {
      setUsers(res.data);
    }).catch(err => {
      console.log(err);
    });
  }
  function addNewUser(){
    listUsers();
  }

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <AddUserComponent addUser={addNewUser}></AddUserComponent>
      <ListUserComponent users={users}></ListUserComponent>
    </>
  );
}

export default App;
