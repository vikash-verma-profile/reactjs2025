import React from 'react';
import Child from './Child';


const Parent:React.FC=()=>{

    const handleClick=():void=>{
        alert("Button clicked in child");
    }
    return (
        <div>
            <h1>Functions as Props</h1>
            <Child handleClick={handleClick} />
        </div>
    );
}

export default Parent;