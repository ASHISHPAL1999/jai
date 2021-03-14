import Axios from 'axios';

import React, { useEffect } from 'react';


const About = ()=>{
    useEffect(()=>{
        Axios.get('http://localhost:4000/getusers').then((data)=>{console.log(data)}).catch(err=>console.log(err))
    })
return (<div><h1>i am about</h1></div>)
}
export default About;