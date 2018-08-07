import React from 'react'

const Plus = props => {
    return (
        <svg
            viewBox="0 0 14 14"
            xmlns="http://www.w3.org/2000/svg"
            height={props.height || 14}
            width={props.width || 14}
        >
            <path
                d="M14 6.125H7.875V0h-1.75v6.125H0v1.75h6.125V14h1.75V7.875H14z"
                fill={props.fill || '#b9b9b9'}
            />
        </svg>
    )
}
export default Plus
