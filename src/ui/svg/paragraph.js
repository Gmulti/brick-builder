import React from 'react'

const Paragraph = props => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="#000000"
            height={24}
            viewBox="0 0 24 24"
            width={24}
        >
            <defs>
                <path d="M24 24H0V0h24v24z" id="a" />
            </defs>
            <clipPath id="b">
                <use overflow="visible" xlinkHref="#a" />
            </clipPath>
            <path
                clipPath="url(#b)"
                d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z"
            />
        </svg>
    )
}
export default Paragraph
