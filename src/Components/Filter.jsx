const handleFilterDispatch = (filterState,action)=>{
    switch(action.type){
        case "ALL":
            return ({...filterState,filterCategory:"ALL"})
        case "Gyan":
            return ({...filterState,filterCategory:"Gyan"})
        case "Music":
            return ({...filterState,filterCategory:"Music"})
        case "Product":
            return ({...filterState,filterCategory:"Product"})
        default:
            return filterState
    }
}

const handleFiltering = (Data,filterCategory)=>{
    if (filterCategory === "ALL"){
        return Data
    }
    else if(filterCategory === "Gyan"){
        return Data.filter((item)=>item.VideoCategory === "Gyan")
    }
    else if(filterCategory === "Music"){
        return Data.filter((item)=>item.VideoCategory === "Music")
    }
    else if(filterCategory === "Product"){
        return Data.filter((item)=>item.VideoCategory === "Product")
    }
}
const {filterState,filterDispatch} = useReducer(handleFilterDispatch,{
    filterCategory:"ALL",
    filterData:[]

})

<div>
                <h3>Filter By</h3>
                <input type="radio" name="filter" onClick={filterDispatch({type:"ALL"})}>All</input>
                <input type="radio" name="filter" onClick={filterDispatch({type:"Gyan"})}>Gyan</input>
                <input type="radio" name="filter" onClick={filterDispatch({type:"Music"})}>Music</input>
                <input type="radio" name="filter" onClick={filterDispatch({type:"Product"})}>Product</input>
                
            </div>

const filteredData = handleFiltering(Data,filterState.filterCategory)
filterState.filterData = filteredData