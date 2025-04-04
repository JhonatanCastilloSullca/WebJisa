import React from 'react'

const TimesIcon = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.size || 24}
            height={props.size || 24}
            fill="currentColor"
            viewBox="0 -8 72 72">
            <path
                d="M43.74 28 59 12.75a3.29 3.29 0 0 0 0-4.66L55.9 5a3.32 3.32 0 0 0-4.67 0L36 20.26 20.77 5.07a3.32 3.32 0 0 0-4.67 0L13 8.18a3.3 3.3 0 0 0 0 4.67L28.18 28 13 43.21a3.31 3.31 0 0 0 0 4.66L16.11 51a3.32 3.32 0 0 0 4.67 0L36 35.82 51.16 51a3.32 3.32 0 0 0 4.67 0l3.11-3.12a3.29 3.29 0 0 0 0-4.66Z" />
        </svg>
    )
}

export default TimesIcon