const FacebookIcon = (props) => {
    return (
        <a target="_blank" href="https://www.facebook.com/Jisadventuress">
            <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                height={props.size || 24}
                width={props.size || 24}
                {...props}
            >
                <path d="m23.446 18 .889-5.791h-5.557V8.451c0-1.584.776-3.129 3.265-3.129h2.526V.392S22.277.001 20.085.001c-4.576 0-7.567 2.774-7.567 7.795v4.414H7.431v5.791h5.087v14h6.26v-14z" />
            </svg>
        </a>
    );
};

export default FacebookIcon;
