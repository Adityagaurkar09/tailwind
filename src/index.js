import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ComponentCard from './component/ComponentCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <div className='flex flex-wrap'>
    <ComponentCard 
    title={"RTC"} 
    tagline={"lesrn the code"} 
    img={"./wedf/edc"}/>

<ComponentCard 
    title={"RTC"} 
    tagline={"lesrn the code"} 
    img={"./wedf/edc"}/>

<ComponentCard 
    title={"RTC"} 
    tagline={"lesrn the code"} 
    img={"./wedf/edc"}/>

<ComponentCard 
    title={"RTC"} 
    tagline={"lesrn the code"} 
    img={"./wedf/edc"}/>

<ComponentCard 
    title={"RTC"} 
    tagline={"lesrn the code"} 
    img={"./wedf/edc"}/>
    </div>
    </>
);


