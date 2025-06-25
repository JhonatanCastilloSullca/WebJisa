import { useState } from "react";
import Autosuggest from "react-autosuggest";
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';

const SearchBar = ({ id, data }) => {
    const tours = data;
    const getSuggestions = (value) => {
        const inputValue = value.trim().toLowerCase();
        return inputValue.length === 0 ? [] : tours.filter(tour =>
            tour.titulo.toLowerCase().includes(inputValue)
        );
    };

    const getSuggestionValue = (suggestion) => suggestion.titulo;

    const renderSuggestion = (suggestion) => (
        <Link to={`/tours/${suggestion.slug}`}>
            <div className="flex items-center gap-2 p-2 border-b hover:bg-gray-100 cursor-pointer">
                <img src={suggestion.foto_principal} alt={suggestion.titulo} className="w-10 h-10 rounded" />
                <span>{suggestion.titulo}</span>
            </div>
        </Link>
    );
    const [value, setValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const { t } = useTranslation()

    return (
        <div id={id} className="w-full max-w-7xl mx-auto md:-mt-12 z-30 relative md:px-0 px-6">
            <div className="container mx-auto py-4">
                <div className="relative top-8">
                    <svg version="1.1" id="_x32_"
                        width="20" height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512" xmlSpace="preserve" fill="currentColor"
                        className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-JisaCyan"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0">
                        </g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
                        </g>
                        <g id="SVGRepo_iconCarrier">
                            <g>
                                <path className="st0" d="M495.152,413.801l-52.688-52.688c22.688-37.688,34.344-80.266,34.313-122.734 c0.031-60.844-23.359-122.125-69.828-168.563C360.512,23.363,299.246-0.043,238.387,0.02 C177.527-0.059,116.262,23.363,69.824,69.816C23.355,116.254-0.035,177.535-0.004,238.379 c-0.063,60.859,23.359,122.141,69.828,168.578c46.422,46.453,107.703,69.859,168.563,69.813 c42.469,0.047,85.031-11.625,122.734-34.297l52.672,52.656c22.469,22.469,58.891,22.469,81.359,0 C517.621,472.676,517.621,436.254,495.152,413.801z M341.871,341.863c-28.703,28.688-65.875,42.828-103.484,42.875 c-37.609-0.047-74.766-14.188-103.484-42.875C106.23,313.16,92.09,275.988,92.043,238.379 c0.047-37.609,14.188-74.781,42.859-103.484c28.703-28.656,65.875-42.797,103.484-42.859 c37.609,0.063,74.781,14.203,103.484,42.859c28.672,28.703,42.797,65.875,42.875,103.484 C384.668,275.988,370.543,313.16,341.871,341.863z"></path> </g> </g>
                    </svg>
                </div>
                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={({ value }) => setSuggestions(getSuggestions(value))}
                    onSuggestionsClearRequested={() => setSuggestions([])}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={{
                        placeholder: t('header.buscar-tour'),
                        value,
                        onChange: (_, { newValue }) => setValue(newValue),
                        className: "bg-white md:h-16 h-12 focus:ring-2 focus:ring-JisaCyan focus:outline-none w-full md:text-xl text-lg leading-6 text-JisaGris/80 placeholder-JisaGris/30 rounded-lg pl-10 pr-4 shadow-xl"
                    }}

                />
            </div>
        </div>
    );
};

export default SearchBar;
