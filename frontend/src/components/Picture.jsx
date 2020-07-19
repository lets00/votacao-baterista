import React from 'react'

export default props => {
    return (
        <div>
            <img style={style.picture} src={props.imageSource} title={props.description} alt={props.description}/>
        </div>
    )
}

const style = {
    picture:{
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        marginRight: "10px"
    }
}