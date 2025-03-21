const BuIcon = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.size || 24}
            height={props.size || 24}
            fill="currentColor"
            viewBox="0 0 15 15">
            <path
                d="M4 0C2.636 0 1 .743 1 2.746V12s0 1 1 1v1s0 1 1 1 1-1 1-1v-1h7v1s0 1 1 1 1-1 1-1v-1s1 0 1-1V2.746C14 .701 12.764 0 11.4 0H4zm.25 1.5h6.5a.25.25 0 1 1 0 .5h-6.5a.25.25 0 1 1 0-.5zM3 3h9c1 0 1 .967 1 .967V7s0 1-1 1H3C2 8 2 7 2 7V4s0-1 1-1zm0 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm9 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
    )
}

export default BuIcon