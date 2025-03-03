const EnvelopeIcon = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            width={props.size || 24}
            height={props.size || 24}
            {...props}
        >

            <g fill="currentColor">
                <path d="M1.602 4.201A2.999 2.999 0 0 1 4 3h16c.978 0 1.85.473 2.398 1.201L12 11.764 1.602 4.2Z" />
                <path d="M1 6.237V18c0 1.652 1.348 3 3 3h16c1.652 0 3-1.348 3-3V6.236l-9.824 7.145a2 2 0 0 1-2.352 0L1 6.237Z" />
            </g>
        </svg>
    );
};

export default EnvelopeIcon;
