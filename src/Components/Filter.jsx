export default function Filter() {

  return (
    <div>
      <h3>Filter By</h3>
       
      <input
        type="radio"
        name="filter"
        // onClick={filterDispatch({ type: "ALL" })}
        id="all"
        
      >
        
      </input><label style={{border:"solid 2px black"}} htmlFor="all">All</label>
      <input
        type="radio"
        name="filter"
        // onClick={filterDispatch({ type: "Gyan" })}
        placeholder="Gyan"
      >
        
      </input>
      <input
        type="radio"
        name="filter"
        // onClick={filterDispatch({ type: "Music" })}
        placeholder="Music"
      >
       
      </input>
      <input
        type="radio"
        name="filter"
        // onClick={filterDispatch({ type: "Product" })}
        placeholder="Product"
      >
        
      </input>
    </div>
  );
}
