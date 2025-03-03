export default function TabButton({ id, label, icon: Icon, isActive, onClick, activeColor }) {
    return (
        <button
            onClick={() => onClick(id)}
            className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-colors focus:outline-none ${isActive ? `text-white ${activeColor}` : "hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                }`}
        >
            <Icon className="text-lg" />
            {label}
        </button>
    );
}