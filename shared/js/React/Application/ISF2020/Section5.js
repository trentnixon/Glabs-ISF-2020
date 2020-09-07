import React, {useEffect, useRef} from 'react';

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
import {H1, P} from "../../Typography/Type"

const Section5 = ()=>{

    let Section5 = useRef(null)
    let Section5Icons = useRef(null)
    let Section5Icons1  = useRef(null)
    let Section5Icons2  = useRef(null)
    const EaseThis ="power2.out";

    const Content = {
        "Title":"Less Super means working longer",
        "Copy":[
            "Back in 2014, increases to the superannuation guarantee (compulsory super contributions) were delayed until 2021. That means the planned increase from 9.5% to 12% won’t be finalised until 2025.",
            "The delay has already cost the average Australian $4,300 in lost super. Now, the government is talking about scrapping the increase altogether.",
            "If the proposal to freeze the super guarantee succeeds, the impact on average Australians will be severe - especially for those who have withdrawn the $20,000 available during Covid-19."],
        "Icon1":["If the super contributions freeze goes ahead, on average, a 30-year-old man who has withdrawn $20,000 from his super during Covid-19 will need to work an extra 6 ½ years to make up the difference, or have $180,000 less in retirement at age 67."],
        "Icon2":["The impact on women is even greater. A 30-year-old woman on average earnings faces an extra eight years of work, or will have $150,000 less at age 67"]
       }

    useEffect(()=>{ 
        let tl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: Section5Icons,
                toggleActions:"restart pause reverse pause", 
                pin:'Section5',
                id:"Section 5",
                start: "top 80%",
                end: "bottom 70%",
                scrub: 1,
                markers: false
            }
         });


        tl.fromTo( Section5Icons1, {opacity:0, xPercent:-30, duration:1.5,ease: EaseThis}, { opacity:1,  xPercent:0, duration:1.5,ease: EaseThis })
        .fromTo('.IconBox1 svg',{ scale:0}, {scale:1},"-=1")
        .fromTo(   Section5Icons2, {opacity:0, xPercent:-30, duration:1.5,ease: EaseThis}, { opacity:1,  xPercent:0, duration:1.5, ease: EaseThis  })
        .fromTo('.IconBox2 svg',{ scale:0}, {scale:1},"-=1")

    },[])
    
    return(

        <Container>
            <section className="Section Section5"   ref={el=>{ Section5 = el}}>
       
                <H1 Copy={Content.Title} />
                
                <div className="Split">
                    <div className="Left">
                        <P Copy={Content.Copy} />
                    </div>

                    <div className="Right">
                        <div className="IconBox" ref={el=>{ Section5Icons = el}}>
                            <div className="IconBoxes IconBox1" ref={el=>{ Section5Icons1 = el}}>  
                                    <Man />
                                    <P Copy={Content.Icon1} /> 
                            </div>
                            <div className="IconBoxes IconBox2" ref={el=>{ Section5Icons2 = el}}>  
                                    <Woman />
                                    <P Copy={Content.Icon2} /> 
                            </div>
                        </div> 
                    </div>
                </div>
            </section>
        </Container>
    )
}
export default Section5;    


