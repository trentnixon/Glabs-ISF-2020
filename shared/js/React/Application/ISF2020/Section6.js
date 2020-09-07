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

const Section6 = ()=>{
 
    const Content = {
        "Title":"Draining super affects the whole economy",
        "Copy":[
            "Industry super fund members already collectively own more than <strong>$76bn</strong> in Australian infrastructure, property, and other physical assets. These investments create jobs and drive productivity and growth. ",
            "Now, industry super funds are set to spend big on projects across Australia as part of a three-year investment pipeline."
        ],
        "Icon1":"$19.5 billion investment ",
        "Icon2":"200,000+ new jobs",
        "Title2":"The projects include",
        "Panel1":"Commercial construction",
        "Panel2":"Redevelopments",
        "Panel3":"Public infrastructure upgrades",
        "Panel4":"Improved energy efficiency",
       }


    let Section6 = useRef(null)
    let Section6Icons = useRef(null)
    
    let Section6Icons1  = useRef(null)
    let Section6Icons2  = useRef(null)
    let ProjectBoxes = useRef(null) 
    let Project1  = useRef(null)
    let Project2  = useRef(null)
    let Project3  = useRef(null)
    let Project4  = useRef(null)
    const EaseThis ="power2.out";

    useEffect(()=>{


        /* Animation 1 */
        let tl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: Section6Icons,
                id:"IntBoxes",
                start: "top 70%",
                end: "top 60%", 
                scrub: 1, 
                markers: false
            }
         }
        );

        tl.from( Section6Icons1, {opacity:1, xPercent:100, duration:1.5,ease: EaseThis})
        .from(   Section6Icons2, {opacity:1, xPercent:-100, duration:1.5,ease: EaseThis})
   

        let Panels = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: ProjectBoxes,
                toggleActions:"restart pause reverse pause",
                id:"Pinned",
                start: "top top",
                end: "200%",
                scrub: 1,
                pin:true,
                markers: false,
                //anticipatePin:1,
            }
         }
        );

        Panels.from(Project1, {yPercent:0, duration:2,ease: EaseThis})
        
        Panels.to(Project1, {yPercent:-100, duration:2,ease: EaseThis},"panel2")
        Panels.from(Project2, {yPercent:100, duration:2,ease: EaseThis},"panel2-=.5")

        Panels.to(Project2, {yPercent:-100, duration:2,ease: EaseThis},"panel3")
        Panels.from(Project3, {yPercent:100, duration:2,ease: EaseThis},"panel3-=.5")

        Panels.to(Project3, {yPercent:-100, duration:2,ease: EaseThis},"panel4")
        Panels.from(Project4, {yPercent:100, duration:2,ease: EaseThis},"panel4-=.5")


    },[])



    // 
    
    return(

        <Container>
            <section className="Section Section6"   ref={el=>{ Section6 = el}}>
                <div className="AddPadding">
                <H1 Copy={Content.Title} />
                
                <div className="Split">
                        <div className="Left">
                                <P Copy={Content.Copy} />
                        </div> 
                        <div className="Right">
                            <div className="IntBox" ref={el=>{ Section6Icons = el}}>
                                <div className="IntBoxes IntBox1" ref={el=>{ Section6Icons1 = el}}>  
                                    <H1 Copy={Content.Icon1}/> 
                                </div>
                                <div className="IntBoxes IntBox2" ref={el=>{ Section6Icons2 = el}}> 
                                    <H1 Copy={Content.Icon2}/>  
                                </div>
                            </div> 
                        </div>
                </div>
                
        
            
                
                </div>
                
                <div className="Pinned">
                    <H2 Copy={Content.Title2} />
                    <div className="Panels" ref={el=>{ ProjectBoxes = el}}>
                        <div className="Panel Panel1" ref={el=>{ Project1 = el}}>  
                                <Commercial />
                                <H1 Copy={Content.Panel1} /> 
                        </div>
                        <div className="Panel Panel2" ref={el=>{ Project2 = el}}>  
                            <House />
                                <H1 Copy={Content.Panel2} /> 
                        </div>
                        <div className="Panel Panel3" ref={el=>{ Project3 = el}}>  
                                <LiteRail />
                                <H1 Copy={Content.Panel3} /> 
                        </div>
                        <div className="Panel Panel4" ref={el=>{ Project4 = el}}>  
                                <PowerGrid />
                                <H1 Copy={Content.Panel4} /> 
                        </div>
                    </div> 
                </div>
            </section>
        </Container>
    )
}
export default Section6;    

