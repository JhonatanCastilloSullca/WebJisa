import React from 'react'

const HeartIcon = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={props.size || 24}
            width={props.size || 24}
            fill="currentColor"
            viewBox="0 0 24 24">
            <path
                fill="currentColor"
                d="M12.39 20.87a.696.696 0 0 1-.78 0C9.764 19.637 2 14.15 2 8.973c0-6.68 7.85-7.75 10-3.25 2.15-4.5 10-3.43 10 3.25 0 5.178-7.764 10.664-9.61 11.895z" />
        </svg>
    )
}

export default HeartIcon