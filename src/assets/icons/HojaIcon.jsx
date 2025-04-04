import React from 'react'

const HojaIcon = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={props.size || 24}
            width={props.size || 24}
            fill="currentColor"
            viewBox="0 0 14 14">
            <path
                d="M1 1c12.793 0 9.82 8.5 9.833 9.812L13 13h-.696l-1.886-1.907c-1.045.112-3.332.924-5.743-.991C2.259 8.187 2.393 5.894 1 1Zm2.135 1.232c-1.331-.63-.14.247-.14.247 1.211.835 1.768 1.974 2.417 3.211.843 1.613 2.116 3.742 3.862 4.492 1.741.75.916.335.16-.228-.755-.567-1.826-2.33-2.437-3.487C6.148 4.86 5.363 3.29 3.135 2.232Z" />
        </svg>
    )
}

export default HojaIcon