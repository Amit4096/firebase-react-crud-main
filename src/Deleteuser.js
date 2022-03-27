import { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,

  deleteDoc,
  doc,
} from "firebase/firestore";

const NavBar = () => (
    <header className='navbar'>
        {/* <div className='navbar__title navbar__item'>Cutco</div> */}
       
        <div className='navbar__item' ><a class="ok" href="/home">Home</a></div>
      <div className='navbar__item' ><a class="ok" href="/CookedFood">CookedFood</a></div>
      <div className='navbar__item'><a class="ok" href="/UnCookedFood">UnCookedFood</a></div>
      <div className='navbar__item'><a class="ok" href="/OtherThings">OtherThings</a></div>        
      <div className='navbar__item'><a class="ok" href="/FV">Fruits & Vegies</a></div>    
      {/* <form role="search" className="form1"> */}
      <input type="search" id="query" className="input1" name="q" placeholder="Search by Phone No." aria-label="Search through site content"/>
      <button>
        <svg viewBox="0 0 1024 1024"><path class="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg>
      </button>
    {/* </form> */}
      <div className='navbar__item1'><a class="ok" href="/">Log Out</a></div>
    </header>
  );
const DU = () => {
  const [users, setUsers] = useState([]);
  const [users1, setUsers1] = useState([]);
  const usersCollectionRef = collection(db, "mobiles");
  const usersCollectionRef1 = collection(db, "mobiles");

  const deleteUser = async (id) => {
    const userDoc = doc(db, "mobiles", id);
    // await deleteDoc(userDoc);

  };
  const getUsers1 = async () => {
    const data = await getDocs(usersCollectionRef1);
    setUsers1(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    alert(setUsers1.data);

  };

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
{/* <input
         placeholder="Name..."
                  onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Age..."
        onChange={(event) => {
          setNewAge(event.target.value);
        }}
      />
      <button onClick={createUser}> Create User</button> */}
        <NavBar />
    <h1><b>Delete user</b></h1>

      {users.map((user) => {
        return (
        
          <div className="container">
            <table >
            <thead class="thead-dark">
                <tr>
                <th>  phone No.  </th>
                  <th>UserID</th>
            
                    
                    <th>   <button
              onClick={() => {
                deleteUser(user.id);
              }}
            >
        
              Delete Data
            </button></th>
                 
                </tr>
            </thead>
         

            {" "}
            <tr>     <td>{user.id}</td>
                    <td>{user.uid}</td>
                    
                
                    </tr>
                    <br></br>
               
     
         
            </table>
<br></br>
          </div>
        );
      })}
  

    
{/* <button className="btn btn-success"
                        onClick={coursesPage}>Explore Courses
                    </button> */}
    </div>
  );
}

export default DU;



// import { useState, useEffect } from "react";
// import "./App.css";
// import { db } from "./firebase-config";
// import {
//   collection,
//   getDocs,

//   deleteDoc,
//   doc,
// } from "firebase/firestore";
// import { Link } from "react-router-dom";
// import "./Search.css";
  


  
  
    
    
// const NavBar = () => (
//   <header className='navbar'>
//       {/* <div className='navbar__title navbar__item'>Cutco</div> */}
      
//       <div className='navbar__item' ><a class="ok" href="/home">Home</a></div>
//       <div className='navbar__item' ><a class="ok" href="/CookedFood">CookedFood</a></div>
//       <div className='navbar__item'><a class="ok" href="/UnCookedFood">UnCookedFood</a></div>
//       <div className='navbar__item'><a class="ok" href="/OtherThings">OtherThings</a></div>        
//       <div className='navbar__item'><a class="ok" href="/FV">Fruits & Vegies</a></div>   
    
   
//       {/* <form role="search" className="form1">
//       <input type="search" id="query" className="input1" name="q" placeholder="Search by Phone No." aria-label="Search through site content"/>
 
//       <button>
//         <svg viewBox="0 0 1024 1024"><path class="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg>
//       </button>
//     </form> */}
//       <div className='navbar__item1'><a class="ok" href="/">Log Out</a></div>
     
//   </header>
// );

// const DU = () => {
//   const [users, setUsers] = useState([]);
//   const usersCollectionRef = collection(db, "mobiles");



//   const deleteUser = async (id) => {

//     const userDoc = doc(db, "mobiles", id);
// alert(userDoc.id);
//     // await deleteDoc(userDoc);
//   };
//   const fn=()=> {
//     const d = document.getElementById('okk').value;

// deleteUser(d);
 
// }

//   //useeffect hook imported at the top
//   //useeffect is a function which is call whenever page reder

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

//         <NavBar />
//     <h1><b>Cooked Food Data</b></h1>
//     <form role="search" className="form1">
//       <input type="text"   
//                  id="okk" className="input1" placeholder="Delete user by id" aria-label="Search through site content"/>
//       <button  onClick={() => {
//                 fn();
//               }}>
//        Delete
//       </button>
//     </form>  
   
  

    
// {/* <button className="btn btn-success"
//                         onClick={coursesPage}>Explore Courses
//                     </button> */}
//     </div>
//   );
// }

// export default DU;


