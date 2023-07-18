// import { createContext, useEffect, useState } from 'react';

// const GlobalContext = createContext();

// const GlobalProvider = ({ children }) => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         setUsers(data);
//       } catch (error) {
//         console.error('Terjadi kesalahan:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <GlobalContext.Provider value={users}>
//       {children}
//     </GlobalContext.Provider>
//   );
// };

// export { GlobalContext, GlobalProvider };
