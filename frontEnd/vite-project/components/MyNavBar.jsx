import {NavLink} from "react-router-dom";

export default function MyNavBar(){




    return(
      
            <header>
                <h1>
                    <NavLink to = "/">Home</NavLink>
                    <NavLink to = "/DSA">Leetcode</NavLink>
                    
                    
                </h1>
            </header>
        

    )
}