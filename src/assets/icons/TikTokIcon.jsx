const TikTokIcon = (props) => {
    return (
        <a
            target="_blank"
            href="https://www.tiktok.com/@jisa_adventure"
            rel="noopener noreferrer"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                width={props.size || 24}
                height={props.size || 24}
                {...props}
            >
                <path d="M9.5 3H13c0 2.21 1.79 4 4 4v2c-1.54 0-2.94-.58-4-1.53V15a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V3z" />
            </svg>
        </a>
    );
};

export default TikTokIcon;
