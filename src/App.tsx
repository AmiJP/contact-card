import { useEffect, useState } from "react";


export default function App(){
    const [size, setSize] = useState([window.innerHeight,window.innerWidth])

    useEffect(()=>{
        const updateSize = () => {
            setSize([window.innerHeight,window.innerWidth])
        }
        window.addEventListener("resize", updateSize);
    },[])


    return (
        <div>
            <p>Height: {size[0]}</p>
            <p>weight: {size[1]}</p>
        </div>
    )
}