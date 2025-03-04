import { useState, useCallback } from "react";

const useRequest = () =>{
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

const request = useCallback(async (url, method = "GET", headers = { "Content-Type": "application/json" }, data = undefined) => {
    setLoading(true)
    setError(false)
    try{

        let res = await fetch(url, {
            method: method,
            headers,
            body: JSON.stringify(data) 
        });

        if (!res.ok) {
            setError(true)
            const errorText = await res.text();
            throw new Error(`HTTP ${res.status}: ${errorText}`);
        }

        return await res.json() 

    } catch (error) {
        setError(true)
        throw new Error(error.message);
    } finally {
        setLoading(false)
    }}, [])

    return {request, loading, error}
}

export default useRequest;

// const request = async(url, method="POST", headers={"Content-Type": "application/json"}, data)=>{

//     async (url, method) => {
        
//         let res = await fetch(url, {
//             method: method,
//             headers,
//             body: JSON.stringify(data)
//         })
            
//         if(!res.ok){
//             throw new Error('Error')
//         }
    
//         return await res
//     }

//     return await res.json()

// }

// ///////////////////////////////
// import { useState, useCallback } from "react";

// const useRequest = () =>{
//     const [loading, setLoading] = useState(false)
//     const [error, setError] = useState(false)
//     const [empty, setEmpty] = useState(false)

// const request = useCallback(async (url, method = "GET", headers = { "Content-Type": "application/json" }, data = undefined) => {
//     setLoading(true)
//     setError(false)
//     setEmpty(false)
//     try{

//         let res = await fetch(url, {
//             method: method,
//             headers,
//             body: JSON.stringify(data) 
//         });

//         if (!res.ok) {
//             setError(true)
//             const errorText = await res.text();
//             throw new Error(`HTTP ${res.status}: ${errorText}`);
//         }

//         return await res.json() 

//     } catch (error) {
//         setError(true)
//         throw new Error(error.message);
//     } finally {
//         setLoading(false)
//     }}, [])

//     return {request, loading, error, empty}
// }

// export default useRequest;