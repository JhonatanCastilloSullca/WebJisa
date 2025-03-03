import { Tooltip } from 'react-tooltip';

const IconTooltipCard = ({ icon: Icon, tooltip, size = 24, color = "white", hoverColor = "JisaCyan" }) => {
    const tooltipId = `tooltip-${tooltip}`; // Genera un ID único

    return (
        <span className="p-2 transition" data-tooltip-id={tooltipId} data-tooltip-content={String(tooltip)}>
            <Icon size={size} className={`text-${color} hover:text-${hoverColor} transition duration-300`} />
            <Tooltip id={tooltipId} place='left' />
        </span>
    );
}

export default IconTooltipCard