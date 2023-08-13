import { useState } from "react";

import { SidebarHeader } from "./header";
import { Notifications } from "./notifications";
 import {Search} from "./search";

export default function Sidebar({ onlineUsers, typing }) {
    const [searchResults, setSearchResults] = useState([]);
    return (
        <div className="flex0030 max-w-[30%] h-full select-none">
              {/*Sidebar Header*/}
             <SidebarHeader />
             {/*Notifications */}
             <Notifications />
             {/*Search*/}
             <Search  
                setSearchResults={setSearchResults}
             
                searchLength={ searchResults.length}/>
      
        </div>
    );
}