const Man=()=>{
    return(
        <svg width="84px" height="93px" viewBox="0 0 84 93" version="1.1">

    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="ISF_Desktop" transform="translate(-521.000000, -2498.000000)">
            <g id="Less-Super" transform="translate(200.000000, 2401.000000)">
                <g id="Gender" transform="translate(320.000000, 72.000000)">
                    <g id="ManIcon" transform="translate(1.000000, 25.000000)">
                        <g id="Group-20">
                            <path d="M28,16 C28,7.7155 34.4931,1 42.5,1 C50.5069,1 57,7.7155 57,16 L28,16 Z" id="Fill-1" fill="#FFFFFF"></path>
                            <polygon id="Fill-3" fill="#FFFFFF" points="54 48.3076923 42.5 60 31 48.3076923 31 41 54 41"></polygon>
                            <path d="M65.1724138,56.7096774 L57.9310345,52.3548387 L53.5862069,48 L42,59.6129032 L30.4137931,48 L26.0689655,52.3548387 L18.8275862,56.7096774 C12.222,60.0193548 0,65.4193548 0,74.1290323 L0,93 L84,93 L84,74.1290323 C84,65.4193548 71.778,60.0193548 65.1724138,56.7096774" id="Fill-5" fill="#FFFFFF"></path>
                            <path d="M57.5,33 L54.5,33 C53.6705,33 53,32.3528889 53,31.5555556 L53,21.4444444 C53,20.6471111 53.6705,20 54.5,20 L57.5,20 C58.3295,20 59,20.6471111 59,21.4444444 L59,31.5555556 C59,32.3528889 58.3295,33 57.5,33" id="Fill-7" fill="#FFFFFF"></path>
                            <path d="M29.5,33 L26.5,33 C25.6705,33 25,32.3528889 25,31.5555556 L25,21.4444444 C25,20.6471111 25.6705,20 26.5,20 L29.5,20 C30.3295,20 31,20.6471111 31,21.4444444 L31,31.5555556 C31,32.3528889 30.3295,33 29.5,33" id="Fill-9" fill="#FFFFFF"></path>
                        
                            <g id="Clip-12"></g>
                            <polygon id="Fill-11" fill="#2D2D2E" mask="url(#mask-2)" points="61 81 64 81 64 78 61 78"></polygon>
                            <polygon id="Fill-13" fill="#2D2D2E" mask="url(#mask-2)" points="14 93 17 93 17 78 14 78"></polygon>
                            <polygon id="Fill-14" fill="#2D2D2E" mask="url(#mask-2)" points="67 93 70 93 70 78 67 78"></polygon>
                            <path d="M28,16 L28,33.4545455 C28,41.488 35.25,48 42.5,48 C49.75,48 57,41.488 57,33.4545455 L57,16 L28,16 Z" id="Fill-15" fill="#FFFFFF" mask="url(#mask-2)"></path>
                            <path d="M58,13 L58,26 L56.5454545,26 L56.5454545,15.8888889 L49.2727273,8.66666667 L40.5454545,14.4444444 L36.1818182,10.1111111 L27.4545455,15.8888889 L27.4545455,26 L26,26 L26,13 C26,5.81966667 31.8603636,0 39.0909091,0 L44.9090909,0 C52.1396364,0 58,5.81966667 58,13" id="Fill-16" fill="#00A8E9" mask="url(#mask-2)"></path>
                            <polygon id="Fill-17" fill="#EFC72E" mask="url(#mask-2)" points="38 93 47 93 47 70 38 70"></polygon>
                            <path d="M36.7475063,65 L25.4153928,53.6678864 C24.8615357,53.1140294 24.8615357,52.2187924 25.4153928,51.6649354 L29.6649354,47.4153928 C30.2187924,46.8615357 31.1140294,46.8615357 31.6678864,47.4153928 L43,58.7475063 L40.9970489,60.7504574 L30.6664109,50.4198194 L28.4198194,52.6664109 L38.7504574,62.9970489 L36.7475063,65 Z" id="Fill-18" fill="#2D2D2E" mask="url(#mask-2)"></path>
                            <path d="M42.9230207,93 L40,93 L40,59.2190139 C40,58.8297982 40.1534586,58.4552699 40.4282225,58.1806158 L52.1203054,46.4307076 C52.6917559,45.8564308 53.6154305,45.8564308 54.186881,46.4307076 L58.5714121,50.8369231 C59.1428626,51.4111999 59.1428626,52.3394427 58.5714121,52.9137194 L46.8793292,64.6636276 L44.8127536,62.5868314 L55.4715486,51.8753213 L53.1535932,49.545902 L42.9230207,59.8270717 L42.9230207,93 Z" id="Fill-19" fill="#2D2D2E" mask="url(#mask-2)"></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
    )
}

