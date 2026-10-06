import {useState,useRef} from 'react';

const FocusNote=()=>{
    const [notes, setNotes]=useState([])
    const inputRef=useRef(null); //Reference to input Dom node

    const handleAddNote=()=>{
        const text=inputRef.current.value.trim();
        if(!text)
            return
    
    setNotes((prev)=>[...prev,text]);
    inputRef.current.value='';//clear value directly
    inputRef.current.focus(); //focus input element directly
};



    return (
    <div style={{padding:'20px'}}><h1>Focus Note coming soon...</h1>
    <h2>Quick Notes</h2>
    <div style={{display:'flex',gap:'8px',marginBottom:'10px'}}>
        <input ref={inputRef} type='text' placeholder='Type a note'/>
        <button onClick={handleAddNote}>Add and Re-focus</button>

        {/* <button onClick={()=>alert("clicked")}>Add and Re-focus</button> */}
        </div>
        <ul>
            map function should go by taking in consideration of displaying Notes
            {notes.map((note, index)=>(
                <li key={index}>{note}</li>
            ))}
        </ul>
    {/* </div> */}

    </div>
    )
}
export default FocusNote