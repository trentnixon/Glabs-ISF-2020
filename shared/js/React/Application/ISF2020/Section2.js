import React, {useEffect, useState, useRef} from 'react';

// Actions
import {GA} from "../../actions/ga"

//import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
//import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// Structure
import {Container} from "../../Structure/Structure";
import {H1, H2, P} from "../../Typography/Type"

const Section2 = ()=>{
    const [Value, setValue] = useState(null)
    const [SelectedYear, setSelected] = useState()
    const [TagLine, setTagLine] = useState()
    const [AgedCopy, setAgedCopy] = useState()
    let Section2 = useRef(null)

    const start = 1950;
    const end = new Date().getFullYear();

    const Content = {
        "Title":"The impact of your choices",
        "Copy":["In a time of crisis, we’re all making important decisions about our super. But can we afford the long-term impacts? We break it down by the numbers."]
       }

    const handleChange = (event)=>{

            let Age = (end - event.target.value)
            console.log(event.target.value , end ,Age)

            GA('Select Input','Age Selected',event.target.value)
            setValue(Age);
            setSelected(event.target.value);

            if(Age > 55 ){
                setTagLine("You’re probably thinking seriously about your retirement");
                setAgedCopy("At least  590,000 Australians have already wiped out their super savings through the government’s early access scheme during Covid-19.")
            }
            else if(Age > 45 && Age < 54){
                setTagLine("You’re probably starting to think a bit more about retirement");
                setAgedCopy("At least  590,000 Australians have already wiped out their super savings through the government’s early access scheme during Covid-19.")
            }
            else if(Age > 35 && Age < 44){
                setTagLine("You’re probably not thinking that much about your retirement");
                setAgedCopy("At least 590,000Australians have already wiped out their super savings through the government’s early access scheme during Covid-19.")
            }
            else{
                setTagLine("Your retirement probably seems a long way off");
                setAgedCopy("At least 590,000 Australians have already wiped out their super savings through the government’s early access scheme during Covid-19. <strong>490,000 of them are under 35.</strong>")
            }
    }

    const GetDate = ()=>{
        let dates=[]
        for(let year = start ; year <=end; year++){ dates.push(year) } 
        return dates.reverse();
    }


    useEffect(()=>{},[])
    
    return(

        <Container>
            <section className="Section Section2"   ref={el=>{ Section2 = el}}> 
                <H1 Copy={Content.Title} />

                <FormControl variant="outlined" className="SelectAge">
                    <InputLabel id="demo-simple-select-outlined-label">When were you born?</InputLabel>
                    <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={SelectedYear}
                            onChange={handleChange}
                            label="When were you born?"
                            IconComponent = {() => (
                                <Line />
                              )} 
                    >
                            { GetDate().map((year, i)=>{
                                return <MenuItem key={i} value={year}>{year}</MenuItem>
                            }) }

                    </Select>
                </FormControl>

                            
                <AgeSelected Value={Value}/>
                <P Copy={[TagLine]}/>
                <P Copy={[AgedCopy]}/>
                

            </section>
        </Container>
    )
}
export default Section2;    




const AgeSelected = (props)=>{

    if(props.Value == null) return null;


    return(
        <H2 Copy={`So, you’re about ${props.Value}, right?`} />
    )
}

const Line = ()=>{
    return(
        <svg width="20px" height="11px" viewBox="0 0 20 11" version="1.1" >
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                <g id="ISF_Desktop" transform="translate(-468.000000, -924.000000)" stroke="#144446" strokeWidth="3">
                    <g id="001" transform="translate(203.000000, 832.000000)">
                        <g id="Group-4" transform="translate(7.000000, 75.000000)">
                            <g id="Line" transform="translate(260.000000, 18.500000)">
                                <polyline points="0 0 8 8 16 0"></polyline>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}