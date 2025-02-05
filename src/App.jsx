import React, { useEffect, useState } from "react";

import * as contentful from "contentful";
import { client } from "./client/contentfulClient";

function App() {
    const [data, setData] = useState();

    useEffect(() => {
        client
            .getEntries()
            .then((response) => setData(response))
            .catch(console.error);
    }, []);

    console.log("Contentful data", data);
    
    return (
        <>
            <h1>Hello</h1>
            {}
        </>
    );
}

export default App;
