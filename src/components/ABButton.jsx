function ABButton(props) {
    console.log(props);

    return <button
        onClick={props.btnClick}
        style={{
            backgroundColor: "lightgray",
            color: "darkcyan",
            margin: "10px",
            borderRadius: "6px",
            width: "90px",
            height: "30px",
            textAlign:"center",
            
        }}>{props.lable}</button>

}


export default ABButton;