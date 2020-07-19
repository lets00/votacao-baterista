import React from 'react'
import Position from './Position'
import Picture from './Picture'
import Info from './Info'
import Name from './Name'
import Votes from './Votes'
import Percentage from './Percentage'
import Popularity from './Popularity'

export default (props) => {
    return (
        <div style={styles.flexRow}>
            <Position>{props.position}</Position>
            <Picture imageSource={`${props.candidate.id}.jpg`} description={props.candidate.name} />
            <Info>
                <Name>{props.candidate.name}</Name>
                <Votes>{props.candidate.votes}</Votes>
                <Percentage>{props.candidate.percentage}</Percentage>
                <Popularity value={props.candidate.popularity} />
            </Info>
        </div>
    )
}

const styles = {
    flexRow: {
        display: "flex",
        // flexDirection: "row",
        alignItems: "center",
        justifyContent:"flex-start"
    }
}  