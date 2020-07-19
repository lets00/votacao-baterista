import React from 'react'

export default props => {
  return (
    <div className="card" style={styles.cardExtra}>
      {props.children}
    </div>
  )
}

const styles = {
  cardExtra: {
    padding: "10px",
    margin: "10px"
  }
}