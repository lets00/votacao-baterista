import React from 'react'

const STARS = {
    full:'★',
    empty: '☆'
}

const MAX_STARS = 10

export default props => {
    const fullStars = STARS.full.repeat(props.value)
    const emptyStars = STARS.empty.repeat(MAX_STARS - props.value)
    return (
        <div style={{fontSize: '1.5rem', color:'gold'}}>
            {fullStars}{emptyStars}
        </div>
    )
}