const Woman=()=>{
    return (
        <svg width="84px" height="100px" viewBox="0 0 84 100" version="1.1" >
  
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="ISF_Desktop" transform="translate(-520.000000, -2636.000000)">
            <g id="Less-Super" transform="translate(200.000000, 2401.000000)">
                <g id="Gender" transform="translate(320.000000, 72.000000)">
                    <g id="WomanIcon" transform="translate(0.000000, 163.000000)">
                        <g id="Group-21">
                            <path d="M61.3,18.9 C59.8132333,6.94575 55.0333333,0 47.2,0 C46.3336333,0 45.6333333,0.7056 45.6333333,1.575 C45.6333333,1.575 44.0666667,0 39.3666667,0 C31.5333333,0 25.1867667,6.94575 23.7,18.9 L19,63 L66,63 L61.3,18.9 Z" id="Fill-1" fill="#00A8E9"></path>
                            <path d="M70,62.2857143 L57.5555556,56 L26.4444444,56 L14,62.2857143 C6.90511111,65.8685714 0,68.5714286 0,78 L0,100 L84,100 L84,78 C84,68.5714286 77.0948889,65.8685714 70,62.2857143" id="Fill-3" fill="#FFFFFF"></path>
                            <polygon id="Fill-5" fill="#FFFFFF" points="52 51.5714286 42.5 61 33 51.5714286 33 39 52 39"></polygon>
                           
                            <g id="Clip-8"></g>
                            <polygon id="Fill-7" fill="#2D2D2E" mask="url(#mask-2)" points="14 100 17 100 17 84 14 84"></polygon>
                            <polygon id="Fill-9" fill="#2D2D2E" mask="url(#mask-2)" points="67 100 70 100 70 84 67 84"></polygon>
                            <polygon id="Fill-10" fill="#FFFFFF" mask="url(#mask-2)" points="56 55.875 48.5 64 44 59.125 51.5 51"></polygon>
                            <polygon id="Fill-11" fill="#FFFFFF" mask="url(#mask-2)" points="28 55.875 35.5 64 40 59.125 32.5 51"></polygon>
                            <path d="M45.4399704,59.0700037 L47.9299963,61.5600296 L53.5600296,55.9299963 L51.0700037,53.4399704 L45.4399704,59.0700037 Z M47.9299963,66 L41,59.0700037 L51.0700037,49 L58,55.9299963 L47.9299963,66 Z" id="Fill-12" fill="#2D2D2E" mask="url(#mask-2)"></path>
                            <path d="M30.4399704,55.9299963 L36.0700037,61.5600296 L38.5600296,59.0700037 L32.9299963,53.4399704 L30.4399704,55.9299963 Z M36.0700037,66 L26,55.9299963 L32.9299963,49 L43,59.0700037 L36.0700037,66 Z" id="Fill-13" fill="#2D2D2E" mask="url(#mask-2)"></path>
                            <polygon id="Fill-14" fill="#2D2D2E" mask="url(#mask-2)" points="41 72 44 72 44 69 41 69"></polygon>
                            <polygon id="Fill-15" fill="#2D2D2E" mask="url(#mask-2)" points="41 81 44 81 44 78 41 78"></polygon>
                            <polygon id="Fill-16" fill="#2D2D2E" mask="url(#mask-2)" points="41 91 44 91 44 88 41 88"></polygon>
                            <polygon id="Fill-17" fill="#2D2D2E" mask="url(#mask-2)" points="41 100 44 100 44 97 41 97"></polygon>
                            <polygon id="Fill-18" fill="#EFC72E" mask="url(#mask-2)" points="50 81 64 81 64 78 50 78"></polygon>
                            <polygon id="Fill-19" fill="#2D2D2E" mask="url(#mask-2)" points="41 61 44 61 44 58 41 58"></polygon>
                            <path d="M48.2222222,14 C49.7777778,21.7272727 56,23.2727273 56,23.2727273 C56,35.6363636 54.4444444,46.4545455 42,48 C29.5555556,46.4545455 28,35.6363636 28,23.2727273 C28,23.2727273 45.1111111,24.8181818 48.2222222,14" id="Fill-20" fill="#FFFFFF" mask="url(#mask-2)"></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
    )
}