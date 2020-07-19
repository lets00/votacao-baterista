import React from 'react'

export default (props) => {
    return (
        <div style={styles.positionStyle}>
            {props.children}
        </div>
    )
}

const styles = {
    positionStyle: {
        marginRight: "10px",
        fontSize: "1.5rem",
        fontWeight: "bold"
    }
}