const Commercial = ()=>{
    return(
        <svg width="128px" height="120px" viewBox="0 0 128 120" version="1.1" >
   
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="ISF_Desktop" transform="translate(-204.000000, -3260.000000)">
            <g id="Draining-Super" transform="translate(200.000000, 2845.000000)">
                <g id="Projects-Include" transform="translate(0.000000, 338.000000)">
                    <g id="Commercial" transform="translate(4.000000, 77.000000)">
                        <g id="Group-57">
                            <polygon id="Fill-1" fill="#EFC72E" points="28 44 100 44 100 36 28 36"></polygon>
                            <polygon id="Fill-2" fill="#2D2D2E" points="0 120 128 120 128 116 0 116"></polygon>
                            <polygon id="Fill-3" fill="#FFFFFF" points="63.9999 0.0003 43.9999 10.0003 43.9999 116.0003 83.9999 116.0003 83.9999 10.0003"></polygon>
                            <polygon id="Fill-4" fill="#FFFFFF" points="99.9999 36.0003 99.9999 116.0003 127.9999 116.0003 127.9999 36.0003 113.9999 28.0003"></polygon>
                            <polygon id="Fill-5" fill="#FFFFFF" points="0 36.0003 0 116.0003 28 116.0003 28 36.0003 14 28.0003"></polygon>
                            <polygon id="Fill-6" fill="#2D2D2E" points="28 48 44 48 44 44 28 44"></polygon>
                            <polygon id="Fill-7" fill="#2D2D2E" points="84 48 100 48 100 44 84 44"></polygon>
                            <polygon id="Fill-8" fill="#00A8E9" points="28 116 44 116 44 48 28 48"></polygon>
                            <polygon id="Fill-9" fill="#00A8E9" points="84 116 100 116 100 48 84 48"></polygon>
                            <polygon id="Fill-10" fill="#2D2D2E" points="90 68 94 68 94 56 90 56"></polygon>
                            <polygon id="Fill-11" fill="#2D2D2E" points="52 68 56 68 56 56 52 56"></polygon>
                            <polygon id="Fill-12" fill="#2D2D2E" points="72 68 76 68 76 56 72 56"></polygon>
                            <polygon id="Fill-13" fill="#2D2D2E" points="62 68 66 68 66 56 62 56"></polygon>
                            <polygon id="Fill-14" fill="#2D2D2E" points="52 48 56 48 56 36 52 36"></polygon>
                            <polygon id="Fill-15" fill="#2D2D2E" points="72 48 76 48 76 36 72 36"></polygon>
                            <polygon id="Fill-16" fill="#2D2D2E" points="62 48 66 48 66 36 62 36"></polygon>
                            <polygon id="Fill-17" fill="#2D2D2E" points="52 88 56 88 56 76 52 76"></polygon>
                            <polygon id="Fill-18" fill="#2D2D2E" points="72 88 76 88 76 76 72 76"></polygon>
                            <polygon id="Fill-19" fill="#2D2D2E" points="62 88 66 88 66 76 62 76"></polygon>
                            <polygon id="Fill-20" fill="#2D2D2E" points="52 108 56 108 56 96 52 96"></polygon>
                            <polygon id="Fill-21" fill="#2D2D2E" points="72 108 76 108 76 96 72 96"></polygon>
                            <polygon id="Fill-22" fill="#2D2D2E" points="62 108 66 108 66 96 62 96"></polygon>
                            <polygon id="Fill-23" fill="#2D2D2E" points="90 88 94 88 94 76 90 76"></polygon>
                            <polygon id="Fill-24" fill="#2D2D2E" points="90 108 94 108 94 96 90 96"></polygon>
                            <polygon id="Fill-25" fill="#2D2D2E" points="34 68 38 68 38 56 34 56"></polygon>
                            <polygon id="Fill-26" fill="#2D2D2E" points="34 88 38 88 38 76 34 76"></polygon>
                            <g id="Group-56">
                                <path d="M70,20 C70,23.314 67.313,26 64,26 C60.687,26 58,23.314 58,20 C58,16.687 60.687,14 64,14 C67.313,14 70,16.687 70,20" id="Fill-27" fill="#79C9CC"></path>
                               
                                <g id="Clip-30"></g>
                                <polygon id="Fill-29" fill="#2D2D2E" mask="url(#mask-2)" points="34 108 38 108 38 96 34 96"></polygon>
                                <path d="M64,16 C61.794,16 60,17.794 60,20 C60,22.206 61.794,24 64,24 C66.206,24 68,22.206 68,20 C68,17.794 66.206,16 64,16 M64,28 C59.589,28 56,24.411 56,20 C56,15.589 59.589,12 64,12 C68.411,12 72,15.589 72,20 C72,24.411 68.411,28 64,28" id="Fill-31" fill="#2D2D2E" mask="url(#mask-2)"></path>
                                <polygon id="Fill-32" fill="#2D2D2E" mask="url(#mask-2)" points="106 48 110 48 110 44 106 44"></polygon>
                                <polygon id="Fill-33" fill="#2D2D2E" mask="url(#mask-2)" points="118 48 122 48 122 44 118 44"></polygon>
                                <polygon id="Fill-34" fill="#2D2D2E" mask="url(#mask-2)" points="106 60 110 60 110 56 106 56"></polygon>
                                <polygon id="Fill-35" fill="#2D2D2E" mask="url(#mask-2)" points="118 60 122 60 122 56 118 56"></polygon>
                                <polygon id="Fill-36" fill="#2D2D2E" mask="url(#mask-2)" points="106 72 110 72 110 68 106 68"></polygon>
                                <polygon id="Fill-37" fill="#2D2D2E" mask="url(#mask-2)" points="118 72 122 72 122 68 118 68"></polygon>
                                <polygon id="Fill-38" fill="#2D2D2E" mask="url(#mask-2)" points="106 84 110 84 110 80 106 80"></polygon>
                                <polygon id="Fill-39" fill="#2D2D2E" mask="url(#mask-2)" points="118 84 122 84 122 80 118 80"></polygon>
                                <polygon id="Fill-40" fill="#2D2D2E" mask="url(#mask-2)" points="106 96 110 96 110 92 106 92"></polygon>
                                <polygon id="Fill-41" fill="#2D2D2E" mask="url(#mask-2)" points="118 96 122 96 122 92 118 92"></polygon>
                                <polygon id="Fill-42" fill="#2D2D2E" mask="url(#mask-2)" points="106 108 110 108 110 104 106 104"></polygon>
                                <polygon id="Fill-43" fill="#2D2D2E" mask="url(#mask-2)" points="118 108 122 108 122 104 118 104"></polygon>
                                <polygon id="Fill-44" fill="#2D2D2E" mask="url(#mask-2)" points="6 48 10 48 10 44 6 44"></polygon>
                                <polygon id="Fill-45" fill="#2D2D2E" mask="url(#mask-2)" points="18 48 22 48 22 44 18 44"></polygon>
                                <polygon id="Fill-46" fill="#2D2D2E" mask="url(#mask-2)" points="6 60 10 60 10 56 6 56"></polygon>
                                <polygon id="Fill-47" fill="#2D2D2E" mask="url(#mask-2)" points="18 60 22 60 22 56 18 56"></polygon>
                                <polygon id="Fill-48" fill="#2D2D2E" mask="url(#mask-2)" points="6 72 10 72 10 68 6 68"></polygon>
                                <polygon id="Fill-49" fill="#2D2D2E" mask="url(#mask-2)" points="18 72 22 72 22 68 18 68"></polygon>
                                <polygon id="Fill-50" fill="#2D2D2E" mask="url(#mask-2)" points="6 84 10 84 10 80 6 80"></polygon>
                                <polygon id="Fill-51" fill="#2D2D2E" mask="url(#mask-2)" points="18 84 22 84 22 80 18 80"></polygon>
                                <polygon id="Fill-52" fill="#2D2D2E" mask="url(#mask-2)" points="6 96 10 96 10 92 6 92"></polygon>
                                <polygon id="Fill-53" fill="#2D2D2E" mask="url(#mask-2)" points="18 96 22 96 22 92 18 92"></polygon>
                                <polygon id="Fill-54" fill="#2D2D2E" mask="url(#mask-2)" points="6 108 10 108 10 104 6 104"></polygon>
                                <polygon id="Fill-55" fill="#2D2D2E" mask="url(#mask-2)" points="18 108 22 108 22 104 18 104"></polygon>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
    )    
}


