import { useState } from "react";

const SearchParam = () =>{
    const [location,updateLocation] = useState("")
    return(
        <div className="search-params">
            <form>
                <label htmlFor="location">Location</label>
                <input id="location" value={location} placeholder="Location" onChange={(e) =>updateLocation(e.target.value)}/>
                <button>submit</button>
            </form>
        </div>
    );
}
export default SearchParam;