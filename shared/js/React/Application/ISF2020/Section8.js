import React, {useEffect, useState, useRef} from 'react';

// Actions
import {GA} from "../../actions/ga"
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger)
    gsap.core.globals("ScrollTrigger", ScrollTrigger)
  }


// Structure
import {Container} from "../../Structure/Structure";
import {H1, H2, P} from "../../Typography/Type"

const MovePanel = (Panel)=>{
    const EaseThis ="power2.out";
    
    const Master = gsap.timeline();
    Master.from(Panel,{height:0, paddingTop:0, paddingBottom:0, ease:EaseThis, duration:2})
       
    return Master;
}

const Section8 = ()=>{
    let Section8 = useRef(null)
    let AnimateBoxes = useRef(null)

    let ProjectBoxes = useRef(null) 
    let Project1  = useRef(null)
    let Project2  = useRef(null)
    let Project3  = useRef(null)
    let Project4  = useRef(null)


    const Content = {
        "Title":"Investment in super is the best way to stabilise the Australian economy after Covid-19",
        "Copy":["Industry super funds outperform retail funds - on average, by <strong>1.8 per cent a year</strong> over the past 23 years.",
                "That grows the federal budget bottom line through increased tax revenue, lower debt interest payments and reduced age-related payments."
                ],
            "FootNote":"*Data source: Industry SuperFunds, Super in the Economy Report 2020",
        "Copy2":["Industry super funds contribute budget savings through infrastructure growth, higher tax revenue, greater private wealth, lower pension payouts and more."],
      
       }

    useEffect(()=>{

      

        let Panels = gsap.timeline({
            paused: true,

            scrollTrigger: {
                trigger: ProjectBoxes,
                toggleActions:"restart pause reverse pause",
                id:"Section 8 Panels",
                start: "top 70%",
                end: "bottom 60%",
                scrub: 1,
                pin:false,
                markers: false,
                //anticipatePin:1,
            }
         }
        );

        Panels.add(MovePanel(Project1))
        .add(MovePanel(Project2),"-=1")
        //.add(MovePanel(Project3),"-=1")
        .add(MovePanel(Project4),"-=1")

    },[])
    
    return(

        <Container>
            <section className="Section Section8"   ref={el=>{ Section8 = el}}>
         
                <H1 Copy={Content.Title} />
                <P Copy={Content.Copy} />


                <div className="Blocks" ref={el=>{ ProjectBoxes = el}}>
                    <div className="Block Block1" ref={el=>{ Project1 = el}}>  
                        <h1>$6.6</h1>
                        <h2>billion</h2>
                        <p>capital expenditure </p>
                    </div>
                    <div className="Block Block2" ref={el=>{ Project2 = el}}> 
                         <h1>$6.5</h1>
                        <h2>billion</h2>
                        <p>upstream spending</p>
                    </div>
                   
                    <div className="Block Block4" ref={el=>{ Project4 = el}}> 
                        <h1>x2.4</h1>
                        <p>short-term multiplier</p>
                    </div>
                </div> 

                <P Copy={Content.Copy2} />
                <p className="Footnote"><small>{Content.FootNote}</small></p>
            </section>
        </Container>
    )
}
export default Section8;    
/*
 <div className="Block Block3" ref={el=>{ Project3 = el}}>  
                        <h1>46k</h1>
                        <p>Jobs Created</p>
                        </div>
*/