import React from 'react'

const Button = props => {
    return (
        <svg
            width={18}
            height={18}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path fill="none" d="M0 0h24v24H0V0z" />
            <g>
                <path d="M19 6H5L3 8v8l2 2h14l2-2V8l-2-2zm0 10H5V8h14v8z" />
            </g>
        </svg>
    )
}
export default Button
