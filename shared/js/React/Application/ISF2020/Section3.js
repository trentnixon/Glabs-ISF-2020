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


const Section3 = ()=>{

    const Content = {
        "Title":"If you withdraw $10,000 now, the impact on your retirement could be significant",
        "Title2":"Industry funds have paid",
        "FootNote":"* as at July 2020",
        "Copy1":["A 25-year-old taking out $10,000 now could have $49,000 less in retirement, a 35-year-old could lose up to $34,000 and a 45-year-old up to $23,000."],
        "Copy2":["The government initially estimated 1.65 million Australians would take out a total of $29bn from super. Australia-wide, about 1 in 5 workers have accessed their super early.",
        "Already, <strong>2.5 million Australians</strong> have taken out <strong>at least $29bn</strong> and it appears likely that demand will far surpass forecasts - the final figure may be more than $42bn."]
       }


    let Section3 = useRef(null)

    

    let AnimateCircles = useRef(null)
    let circle1  = useRef(null)
    let circle2  = useRef(null)
    let circle3  = useRef(null)


    let AnimateBoxes = useRef(null)
    let Box1 = useRef(null)
    let Box2 = useRef(null)
    
    const EaseThis ="power2.out";
    useEffect(()=>{

       
         /** Animation 1 */
        let tl = gsap.timeline({ paused: true,
            scrollTrigger: {
                trigger: AnimateCircles,
                id:"Funds Paid",
                toggleActions:"restart pause reverse pause",
                start: "top 70%",
                end: "bottom center",
                scrub: 1,
                markers: false
            }
         }
        );
        
        tl.from( circle1, {   height:0,   duration:2,ease:EaseThis},"Circles" )
        .from( circle2, {    height:0,  duration:2,ease: EaseThis  },"Circles+=.3")
        .from( circle3, {     height:0,  duration:2,ease:EaseThis  },"Circles+=.6")

         /** End animation 1 */


        /** Animation 2 */

        ScrollTrigger.matchMedia({
            "(min-width: 768px)": () => {
                let Boxtl = gsap.timeline({ paused: true,
                    scrollTrigger: {
                        trigger: AnimateBoxes,
                        id:"Section_Funds_Have_paid",
                        start: "top 45%",
                        end: "center center",
                        scrub: 1,
                        markers: false
                    }
                 })
                 Boxtl.fromTo(Box1, {x:50,  scale:.9} , {x:-20, y:-20, opacity:0.3, scale:.7, ease:EaseThis }, "Boxes")
                 .fromTo(Box2, {x:-40, y:40, opacity:0.3, scale:0.7} , {x:20, y:20, opacity:1, scale:.9, ease:EaseThis }, "Boxes")
                 .to(".Box1 svg", {scale:0, ease:EaseThis }, "Boxes")
                 .fromTo(".Box2 svg", {scale:0},{scale:1, ease:EaseThis }, "Boxes")
                 .to(Box1, {x:40, y:40, scale:0.7, ease:EaseThis }, "BoxesBack")
                 .to(Box2, {x:-50, y:0, scale:.9, ease:EaseThis }, "BoxesBack")
              },
              "(max-width: 767px)": () => {
                let BoxSm = gsap.timeline({ paused: true,
                    scrollTrigger: {
                        trigger: AnimateBoxes,
                        id:"Section_Funds_Have_paid",
                        start: "top 45%", 
                        end: "bottom 55%",
                        scrub: 1,
                        markers: false
                    }
                 })
                 BoxSm
                 .fromTo(Box1,              { y:50, x:0,  scale:1} , {y:-50, x:0, opacity:0.3, scale:.5, ease:EaseThis }, "Boxes")
                 .fromTo(Box2,              { y:50, x:0, opacity:0.3, scale:0.7} , {y:-100, x:0, opacity:1, scale:1, ease:EaseThis }, "Boxes")
                 .to(".Box1 svg", {scale:0, ease:EaseThis }, "Boxes")
                 .fromTo(".Box2 svg", {scale:0},{scale:1, ease:EaseThis }, "Boxes")
              }
           
        }) 
         /** End Animation 2 */
             
    },[])
    
    return(

        <Container>
            <section className="Section Section3"   ref={el=>{ Section3 = el}}>
 
                <H2 Copy={Content.Title} />
                <P Copy={Content.Copy1} />
         

                <div className="Circles" ref={el=>{ AnimateCircles = el}}>
                    <div className="Circle Circle1" ref={el=>{ circle1 = el}}>   
                            <H1 Copy="25" />
                            <P Copy={["$49,000"]} />
                     </div>
                    <div className="Circle Circle2" ref={el=>{ circle2 = el}}>  
                            <H1 Copy="35" />
                            <P Copy={["$34,000"]} />
                    </div>
                    <div className="Circle Circle3" ref={el=>{ circle3 = el}}>  
                            <H1 Copy="45" />
                            <P Copy={["$23,000"]} />
                    </div>
                </div> 


                <P Copy={Content.Copy2} />


                <H1 Copy={Content.Title2} />

                <div className="Boxes" ref={el=>{ AnimateBoxes = el}}>
                    <div className="Box Box1" ref={el=>{ Box1 = el}}> 
                        <div className="Inner">
                                <H2 Copy="$10.3 billion*" /> 
                                <P Copy={["from Super"]} />
                        </div>
                        <BowlingBall />
                    </div>
                    <div className="Box Box2" ref={el=>{ Box2 = el}}>
                        <div className="Inner">
                            <H2 Copy="96%" />  
                            <P Copy={["within 5 business days of request"]} />
                        </div>
                        <Clock />
                    </div>
                </div>

                <p className="Footnote"><small>{Content.FootNote}</small></p>
            </section>
        </Container>
    )
}
export default Section3;    



