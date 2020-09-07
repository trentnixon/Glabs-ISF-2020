import React from 'react';

// Structure
import {Container} from "../../Structure/Structure";
import {H1, H2, P} from "../../Typography/Type"

const Section10 = ()=>{

    const Content = {
        "Title":"We can’t afford to mess with Super",
        "FootNote":"Assumption on the early release of super by Industry SuperFunds: (hyperlink copy Industry SuperFunds - https://www.industrysuper.com/assumptions)",
        "Copy":[
            "Early withdrawals and a superannuation freeze will make everyone’s retirement harder. To deliver strong returns to members, super needs to be able to make diverse investments.",
            "To improve the assets we all use ... stimulate economic growth … and grow your nest egg.",
            "If it can’t, the Australian economy will suffer, with fewer jobs created, less direct budget benefit and worsening infrastructure. In a time of crisis, Australia can’t afford that risk."
        ]
       }
    return(
        <Container>
            <section className="Section Section10" >
                <H1 Copy={Content.Title} />
                <P Copy={Content.Copy}/>
                    <p className="Footnote">
                        <small>
                            Assumptions on the early release of super by Industry <a target="_blank" href="https://www.industrysuper.com/assumptions" >SuperFunds</a>
                        </small>
                    </p>
            </section>
        </Container>
    )
}
export default Section10;    