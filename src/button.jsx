function Button_final_onclick(){
    return(
        <button>Click Me</button>
    )
}

function Button2(){
    const buttonStyle={
        
        color:color,
        fontSize:fontSize+'px'
    }
    return(<button onClick={handleClick} style={buttonStyle}>Don't Click Me</button>)
}

function Button1(props){
    
    const buttonStyle={
        color:props.color,
        fontSize:props.fontSize +'px',
        
    };

    return (
        <button style={buttonStyle}>{props.text}</button>
    )
}

function Button_final({text='Click Me!', color='blue', fontSize=14}){
    const buttonStyle={
        color: color,
        fontSize:fontSize+'px'
    };
    return(
        <button style={buttonStyle}>{text}</button>
    )


}
function Button({text='Click Me!', color='blue', fontSize=14,handleClick}){
    const buttonStyle={
    color:color,
    fontSize:fontSize+'px'
    };
    return(
        
        <button onClick={handleClick} style={buttonStyle}>
        {text}
        </button>
        );
}

export default Button;
// export default Button1;
// export default (Button,Button2);
// export default Button;