const BowlingBall = ()=>{
    return(
        <svg width="124px" height="124px" viewBox="0 0 124 124" version="1.1" >


    <defs>
        <polygon id="path-1" points="0 124 124 124 124 0 0 0"></polygon>
    </defs>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="ISF_Desktop" transform="translate(-321.000000, -2215.000000)">
            <g id="What-are-unlisted-assets" transform="translate(167.000000, 1832.000000)">
                <g id="HoldingBowlingBall" transform="translate(154.000000, 383.000000)">
                    <g id="Group-25">
                        <path d="M118,54.5 C118,84.5995714 93.5995714,109 63.5,109 C33.4004286,109 9,84.5995714 9,54.5 C9,24.4004286 33.4004286,0 63.5,0 C93.5995714,0 118,24.4004286 118,54.5" id="Fill-1" fill="#79C9CC"></path>
                        <path d="M87,65.5 C87,70.7478 82.7478,75 77.5,75 C72.2522,75 68,70.7478 68,65.5 C68,60.2541 72.2522,56 77.5,56 C82.7478,56 87,60.2541 87,65.5" id="Fill-3" fill="#EFC72E"></path>
                        <path d="M60,50.5 C60,55.7478 55.7478,60 50.5,60 C45.2522,60 41,55.7478 41,50.5 C41,45.2541 45.2522,41 50.5,41 C55.7478,41 60,45.2541 60,50.5" id="Fill-5" fill="#EFC72E"></path>
                       
                        <g id="Clip-8"></g>
                        <polygon id="Fill-7" fill="#FFFFFF" mask="url(#mask-2)" points="72 39 76 39 76 23 72 23"></polygon>
                        <polygon id="Fill-9" fill="#FFFFFF" mask="url(#mask-2)" points="72 47 76 47 76 43 72 43"></polygon>
                        <polygon id="Fill-10" fill="#FFFFFF" mask="url(#mask-2)" points="79 50 83 50 83 46 79 46"></polygon>
                        <polygon id="Fill-11" fill="#FFFFFF" mask="url(#mask-2)" points="79 43 83 43 83 39 79 39"></polygon>
                        <polygon id="Fill-12" fill="#FFFFFF" mask="url(#mask-2)" points="79 35 83 35 83 31 79 31"></polygon>
                        <polygon id="Fill-13" fill="#FFFFFF" mask="url(#mask-2)" points="52 27 56 27 56 11 52 11"></polygon>
                        <polygon id="Fill-14" fill="#FFFFFF" mask="url(#mask-2)" points="52 35 56 35 56 31 52 31"></polygon>
                        <polygon id="Fill-15" fill="#FFFFFF" mask="url(#mask-2)" points="45 31 49 31 49 27 45 27"></polygon>
                        <polygon id="Fill-16" fill="#FFFFFF" mask="url(#mask-2)" points="45 23 49 23 49 19 45 19"></polygon>
                        <polygon id="Fill-17" fill="#FFFFFF" mask="url(#mask-2)" points="45 16 49 16 49 12 45 12"></polygon>
                        <path d="M116.176471,86.8181818 L93.0085294,94.1086364 L84.9875882,97.1303636 C86.2454706,96.0573182 87.0588235,94.4721818 87.0588235,92.6818182 C87.0588235,89.4431364 84.4498824,86.8181818 81.2352941,86.8181818 L63.7647059,86.8181818 L42.4117647,79 L23,79 L23,110.272727 L34.6470588,110.272727 L67.6470588,122 L71.5294118,122 L120.058824,96.5909091 C120.058824,96.5909091 122,94.6305 122,92.6818182 C122,89.4431364 119.391059,86.8181818 116.176471,86.8181818" id="Fill-18" fill="#FFFFFF" mask="url(#mask-2)"></path>
                        <polygon id="Fill-19" fill="#FFFFFF" mask="url(#mask-2)" points="0 116 19 116 19 73 0 73"></polygon>
                        <path d="M56.0625,105 L52.1875,105 C52.1875,100.745571 55.663375,97.2857143 59.9375,97.2857143 L81.25,97.2857143 C83.3870625,97.2857143 85.125,95.5557857 85.125,93.4285714 C85.125,91.3013571 83.3870625,89.5714286 81.25,89.5714286 L63.4695625,89.5714286 L42.1570625,81.8571429 L27,81.8571429 L27,78 L42.8429375,78 L64.1554375,85.7142857 L81.25,85.7142857 C85.524125,85.7142857 89,89.1741429 89,93.4285714 C89,97.683 85.524125,101.142857 81.25,101.142857 L59.9375,101.142857 C57.8004375,101.142857 56.0625,102.872786 56.0625,105" id="Fill-20" fill="#2D2D2E" mask="url(#mask-2)"></path>
                        <path d="M72.0316154,124 L67.339,124 L34.3197692,112.3 L23,112.3 L23,108.4 L34.9879231,108.4 L68.0071538,120.1 L71.0837692,120.1 L118.922808,95.1244 C119.455,94.5121 120.115385,93.48055 120.115385,92.8 C120.115385,90.73885 118.516865,89.0482 116.498808,88.90975 L93.6300769,96.08575 L92.4685769,92.36125 L116.230769,85 C120.5155,85 124,88.4983 124,92.8 C124,95.47345 121.746923,97.81735 121.490538,98.0767 L121.010788,98.42965 L72.0316154,124 Z" id="Fill-21" fill="#2D2D2E" mask="url(#mask-2)"></path>
                        <polygon id="Fill-22" fill="#2D2D2E" mask="url(#mask-2)" points="12 109 16 109 16 105 12 105"></polygon>
                        <polygon id="Fill-23" fill="#2D2D2E" mask="url(#mask-2)" points="4 109 8 109 8 105 4 105"></polygon>
                        <polygon id="Fill-24" fill="#2D2D2E" mask="url(#mask-2)" points="19 116 23 116 23 73 19 73"></polygon>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
    )
}

