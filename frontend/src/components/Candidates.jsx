import React from 'react'
import FlipMove from 'react-flip-move'
import Card from './Card'
import Candidate from './Candidate'

export default props => {
  return (
    <div>
      <FlipMove>
        {props.candidates.map((candidate, index) => {
          const { id } = candidate
          console.log(candidate)
          return (
            <div key={id}>
              <Card>
                <Candidate position={index + 1} candidate={candidate} />
              </Card>
            </div>
          )
        })}

      </FlipMove>
    </div>
  )
}