const House = ()=>{
    return(
    <svg width="128px" height="128px" viewBox="0 0 128 128" version="1.1" >
   
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="ISF_Desktop" transform="translate(-363.000000, -3251.000000)">
            <g id="Draining-Super" transform="translate(200.000000, 2845.000000)">
                <g id="Projects-Include" transform="translate(0.000000, 338.000000)">
                    <g id="House" transform="translate(163.000000, 68.000000)">
                        <g id="Group-35">
                            <polygon id="Fill-1" fill="#00A8E9" points="28 26 40 26 40 0 28 0"></polygon>
                            <polygon id="Fill-2" fill="#FFFFFF" points="8.0001 57.9998 8.0001 127.9998 96.0001 127.9998 96.0001 57.9998 52.0001 13.9998"></polygon>
                            <polygon id="Fill-3" fill="#00A8E9" points="2 62 4 62 52 14 100 62 102 62 102 54 52 4 2 54"></polygon>
                            <polygon id="Fill-4" fill="#EFC72E" points="36 124 64 124 64 80 36 80"></polygon>
                            <g id="Group-34">
                                <path d="M126,80 C126,92.15 116.15,102 104,102 C91.85,102 82,92.15 82,80 C82,67.85 91.85,58 104,58 C116.15,58 126,67.85 126,80" id="Fill-6" fill="#79C9CC"></path>
                                <path d="M106,80 C106,92.15 96.15,102 84,102 C71.85,102 62,92.15 62,80 C62,67.85 71.85,58 84,58 C96.15,58 106,67.85 106,80" id="Fill-8" fill="#79C9CC"></path>
                                <path d="M112,60 C112,69.941 103.941,78 94,78 C84.059,78 76,69.941 76,60 C76,50.059 84.059,42 94,42 C103.941,42 112,50.059 112,60" id="Fill-10" fill="#79C9CC"></path>
                                <path d="M104,104 C96.815,104 90.067,100.819 85.487,95.273 L88.571,92.727 C92.389,97.349 98.013,100 104,100 C115.028,100 124,91.028 124,80 C124,71.698 119.004,64.383 111.272,61.363 L112.728,57.637 C122.005,61.261 128,70.038 128,80 C128,93.233 117.233,104 104,104" id="Fill-12" fill="#2D2D2E"></path>
                                <path d="M111.9199,68.8906 L108.3379,67.1116 C109.4409,64.8906 109.9999,62.4976 109.9999,59.9996 C109.9999,51.1776 102.8219,43.9996 93.9999,43.9996 C85.1779,43.9996 77.9999,51.1776 77.9999,59.9996 L73.9999,59.9996 C73.9999,48.9716 82.9719,39.9996 93.9999,39.9996 C105.0279,39.9996 113.9999,48.9716 113.9999,59.9996 C113.9999,63.1206 113.2999,66.1126 111.9199,68.8906" id="Fill-14" fill="#2D2D2E"></path>
                                <path d="M84,104 C70.767,104 60,93.233 60,80 C60,66.767 70.767,56 84,56 C85.467,56 86.934,56.133 88.361,56.396 L87.639,60.329 C86.449,60.11 85.225,60 84,60 C72.972,60 64,68.972 64,80 C64,91.028 72.972,100 84,100 C87.202,100 90.261,99.267 93.09,97.82 L94.91,101.383 C91.56,103.095 87.787,104 84,104" id="Fill-16" fill="#2D2D2E"></path>
                              
                                <g id="Clip-19"></g>
                                <polygon id="Fill-18" fill="#2D2D2E" mask="url(#mask-2)" points="92 126 96 126 96 100 92 100"></polygon>
                                <polygon id="Fill-20" fill="#2D2D2E" mask="url(#mask-2)" points="95.4141 119.4141 92.5861 116.5861 100.5861 108.5861 103.4141 111.4141"></polygon>
                                <path d="M60,44 C60,48.418 56.418,52 52,52 C47.582,52 44,48.418 44,44 C44,39.582 47.582,36 52,36 C56.418,36 60,39.582 60,44" id="Fill-21" fill="#E8E6E4" mask="url(#mask-2)"></path>
                                <path d="M52,38 C48.691,38 46,40.691 46,44 C46,47.309 48.691,50 52,50 C55.309,50 58,47.309 58,44 C58,40.691 55.309,38 52,38 M52,54 C46.486,54 42,49.514 42,44 C42,38.486 46.486,34 52,34 C57.514,34 62,38.486 62,44 C62,49.514 57.514,54 52,54" id="Fill-22" fill="#2D2D2E" mask="url(#mask-2)"></path>
                                <polygon id="Fill-23" fill="#2D2D2E" mask="url(#mask-2)" points="56 106 60 106 60 102 56 102"></polygon>
                                <path d="M14,120 C14,116.687 11.313,114 8,114 C4.687,114 2,116.687 2,120 L2,128 L14,128 L14,120 Z" id="Fill-24" fill="#79C9CC" mask="url(#mask-2)"></path>
                                <path d="M16,128 L12,128 L12,120 C12,117.794 10.206,116 8,116 C5.794,116 4,117.794 4,120 L4,128 L0,128 L0,120 C0,115.589 3.589,112 8,112 C12.411,112 16,115.589 16,120 L16,128 Z" id="Fill-25" fill="#2D2D2E" mask="url(#mask-2)"></path>
                                <path d="M26,120 C26,116.687 23.313,114 20,114 C16.687,114 14,116.687 14,120 L14,128 L26,128 L26,120 Z" id="Fill-26" fill="#79C9CC" mask="url(#mask-2)"></path>
                                <path d="M28,128 L24,128 L24,120 C24,117.794 22.206,116 20,116 C17.794,116 16,117.794 16,120 L16,128 L12,128 L12,120 C12,115.589 15.589,112 20,112 C24.411,112 28,115.589 28,120 L28,128 Z" id="Fill-27" fill="#2D2D2E" mask="url(#mask-2)"></path>
                                <polygon id="Fill-28" fill="#2D2D2E" mask="url(#mask-2)" points="108 126 112 126 112 120 108 120"></polygon>
                                <polygon id="Fill-29" fill="#2D2D2E" mask="url(#mask-2)" points="84 126 88 126 88 120 84 120"></polygon>
                                <polygon id="Fill-30" fill="#2D2D2E" mask="url(#mask-2)" points="116 126 120 126 120 116 116 116"></polygon>
                                <polygon id="Fill-31" fill="#2D2D2E" mask="url(#mask-2)" points="72 128 128 128 128 124 72 124"></polygon>
                                <polygon id="Fill-32" fill="#2D2D2E" mask="url(#mask-2)" points="32 128 68 128 68 124 32 124"></polygon>
                                <polygon id="Fill-33" fill="#2D2D2E" mask="url(#mask-2)" points="2 128 26 128 26 124 2 124"></polygon>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>)
}