const Clock = ()=>{
    return(
        <svg width="109px" height="109px" viewBox="0 0 109 109" version="1.1" >
   
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="ISF_Desktop" transform="translate(-556.000000, -2258.000000)">
            <g id="Clock" transform="translate(556.000000, 2258.000000)">
                <g id="Group-36">
                    <path d="M102,54.5 C102,80.7335714 80.7335714,102 54.5,102 C28.2664286,102 7,80.7335714 7,54.5 C7,28.2664286 28.2664286,7 54.5,7 C80.7335714,7 102,28.2664286 102,54.5" id="Fill-1" fill="#EFC72E"></path>
                    <path d="M54.3003488,109 C24.3587971,109 0,84.4742886 0,54.3275678 C0,37.8660402 7.26436854,22.4390175 19.928228,12 L22.077334,14.6447789 C10.2033749,24.4311443 3.3937718,38.8954196 3.3937718,54.3275678 C3.3937718,82.5897982 26.2304622,105.582973 54.3003488,105.582973 C63.079188,105.582973 71.7341545,103.296128 79.3294158,98.9710257 L81,101.945548 C72.8965214,106.561097 63.6637652,109 54.3003488,109" id="Fill-3" fill="#2D2D2E"></path>
                    <g id="Group-7" transform="translate(28.000000, 0.000000)">
                    
                        <g id="Clip-6"></g>
                        <path d="M60.9731337,96.6160842 L58.8134179,93.9817684 C70.7459968,84.2341193 77.5892179,69.8279175 77.5892179,54.4559702 C77.5892179,26.3055491 54.6397863,3.4033386 26.4313232,3.4033386 C17.7677337,3.4033386 9.20816526,5.60370702 1.67857579,9.76619825 L0.0270284211,6.78982982 C8.05967053,2.3474 17.1905021,-0.000170175439 26.4313232,-0.000170175439 C56.5206916,-0.000170175439 80.9997442,24.428514 80.9997442,54.4559702 C80.9997442,70.8523737 73.7003653,86.2183649 60.9731337,96.6160842" id="Fill-5" fill="#2D2D2E" mask="url(#mask-2)"></path>
                    </g>
                    <polygon id="Fill-8" fill="#2D2D2E" points="24 22 20.5714286 22 20.5714286 13.4285714 12 13.4285714 12 10 24 10"></polygon>
                    <polygon id="Fill-10" fill="#2D2D2E" points="97 99 85 99 85 87 88.4285714 87 88.4285714 95.5714286 97 95.5714286"></polygon>
                    <path d="M99,54.5 C99,79.0768365 79.0768365,99 54.5,99 C29.9231635,99 10,79.0768365 10,54.5 C10,29.9231635 29.9231635,10 54.5,10 C79.0768365,10 99,29.9231635 99,54.5" id="Fill-12" fill="#79C9CC"></path>
                    <path d="M54.5,22 C52.56975,22 51,20.43025 51,18.5 C51,16.56975 52.56975,15 54.5,15 C56.43025,15 58,16.56975 58,18.5 C58,20.43025 56.43025,22 54.5,22 L54.5,22 Z" id="Fill-14" fill="#FFFFFF"></path>
                    <path d="M54.5,94 C52.56975,94 51,92.43025 51,90.5 C51,88.56975 52.56975,87 54.5,87 C56.43025,87 58,88.56975 58,90.5 C58,92.43025 56.43025,94 54.5,94 L54.5,94 Z" id="Fill-16" fill="#FFFFFF"></path>
                    <path d="M90.5,58 C88.56975,58 87,56.43025 87,54.5 C87,52.56975 88.56975,51 90.5,51 C92.43025,51 94,52.56975 94,54.5 C94,56.43025 92.43025,58 90.5,58" id="Fill-18" fill="#FFFFFF"></path>
                    <path d="M18.5,58 C16.56975,58 15,56.43025 15,54.5 C15,52.56975 16.56975,51 18.5,51 C20.43025,51 22,52.56975 22,54.5 C22,56.43025 20.43025,58 18.5,58" id="Fill-20" fill="#FFFFFF"></path>
                    <path d="M80.5001095,32 C79.6036893,32 78.7063937,31.65859 78.0244491,30.9775207 C76.6588089,29.6110052 76.6588089,27.3892138 78.0226982,26.0253245 C79.3883384,24.6588089 81.6118806,24.6579335 82.9757699,26.0244491 C84.34141,27.3892138 84.34141,29.6110052 82.9757699,30.9766453 L82.9748945,30.9775207 C82.2929498,31.65859 81.3956543,32 80.5001095,32" id="Fill-22" fill="#FFFFFF"></path>
                    <path d="M28.4998357,84 C27.6034296,84 26.7070234,83.6585793 26.0242141,82.9757379 C24.6585953,81.6109305 24.6585953,79.3881941 26.0242141,78.0233867 C27.3898328,76.6585793 29.6115895,76.6594547 30.9754574,78.0225113 C32.3410762,79.3881941 32.3410762,81.6109305 30.9780836,82.9748624 L30.9763328,82.9757379 C30.2943988,83.6585793 29.3971173,84 28.4998357,84" id="Fill-24" fill="#FFFFFF"></path>
                    <path d="M80.5002735,84 C79.602992,84 78.7057104,83.65859 78.0237764,82.9757699 L78.022901,82.9748945 C76.659033,81.6110052 76.659033,79.3883383 78.022901,78.024449 C79.3885198,76.6579334 81.6111519,76.6596842 82.9750199,78.0226981 C84.3415141,79.3883383 84.3415141,81.6110052 82.9758953,82.9757699 C82.2939613,83.65859 81.3966797,84 80.5002735,84" id="Fill-26" fill="#FFFFFF"></path>
                    <path d="M28.4997811,32 C27.6033889,32 26.7078722,31.6594388 26.0250735,30.9783163 L26.0241981,30.9774408 C24.6586006,29.6108185 24.6586006,27.3888534 26.0241981,26.0239821 C27.3889201,24.6573597 29.6132682,24.6599862 30.9762395,26.0239821 C32.3409616,27.3888534 32.3409616,29.6108185 30.9779903,30.9756899 C30.2943162,31.6594388 29.3961733,32 28.4997811,32" id="Fill-28" fill="#FFFFFF"></path>
                    <polygon id="Fill-30" fill="#2D2D2E" points="72.5519005 74 53 54.9718426 53 29 56.4626584 29 56.4626584 53.5767027 75 71.6174786"></polygon>
                    <path d="M58,54.5 C58,56.432875 56.432875,58 54.5,58 C52.567125,58 51,56.432875 51,54.5 C51,52.567125 52.567125,51 54.5,51 C56.432875,51 58,52.567125 58,54.5" id="Fill-32" fill="#FFFFFF"></path>
                    <path d="M55,53.3333333 C54.0808333,53.3333333 53.3333333,54.0808333 53.3333333,55 C53.3333333,55.9191667 54.0808333,56.6666667 55,56.6666667 C55.9191667,56.6666667 56.6666667,55.9191667 56.6666667,55 C56.6666667,54.0808333 55.9191667,53.3333333 55,53.3333333 M55,60 C52.2425,60 50,57.7575 50,55 C50,52.2425 52.2425,50 55,50 C57.7575,50 60,52.2425 60,55 C60,57.7575 57.7575,60 55,60" id="Fill-34" fill="#2D2D2E"></path>
                </g>
            </g>
        </g>
    </g>
</svg>
    )
}