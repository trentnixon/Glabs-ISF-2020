import React  from 'react';

import { Container} from "../Structure/Structure";

const ApplicationFooter = ()=>{
    return(
        <div className="ApplicationFooter">
            <Container>
                <div className="Tail" >
                    <p >
                                Westpac Scholars Trust is investing in the people with ideas 
                                that could change the world. <a href="https://scholars.westpacgroup.com.au/" target="_blank">Apply or nominate someone today </a>
                    </p>
                </div>
                  
            </Container>      
        </div>
    )
}

export default ApplicationFooter;