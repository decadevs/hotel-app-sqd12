 import { useState } from 'react';
 import { createContext, useEffect} from 'react';

 export const HmsContext = createContext(6);


export default function HmsIntegration({children}) {
    const [customer, setCustomer] = useState(4);
    const [manager, setManager] = useState(4);
    const [customerId, setCustomerId] = useState(localStorage.getItem('customerId'))
    const [managerId, setManagerId] = useState(localStorage.getItem('managerId'))


    useEffect( ()=>{
        async function fetchData(){
            localStorage.setItem('customerId', "f029bbff-2655-49ed-a032-63042175aa40");
            setCustomerId(localStorage.getItem("customerId"));
            const Id = customerId;
            const response = await fetch(`https://localhost:7255/api/Customers/${Id}`);
            const payload = await response.json();
            setCustomer(payload.data.appUser);
        }

        fetchData();
     
    }, [customerId])

//Manager 
    useEffect( ()=>{
      async function fetchData(){
        localStorage.setItem('managerId', "333ef607-d562-4ab3-8c29-98b8c0f4b23f");
        setManagerId(localStorage.getItem("managerId"));
        const Id = managerId;
       

        const response = await fetch(`https://localhost:7255/api/Customers/Manager/${Id}`);
        const payload = await response.json();
        setManager(payload.data.appUser);
      }

      fetchData();
   
  }, [managerId])


  return (
    <section className="section">
      <HmsContext.Provider value={{customer, manager }}>
        {children}
      </HmsContext.Provider>
    </section>
  );
}





// export function Manager({children}) {
//     const [payload, setPayload] = useState(4);
//     const [storedId, setStoredId] = useState(localStorage.getItem('Id'))
    
   
//     useEffect( ()=>{
//         async function fetchData(){
//             localStorage.setItem('managerId', "333ef607-d562-4ab3-8c29-98b8c0f4b23f");
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




