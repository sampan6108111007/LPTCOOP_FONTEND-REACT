import React, { useState, useEffect } from "react";
import axios from "axios";
//export default function Content() {

  // import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// 
// 

// const CustomerList = () => {
//   const [wcucfcoopbranch, setWcucfcoopbranch] = useState([]);

//   useEffect(() => {
//     const fetchWcucfcoopbranch = async () => {
//       const res = await axios.get("http://localhost:3000/wcucfcoopbranch");
//       setWcucfcoopbranch(res.data);
//     };

//     fetchWcucfcoopbranch();
//   }, []);

//   return (
//     <div>
//       <h1>Branch List</h1>
//       <ul>
//         {wcucfcoopbranch.map((wcucfcoopbranch) => (
//           <li key={wcucfcoopbranch}>{wcucfcoopbranch}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CustomerList;

const CustomerList = () => {
const [wcucfcoopbranch, setWcucfcoopbranch] = useState([]);

useEffect(() => {
const fetchWcucfcoopbranch = async () => {
const res = await axios.get("http://localhost:3000/wcucfcoopbranch");
setWcucfcoopbranch(res.data);
};

    fetchWcucfcoopbranch();
   }, []);

   return (
        <div className="content-wrapper">
           <h1>Branch List</h1>
           <ul>
             {wcucfcoopbranch.map((wcucfcoopbranch) => (
               <li key={wcucfcoopbranch}>{wcucfcoopbranch}</li>
            ))}
          </ul>
         </div>
       );
     };
    
     export default CustomerList;

//   return (
//     <div className="content-wrapper">
//   <h1>Content</h1>
  
// </div>

//   )
  //}
