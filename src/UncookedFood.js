

// function UnCookedFood() {
  import { useState, useEffect } from "react";
  import "./App.css";
  import { db } from "./firebase-config";
  import {
    collection,
    getDocs,
  
    deleteDoc,
    doc,
  } from "firebase/firestore";
  import { Link } from "react-router-dom";
  import "./Search.css";
  import 'bootstrap/dist/css/bootstrap.min.css';
  import React, { Component } from 'react';
  import { Container, Table } from 'reactstrap';
  import Button from 'react-bootstrap/Button';
  import 'bootstrap/dist/css/bootstrap.min.css';
  
  
  
  import { useNavigate } from 'react-router-dom';
  
  const NavBar = () => (
    <header className='navbar'>
        {/* <div className='navbar__title navbar__item'>Cutco</div> */}
        
        <div className='navbar__item' ><a class="ok" href="/home">Home</a></div>
        <div className='navbar__item' ><a class="ok" href="/CookedFood">CookedFood</a></div>
        <div className='navbar__item'><a class="ok" href="/UnCookedFood">UnCookedFood</a></div>
        <div className='navbar__item'><a class="ok" href="/OtherThings">OtherThings</a></div>        
        <div className='navbar__item'><a class="ok" href="/FV">Fruits & Vegies</a></div>   
      
     
        <form role="search" className="form1">
        <input type="search" id="query" className="input1" name="q" placeholder="Search by Phone No." aria-label="Search through site content"/>
   
        <button>
          <svg viewBox="0 0 1024 1024"><path class="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg>
        </button>
      </form>
        <div className='navbar__item1'><a class="ok" href="/">Log Out</a></div>
       
    </header>
  );
  
  
  function UnCookedFood() {
  
    const navigate = useNavigate();
    
    // const [newName, setNewName] = useState("");
    // const [newAge, setNewtype] = useState(0);
    
    
  //created new state which hold user
    const [users, setUsers] = useState([]);
    
    const [users1, setUsers1] = useState([1]);
    const usersCollectionRef = collection(db, "UnCookedFood");
  
    const deleteUser = async (id) => {
      const userDoc = doc(db, "UnCookedFood", id);
      await deleteDoc(userDoc);
  
  
  return (
    <div className="cak">
         <NavBar />
    
  <br></br>
    </div>
  )};
  
  
  
  
  const customerList = users.map(user => {
    return <tr id={user.id}>
         <td ><img src={user.img} style={{height:"150px", borderRadius:"90px", width:"150px"}}></img></td>
      <td  ><b>{user.name}</b></td>
      <td >{user.place}</td>
      <td >{user.fnum}</td>
      <td >{user.cost}</td>
      <td > 

          {/* <Button size="sm" color="primary" tag={Link} to={"/customers/" + customer.id}>Edit</Button> */}
          {/* <Button size="sm" color="danger" onClick={() => this.remove(customer.id)}>Delete</Button> */}
      <button type="button" class="btn btn-outline-primary" >Delete</button> 

      </td>
    </tr>
  });
  
 



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

<h3>Cooked Food data</h3>
<Table className="mt-4">
  <thead>
    <tr>
      <th>Photo</th>
      <th >Name</th>
      <th>Address</th>
      <th>Amount</th>
      <th >Cost(Rs.)</th>
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
  
  export default UnCookedFood;
  
  
  