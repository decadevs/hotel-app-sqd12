 import { useState } from 'react';
 import { createContext, useEffect} from 'react';

 //export const LevelContext = createContext(1);
 export const DashboardContext = createContext(6);
 export const ManagerContext = createContext(2);
  

// export const transactionContext = createContext(3);
// export const managerContext = createContext(4); 



export default function Section({children}) {
    const [payload, setPayload] = useState(4);
    const [storedId, setStoredId] = useState(localStorage.getItem('Id'))


    useEffect( ()=>{
        async function fetchData(){
            localStorage.setItem('Id', "b4ae46af-744f-4cb0-80c5-9951958eb111");
            setStoredId(localStorage.getItem(""));
            const Id = storedId;
            const response = await fetch(`https://localhost:7255/api/Customers/${Id}`);
            const payload = await response.json();
            setPayload(payload.data.appUser);
           
        }

        fetchData();
     
    }, [])
  return (
    <section className="section">
      <DashboardContext.Provider value={payload}>
        {children}
      </DashboardContext.Provider>
    </section>
  );
}

// export function Manager({children}) {
//     const [payload, setPayload] = useState(4);
//     const [storedId, setStoredId] = useState(localStorage.getItem('Id'))
    
   
//     useEffect( ()=>{
//         async function fetchData(){
//             localStorage.setItem('Id', "333ef607-d562-4ab3-8c29-98b8c0f4b23f");
//             setStoredId(localStorage.getItem(""));
//             const Id = storedId;
//             const response = await fetch(`https://localhost:7255/api/Customers/Manager/${Id}`);
//             const payload = await response.json();
//             setPayload(payload.data.appUser);
          
//         }

//         fetchData();
     
//     }, [])
//   return (
//     <section className="section">
//       <ManagerContext.Provider value={payload}>
//         {children}
//       </ManagerContext.Provider>
//     </section>
//   );
// }




