const ClockIcon = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            width={props.size || 24}
            height={props.size || 24}
            {...props}
        >
            <path fill="currentColor"
                fillRule="evenodd"

                d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16ZM7 3v5.414l3.293 3.293 1.414-1.414L9 7.586V3H7Z"
                clipRule="evenodd" />
        </svg>
    )
}

export default ClockIcon