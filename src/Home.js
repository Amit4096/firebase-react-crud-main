//useeffect hook is used to show data on a ptype without clicking on any button
import { useState, useEffect } from "react";
import "./App.css";
import "./button.css"
import { db } from "./firebase-config";
import {
  collection,
  getDocs,

  deleteDoc,
  doc,
} from "firebase/firestore";
import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';

import { Link } from 'react-router-dom';


import { useNavigate } from 'react-router-dom';
import copy from "copy-to-clipboard"; 
import {CopyToClipboard} from 'react-copy-to-clipboard';
//importing 

const NavBar = () => (
  <header className='navbar'>
 
      <div className='navbar__item' ><a class="ok"  href="/home">Home</a></div>
      <div className='navbar__item' ><a class="ok" href="/deleteuser">Delete user</a></div>
      <div className='navbar__item' ><a class="ok" href="/CookedFood">CookedFood</a></div>
      <div className='navbar__item'><a class="ok" href="/UnCookedFood">UnCookedFood</a></div>
      <div className='navbar__item'><a class="ok" href="/OtherThings">OtherThings</a></div>        
      <div className='navbar__item'><a class="ok" href="/FV">Fruits & Vegies</a></div>  
      <form role="search" className="form1">
      <input type="search" id="query" className="input1" name="q" placeholder="Delete user by id" aria-label="Search through site content"/>
      <button >
        <svg viewBox="0 0 1024 1024"><path class="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg>
      </button>
    </form>  
      <div className='navbar__item1'><a class="ok" href="/">Log Out</a></div>

     
  </header>

);



function About() {

  const navigate = useNavigate();
  
  // const [newName, setNewName] = useState("");
  // const [newAge, setNewtype] = useState(0);
  
  
//created new state which hold user
  const [users, setUsers] = useState([]);
  
  const [users1, setUsers1] = useState([1]);
  const usersCollectionRef = collection(db, "users");
  // const usersCollectionRef1 = collection(db, "CookedFood");
  // const usersCollectionRef2 = collection(db, "mobile");
  // const usersCollectionRef3 = collection(db, "Fruits&Vegies");
  // const usersCollectionRef4 = collection(db, "OtherThings");
  // const createUser = async () => {
  //   await addDoc(usersCollectionRef, { name: newName, type: Number(newAge) });
  // };
  const deleteUser12 = async (id) => {
    const userDoc = doc(db, "users", id);
    <tr >
      <td  >{userDoc.name}</td>
      <td >{userDoc.phone}</td>
      <td >{userDoc.type}</td>
      </tr>

  };
  const customerList = users.map(user => {
    return <tr id={user.id}>
      <td  >{user.name}</td>
      <td >{user.phone}</td>
      <td >{user.type}</td>
      <td >

          {/* <Button size="sm" color="primary" tag={Link} to={"/customers/" + customer.id}>Edit</Button> */}
          {/* <Button size="sm" color="danger" onClick={() => this.remove(customer.id)}>Delete</Button> */}
      <Button size="sm" color="danger" onClick={deleteUser12(user.id)}>View detail</Button> 

      </td>
    </tr>
  });
  
  // const updateUser = async (id, age) => {
  //   const userDoc = doc(db, "users", id);
  //   const newFields = { age: age + 1 };
  //   await updateDoc(userDoc, newFields);
  // };

  // const deleteUser = async (id) => {
  //   const userDoc = doc(db, "users", id);
  //   const userDoc2 = doc(db, "mobile", id);
  //   await deleteDoc(userDoc);
  //   navigate('./home1');

  // };
  // const deleteUser1 = async (id) =>{
  //   /* Get the text field */
    
  
  //   /* Alert the copied text */
  // }

  //useeffect hook imported at the top
  //useeffect is a function which is call whenever page reder
  
  useEffect(() => {
    //async use to fetch data through api
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      
    };
  
    

      
      
  
  
    getUsers();
 
  }, []);


   return (
     <div className="App">
          <NavBar />
          <Container fluid>

<h3>Customer List</h3>
<Table className="mt-4">
  <thead>
    <tr>
      <th >Name</th>
      <th>Phone No.</th>
      <th>Type</th>
      <th >Actions</th>
    </tr>
  </thead>
  <tbody>
  {customerList}
  </tbody>
</Table>
</Container>
   
  
    </div>
  );
}

export default About;