const LiteRail = ()=>{
    return(
        <svg width="128px" height="128px" viewBox="0 0 128 128" version="1.1" >
    
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="ISF_Desktop" transform="translate(-521.000000, -3251.000000)">
            <g id="Draining-Super" transform="translate(200.000000, 2845.000000)">
                <g id="Projects-Include" transform="translate(0.000000, 338.000000)">
                    <g id="LiteRail" transform="translate(321.000000, 68.000000)">
                        <g id="Group-35">
                            <polygon id="Fill-1" fill="#2D2D2E" points="0 128 128 128 128 124 0 124"></polygon>
                            <polygon id="Fill-2" fill="#A8A7A5" points="30 128 38 128 38 124 30 124"></polygon>
                            <polygon id="Fill-3" fill="#A8A7A5" points="90 128 98 128 98 124 90 124"></polygon>
                            <g id="Group-34">
                                <path d="M100,124 L28,124 C24.687,124 22,121.313 22,118 L22,38 C22,30.268 28.268,24 36,24 L92,24 C99.732,24 106,30.268 106,38 L106,118 C106,121.313 103.313,124 100,124" id="Fill-4" fill="#EFC72E"></path>
                                <path d="M40,112 C40,115.313 37.313,118 34,118 C30.687,118 28,115.313 28,112 C28,108.687 30.687,106 34,106 C37.313,106 40,108.687 40,112" id="Fill-6" fill="#FFFFFF"></path>
                                <path d="M100,112 C100,115.313 97.313,118 94,118 C90.687,118 88,115.313 88,112 C88,108.687 90.687,106 94,106 C97.313,106 100,108.687 100,112" id="Fill-8" fill="#FFFFFF"></path>
                                <path d="M70,24 L66,24 L66,12 L75.66,12 C75.834,11.799 76.064,11.43 76.174,11.184 L79.765,4 L48.236,4 L51.789,11.105 C51.945,11.445 52.175,11.807 52.34,12 L62,12 L62,24 L58,24 L58,16 L52,16 C49.771,16 48.509,13.563 48.174,12.816 L44,4.472 L44,4 C44,1.794 45.794,0 48,0 L80,0 C82.206,0 84,1.794 84,4 L84,4.472 L79.789,12.895 C79.491,13.563 78.229,16 76,16 L70,16 L70,24 Z" id="Fill-10" fill="#2D2D2E"></path>
                                <path d="M34,108 C31.794,108 30,109.794 30,112 C30,114.206 31.794,116 34,116 C36.206,116 38,114.206 38,112 C38,109.794 36.206,108 34,108 M34,120 C29.589,120 26,116.411 26,112 C26,107.589 29.589,104 34,104 C38.411,104 42,107.589 42,112 C42,116.411 38.411,120 34,120" id="Fill-12" fill="#2D2D2E"></path>
                                <path d="M94,108 C91.794,108 90,109.794 90,112 C90,114.206 91.794,116 94,116 C96.206,116 98,114.206 98,112 C98,109.794 96.206,108 94,108 M94,120 C89.589,120 86,116.411 86,112 C86,107.589 89.589,104 94,104 C98.411,104 102,107.589 102,112 C102,116.411 98.411,120 94,120" id="Fill-14" fill="#2D2D2E"></path>
                              
                                <g id="Clip-17"></g>
                                <polygon id="Fill-16" fill="#2D2D2E" mask="url(#mask-2)" points="46 116 50 116 50 108 46 108"></polygon>
                                <polygon id="Fill-18" fill="#2D2D2E" mask="url(#mask-2)" points="54 116 58 116 58 108 54 108"></polygon>
                                <polygon id="Fill-19" fill="#2D2D2E" mask="url(#mask-2)" points="62 116 66 116 66 108 62 108"></polygon>
                                <path d="M104,46 C104,41.582 100.418,38 96,38 L32,38 C27.582,38 24,41.582 24,46 L24,66 C24,71.595 25.443,76.85 27.968,81.426 C30.111,78.16 33.801,76 38,76 L90,76 C94.199,76 97.889,78.16 100.032,81.426 C102.557,76.85 104,71.595 104,66 L104,46 Z" id="Fill-20" fill="#79C9CC" mask="url(#mask-2)"></path>
                                <path d="M90,76 L38,76 C33.801,76 30.111,78.16 27.968,81.426 C33.415,91.304 43.922,98 56,98 L72,98 C84.078,98 94.585,91.304 100.032,81.426 C97.889,78.16 94.199,76 90,76" id="Fill-21" fill="#595857" mask="url(#mask-2)"></path>
                                <polygon id="Fill-22" fill="#2D2D2E" mask="url(#mask-2)" points="70 116 74 116 74 108 70 108"></polygon>
                                <path d="M80,38 L80,40 C80,43.313 77.313,46 74,46 L54,46 C50.687,46 48,43.313 48,40 L48,38 L80,38 Z" id="Fill-23" fill="#FFFFFF" mask="url(#mask-2)"></path>
                                <polygon id="Fill-24" fill="#2D2D2E" mask="url(#mask-2)" points="78 116 82 116 82 108 78 108"></polygon>
                                <path d="M32,40 C28.691,40 26,42.691 26,46 L26,66 C26,82.542 39.458,96 56,96 L72,96 C88.542,96 102,82.542 102,66 L102,46 C102,42.691 99.309,40 96,40 L32,40 Z M72,100 L56,100 C37.252,100 22,84.748 22,66 L22,46 C22,40.486 26.486,36 32,36 L96,36 C101.514,36 106,40.486 106,46 L106,66 C106,84.748 90.748,100 72,100 L72,100 Z" id="Fill-25" fill="#2D2D2E" mask="url(#mask-2)"></path>
                                <polygon id="Fill-26" fill="#2D2D2E" mask="url(#mask-2)" points="62 32 66 32 66 28 62 28"></polygon>
                                <polygon id="Fill-27" fill="#2D2D2E" mask="url(#mask-2)" points="54 32 58 32 58 28 54 28"></polygon>
                                <polygon id="Fill-28" fill="#2D2D2E" mask="url(#mask-2)" points="70 32 74 32 74 28 70 28"></polygon>
                                <path d="M74,48 L54,48 C49.589,48 46,44.411 46,40 L46,38 L50,38 L50,40 C50,42.206 51.794,44 54,44 L74,44 C76.206,44 78,42.206 78,40 L78,38 L82,38 L82,40 C82,44.411 78.411,48 74,48" id="Fill-29" fill="#2D2D2E" mask="url(#mask-2)"></path>
                                <polygon id="Fill-30" fill="#2D2D2E" mask="url(#mask-2)" points="104 60 110 60 110 56 104 56"></polygon>
                                <path d="M112,76 L116,76 C117.104,76 118,75.104 118,74 L118,58 C118,56.896 117.104,56 116,56 L110,56 L110,74 C110,75.104 110.896,76 112,76" id="Fill-31" fill="#EFC72E" mask="url(#mask-2)"></path>
                                <polygon id="Fill-32" fill="#2D2D2E" mask="url(#mask-2)" points="18 60 24 60 24 56 18 56"></polygon>
                                <path d="M16,76 L12,76 C10.896,76 10,75.104 10,74 L10,58 C10,56.896 10.896,56 12,56 L18,56 L18,74 C18,75.104 17.104,76 16,76" id="Fill-33" fill="#EFC72E" mask="url(#mask-2)"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
    )
}

