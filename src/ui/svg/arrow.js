import React from 'react'

const calculateRotation = direction => {
    switch (direction) {
        case 'right':
            return 'rotateZ(90deg)'
        case 'left':
            return 'rotateZ(-90deg)'
        case 'down':
            return 'rotateZ(180deg)'
        default:
            return 'rotateZ(0deg)'
    }
}

const Arrow = props => {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            style={{
                fill: 'currentcolor',
                display: 'block',
                width: 10,
                height: 10,
                transition: 'transform 300ms ease-in-out',
                transform: calculateRotation(props.direction)
            }}
        >
            <polygon points="5.9,88.2 50,11.8 94.1,88.2 " />
        </svg>
    )
}
export default Arrow
