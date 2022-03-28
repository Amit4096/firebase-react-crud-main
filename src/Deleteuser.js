// import { useState, useEffect } from "react";
// import "./App.css";
// import { db } from "./firebase-config";
// import {
//   collection,
//   getDocs,

//   deleteDoc,
//   doc,
// } from "firebase/firestore";
// import { Container, Table } from 'reactstrap';
// const NavBar = () => (
//     <header className='navbar'>
//         {/* <div className='navbar__title navbar__item'>Cutco</div> */}
       
//         <div className='navbar__item' ><a class="ok" href="/home">Home</a></div>
     
//     {/* </form> */}
//       <div className='navbar__item1'><a class="ok" href="/">Log Out</a></div>
//     </header>
//   );
// // const DU = () => {
// //   const [users, setUsers] = useState([]);

// //   const usersCollectionRef = collection(db, "mobiles");


// //   const deleteUser = async (id) => {
// //     const userDoc = doc(db, "mobiles", id);
// //     // await deleteDoc(userDoc);

// //   };
// //   const getUsers1 = async () => {
// //     const data = await getDocs(usersCollectionRef1);
// //     setUsers1(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
// //     alert(setUsers1.data);

// //   };

// //   //useeffect hook imported at the top
// //   //useeffect is a function which is call whenever page reder

// //   useEffect(() => {
// //     //async use to fetch data through api
// //     const getUsers = async () => {
// //       const data = await getDocs(usersCollectionRef);
// //       setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
// //     };

// //     getUsers();
// //   }, []);


// //    return (
// //      <div className="App">
// // {/* <input
// //          placeholder="Name..."
// //                   onChange={(event) => {
// //           setNewName(event.target.value);
// //         }}
// //       />
// //       <input
// //         type="number"
// //         placeholder="Age..."
// //         onChange={(event) => {
// //           setNewAge(event.target.value);
// //         }}
// //       />
// //       <button onClick={createUser}> Create User</button> */}
// //         <NavBar />
// //     <h1><b>Delete user</b></h1>

// //       {users.map((user) => {
// //         return (
        
// //           <div className="container">
// //             <table >
// //             <thead class="thead-dark">
// //                 <tr>
// //                 <th>  phone No.  </th>
// //                   <th>UserID</th>
            
                    
// //                     <th>   <button
// //               onClick={() => {
// //                 deleteUser(user.id);
// //               }}
// //             >
        
// //               Delete Data
// //             </button></th>
                 
// //                 </tr>
// //             </thead>
         

// //             {" "}
// //             <tr>     <td>{user.id}</td>
// //                     <td>{user.uid}</td>
                    
                
// //                     </tr>
// //                     <br></br>
               
     
         
// //             </table>
// // <br></br>
// //           </div>
// //         );
// //       })}
  

    

// //     </div>
// //   );
// // }

// // export default DU;



// function DU() {

  
//   // const [newName, setNewName] = useState("");
//   // const [newAge, setNewtype] = useState(0);
  
  
// //created new state which hold user
//   const [users, setUsers] = useState([]);
  
//   const [users1, setUsers1] = useState([1]);
//   const usersCollectionRef = collection(db, "mobiles");

//   const deleteUser = async (id) => {
//     const userDoc = doc(db, "mobiles", id);
//     await deleteDoc(userDoc);


// return (
//   <div className="cak">
//        <NavBar />
  
// <br></br>
//   </div>
// )};




//   const customerList = users.map(user => {
//     return <tr id={user.id}>
//       <td  ><b>{user.id}</b></td>
//       <td >{user.uid}</td>

//       <td > 

//           {/* <Button size="sm" color="primary" tag={Link} to={"/customers/" + customer.id}>Edit</Button> */}
//           {/* <Button size="sm" color="danger" onClick={() => this.remove(customer.id)}>Delete</Button> */}
//       <button type="button" class="btn btn-outline-primary" onClick={deleteUser(user.id)}>Delete</button> 

//       </td>
//     </tr>
//   });
  
 



//   useEffect(() => {
//     //async use to fetch data through api
//     const getUsers = async () => {
//       const data = await getDocs(usersCollectionRef);
//       setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      
//     };
  
    

      
      
  
  
//     getUsers();
 
//   }, []);


//    return (
//      <div className="App">
//           <NavBar />

//           <Container fluid>

// <h3>Delete User Data</h3>
// <Table className="mt-4">
//   <thead>
//     <tr>
//       <th >Phone No.</th>
//       <th>UserID</th>
     
//     </tr>
//   </thead>
//   <tbody>
//   {customerList}
//   </tbody>
// </Table>
// </Container>
   

//        </div>


       
//   );
// }

// export default DU;



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

import { useNavigate } from 'react-router-dom';
import { ArtTrack } from "@material-ui/icons";

//importing 

const NavBar = () => (
  <header className='navbar'>
 
      <div className='navbar__item' ><a class="ok" href="/home">Home</a></div>
      <div className='navbar__item' ><a class="ok" href="/CookedFood">CookedFood</a></div>
      <div className='navbar__item'><a class="ok" href="/UnCookedFood">UnCookedFood</a></div>
      <div className='navbar__item'><a class="ok" href="/OtherThings">OtherThings</a></div>        
      <div className='navbar__item'><a class="ok" href="/FV">Fruits & Vegies</a></div>  
      <form role="search" className="form1">
      <input type="search" id="query" className="input1" name="q" placeholder="Search UserID" aria-label="Search through site content"/>
      <button>
        <svg viewBox="0 0 1024 1024"><path class="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg>
      </button>
    </form>  
      <div className='navbar__item1'><a class="ok" href="/">Log Out</a></div>

     
  </header>

);


function DU() {

  const navigate = useNavigate();
  
  // const [newName, setNewName] = useState("");
  // const [newAge, setNewtype] = useState(0);
  

//created new state which hold user
  const [users, setUsers] = useState([]);
  const [users1, setUsers1] = useState([1]);
  const usersCollectionRef = collection(db, "mobiles");
  // const usersCollectionRef1 = collection(db, "CookedFood");
  // const usersCollectionRef2 = collection(db, "mobile");
  // const usersCollectionRef3 = collection(db, "Fruits&Vegies");
  // const usersCollectionRef4 = collection(db, "OtherThings");
  // const createUser = async () => {
  //   await addDoc(usersCollectionRef, { name: newName, type: Number(newAge) });
  // };

  // const updateUser = async (id, age) => {
  //   const userDoc = doc(db, "users", id);
  //   const newFields = { age: age + 1 };
  //   await updateDoc(userDoc, newFields);
  // };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "mobiles", id);

    await deleteDoc(userDoc);


  };


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
<br></br>
        <h3><b>Delete User</b></h3>


      {users.map((user) => {
        return (
        <div class="split left">
  <div className="container">
            <table >
            <thead class="thead-dark">
              
                <tr>
                  
                
                    <th>Phone No    </th>
                    <th>UserID     </th>
                    <th>   <button type="button" class="btn btn-outline-primary" 
              onClick={() => {
                deleteUser(user.id);
              }}
            >
        
              Delete Data
            </button></th>
                </tr>
            </thead>
         

            {" "}
            <tr>     
                    <td>{user.id}</td>
                    <td>{user.uid}</td>
               
             
                    </tr>
                    <br></br>
               
     
           
            </table>
         
<br></br>
          </div>
       </div>
        );
      })}
  
  
      <br></br>
  

     
    </div>
  );
}

export default DU;

  
  