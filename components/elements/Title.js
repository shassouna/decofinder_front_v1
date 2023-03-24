import React from 'react'

const Title = ({elements}) => {

    return (
            <h2>
            {elements.map((element, index)=>
                index==elements.length-1?element + " : " : element + " - "
            )}
            </h2>
    )
}

export default Title