const PowerGrid = ()=>{
    return(
        <svg width="128px" height="128px" viewBox="0 0 128 128" version="1.1" >
 
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="ISF_Desktop" transform="translate(-684.000000, -3251.000000)">
            <g id="Draining-Super" transform="translate(200.000000, 2845.000000)">
                <g id="Projects-Include" transform="translate(0.000000, 338.000000)">
                    <g id="PowerGrid" transform="translate(484.000000, 68.000000)">
                        <g id="Group-23">
                            <polygon id="Fill-1" fill="#79C9CC" points="114 102.001692 106 110.001077 84.002 110.001077 68.002 104.001538 52 110.001077 20 102.001692 0 106.001385 0 124 128 124 128 98"></polygon>
                            <polygon id="Fill-2" fill="#FFFFFF" points="64 86 104 126 76 72 52 72 24 126"></polygon>
                            <polygon id="Fill-3" fill="#FFFFFF" points="76 72 76 20 70 2 58 2 52 20 52 72"></polygon>
                            <polygon id="Fill-4" fill="#2D2D2E" points="44 128 128 128 128 124 44 124"></polygon>
                            <polygon id="Fill-5" fill="#2D2D2E" points="0 128 40 128 40 124 0 124"></polygon>
                            <polygon id="Fill-6" fill="#EFC72E" points="30 78 34 78 34 72 30 72"></polygon>
                            <polygon id="Fill-7" fill="#EFC72E" points="38 78 42 78 42 72 38 72"></polygon>
                            <polygon id="Fill-8" fill="#EFC72E" points="94 78 98 78 98 72 94 72"></polygon>
                            <polygon id="Fill-9" fill="#EFC72E" points="86 78 90 78 90 72 86 72"></polygon>
                            <polygon id="Fill-10" fill="#EFC72E" points="102 74 82 74 82 70 97.172 70 75.172 48 52.828 48 30.828 70 46 70 46 74 26 74 26 69.172 51.172 44 76.828 44 102 69.172"></polygon>
                            <polygon id="Fill-11" fill="#EFC72E" points="30 52 34 52 34 46 30 46"></polygon>
                            <polygon id="Fill-12" fill="#EFC72E" points="94 52 98 52 98 46 94 46"></polygon>
                            <polygon id="Fill-13" fill="#EFC72E" points="102 48 86 48 86 44 97.172 44 75.172 22 52.828 22 30.828 44 42 44 42 48 26 48 26 43.172 51.172 18 76.828 18 102 43.172"></polygon>
                            <polygon id="Fill-14" fill="#2D2D2E" points="50 74.8388779 102.163128 127 105 124.163128 52.8368717 72"></polygon>
                            <polygon id="Fill-15" fill="#2D2D2E" points="23 124.163128 25.8368717 127 78 74.8388779 75.1631283 72"></polygon>
                            <polygon id="Fill-16" fill="#2D2D2E" points="50.4749166 23.8191171 73.9837917 47.1595727 73.9837917 47.5004984 50.2560333 71.0602629 22 125.163786 25.5643848 127 53.5352673 73.4427558 78 49.1532906 78 45.5067805 53.3143759 21"></polygon>
                            <polygon id="Fill-17" fill="#2D2D2E" points="50 45.5072415 50 49.1538201 74.4647327 73.4437422 102.435615 127 106 125.165745 77.8885502 71.334349 54.0162083 47.5009969 54.0162083 47.1600647 77.5250834 23.8191701 74.6856241 21"></polygon>
                            <polygon id="Fill-18" fill="#2D2D2E" points="52 74 76 74 76 70 52 70"></polygon>
                            <polygon id="Fill-19" fill="#2D2D2E" points="56.558 0 50 19.676 50 72 54 72 54 20.324 59.442 4 68.558 4 74 20.324 74 72 78 72 78 19.676 71.442 0"></polygon>
                            <polygon id="Fill-20" fill="#2D2D2E" points="62 120 66 120 66 116 62 116"></polygon>
                            <polygon id="Fill-21" fill="#2D2D2E" points="70 120 74 120 74 116 70 116"></polygon>
                            <polygon id="Fill-22" fill="#2D2D2E" points="54 120 58 120 58 116 54 116"></polygon>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
    )
}