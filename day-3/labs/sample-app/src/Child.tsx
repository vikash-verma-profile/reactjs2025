import React from 'react';

interface ChildProps{
    handleClick:()=>void;
}

const Child:React.FC<ChildProps>=({handleClick})=>{
    return (
        <div>
            <button onClick={handleClick}>Click Me(Child)</button>
        </div>
    );
}

export default Child;