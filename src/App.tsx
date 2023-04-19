// import { useState, useEffect } from 'react'
// import axios from 'axios';
// import React from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App(){
//   return (
//     <div>
//       <h1></h1>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerList = () => {
  const [wcucfcoopbranch, setWcucfcoopbranch] = useState([]);

  useEffect(() => {
    const fetchWcucfcoopbranch = async () => {
      const res = await axios.get('http://localhost:3000/wcucfcoopbranch');
      setWcucfcoopbranch(res.data);
    };

    fetchWcucfcoopbranch();
  }, []);

  return (
    <div>
      <h1>Branch List</h1>
      <ul>
        {wcucfcoopbranch.map(wcucfcoopbranch => (
          <li key={wcucfcoopbranch}>{wcucfcoopbranch}</li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;


// import React, { useState, useEffect } from 'react';

// function CustomerList() {
//   const [wcucfcoopbranch, setWcucfcoopbranch] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:3000/wcucfcoopbranch')
//       .then(res => res.json())
//       .then(data => setWcucfcoopbranch(data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div>
//       <h1>Branch_ID</h1>
//       <ul>
//         {wcucfcoopbranch.map(wcucfcoopbranch => (
//           <li key={wcucfcoopbranch}>{wcucfcoopbranch}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default CustomerList;

// export default App


// const fetchBranchData =() => {
//   fetch("")

  // useEffect(() => {
  //   fetch("http://localhost:8000/")
  //   .then((res) => res.json())
  //   .then((data) => setBranch(data.branch));
  // },[]);

  // const [branch, setBranch] = useState("");
  // const fetchBranchData = () => {
  //   fetch("http://localhost:8080/data")
  //   .then(response =>{
  //     return response.json()
  //   })
  //   .then(data =>{
  //     setBranch(data)
  //   })
  // }

  // useEffect(() => {
  //   fetchBranchData()
  // }, [])

  // const App = props =>{
  //   const[data,setData] = React.useState([])
  //   React.useEffect(()=>{
  //     axios('http://localhost:8080/data')
  //     .then(response=>{
  //       if(response.status===200){
  //         const fetchedData = response.data;
  //         console.log('fetchedData',fetchedData,fetchedData.length);
  //         setData(fetchedData)
  //       }
  //     })
  //     .catch(err=>{
  
  //     })
  //   },[]);