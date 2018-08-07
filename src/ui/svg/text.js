import React from 'react'

const Text = props => {
    return (
        <svg
            aria-hidden="true"
            role="img"
            focusable="false"
            className="dashicon dashicons-editor-textcolor"
            xmlns="http://www.w3.org/2000/svg"
            width={props.size || 16}
            height={props.size || 16}
            viewBox="0 0 20 20"
        >
            <path
                fill={props.fill || '#555D65'}
                d="M13.23 15h1.9L11 4H9L5 15h1.88l1.07-3h4.18zm-1.53-4.54H8.51L10 5.6z"
            />
        </svg>
    )
}
export default Text
