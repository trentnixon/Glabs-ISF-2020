import React, {useEffect, useState} from 'react';
import Titles from "./Title";
import ClientHeader from "./HeaderClientLogo";

const Header = (props)=>{
    const [image, setImage] = useState();
    let [BottomMargin, SetMargin ] = useState(0);
    
    const { Header } = props

    const HeaderStyles = {
        backgroundImage: `url(<%= path %>/images/Header4.jpg)`,
        marginBottom:BottomMargin,
        backgroundPosition: 'center'
      };

    useEffect(()=>{
        console.log("Header", Header, props.Meta[0][0].Header)
        let ReturnHeight = Math.floor(document.getElementById('MainTitle').clientHeight*1.2);
        SetMargin(Math.floor(ReturnHeight)) 
        setImage(props.Meta.Header)
    })
    return(
        <div id="Header" style={HeaderStyles}>
            <ClientHeader {...props}/>
            <div className="FlexHeader">
                <div id="BG_Image_Container"  style={HeaderStyles}></div>
                <Titles Title={props.Meta[0][0].Header} SubTitle={props.Meta[0][0].Subheader}/>
            </div>
        </div>  
    )
}
export default Header;