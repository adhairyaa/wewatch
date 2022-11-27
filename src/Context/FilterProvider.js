// import { createContext, useReducer } from "react";
// import { useDataProvider } from "./Reducer";

// const filterContext = createContext()

// export const FilterProvider = ({children})=>{

//     // const {state,dispatch} = useDataProvider()
//     // const {Data} = state

//     const handleFilterDispatch = (filterState,action)=>{
//         switch(action.type){
//             case "ALL":
//                 return ({...filterState,filterCategory:"ALL"})
//             case "Gyan":
//                 return ({...filterState,filterCategory:"Gyan"})
//             case "Music":
//                 return ({...filterState,filterCategory:"Music"})
//             case "Product":
//                 return ({...filterState,filterCategory:"Product"})
//             default:
//                 return filterState
//         }
//     }
    
//     const handleFiltering = (Data,filterCategory)=>{
//         if (filterCategory === "ALL"){
//             return Data
//         }
//         else if(filterCategory === "Gyan"){
//             return Data.filter((item)=>item.VideoCategory === "Gyan")
//         }
//         else if(filterCategory === "Music"){
//             return Data.filter((item)=>item.VideoCategory === "Music")
//         }
//         else if(filterCategory === "Product"){
//             return Data.filter((item)=>item.VideoCategory === "Product")
//         }
//     }
//     const {filterState,filterDispatch} = useReducer(handleFilterDispatch,{
//         filterCategory:"ALL",
//         }
//     )
//         // const filteredData = handleFiltering(Data,filterState.filterCategory)
        
//     return(
//         <filterContext.Provider value={{filterDispatch}}>{children}</filterContext.Provider>
//     )
// }