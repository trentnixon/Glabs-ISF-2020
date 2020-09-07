import React, {useEffect, useState} from 'react';

// Actions
import {GA} from "../../actions/ga"
// Structure
import {Container} from "../../Structure/Structure";
import Header from "../../Core_Element/Header"
import {H1, H2, P} from "../../Typography/Type"
// Elements

// Sections
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
//import Section4 from "./Section4";
import Section5 from "./Section5";
//import Section6 from "./Section6";
import Section6_5 from "./Section6_5";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";
import Section10 from "./Section10";


const ISF = (props)=>{
    const Meta = {
        "Title":"By the numbers: Why we can’t afford to mess with Super",
        "SubTitle":"Industry Super Funds",
        "Header":"Header.jpg"
       }
    return(
        <div className="ISF">
            <Header  Meta={Meta} {... props}/>
            <Container>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section5 />
                <Section6_5 />
                <Section7 />
                <Section8 />
                <Section9 />
                <Section10 />
            </Container>
        </div>
    )
}
export default ISF;
// <Section4 />
// <Section6 />