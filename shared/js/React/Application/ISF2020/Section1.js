import React, {useRef} from 'react';

// Actions
// import {gsap} from 'gsap'


// Structure 
import {Container} from "../../Structure/Structure";
import {H1, H2, P} from "../../Typography/Type"


const Section1 = ()=>{

    let Section1 = useRef(null)
   const Content = {
    "Copy":["In a time of crisis, we’re all making important decisions about our super. But can we afford the long-term impacts? We break it down by the numbers."]
   }

    return(
            <Container>
                 <section className="Section Section1"   ref={el=>{ Section1 = el}}>
                    <P Copy={Content.Copy} />
                </section>
            </Container> 
    )
}
export default Section1;