import React from "react";
import Title from "../components/Title";
import UnorderedList from "../components/UnorderedList";

function About(){
    return(
        <div>
            <Title 
            name="Node js Guide" 
            contactNumber={"1232323233"} 
            schoolName={"KV"} 
            rollNo={"46"} 
            />
            {/* <UnorderedList /> */}
            {/* <Title name="General" /> */}
            {/* <Title name="Soumya" /> */}
        </div>
    )
}

export default About;