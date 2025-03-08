const ChooseBanner = () => {
    return (
<svg width="60" height="400" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9F0013" />
            <stop offset="100%" stopColor="rgb(239,86,13)" />
        </linearGradient>
    </defs>

    <text x="30" y="50" fill="url(#lineGradient)" fontSize="28" fontFamily="Arial" fontWeight="bold" textAnchor="middle" style={{ textShadow: '0px 0px 10px rgba(159, 0, 19, 0.8)' }}>
        <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="fill" values="#9F0013;rgb(239,86,13);#9F0013" dur="1.5s" repeatCount="indefinite" />
        ?
    </text>

    <line x1="30" y1="60" x2="30" y2="200" stroke="url(#lineGradient)" strokeWidth="3" strokeLinecap="round">
        <animate attributeName="stroke" values="#9F0013;rgb(239,86,13);#9F0013" dur="1.5s" repeatCount="indefinite" />
    </line>

    <line x1="30" y1="210" x2="30" y2="350" stroke="url(#lineGradient)" strokeWidth="3" strokeLinecap="round">
        <animate attributeName="stroke" values="#9F0013;rgb(239,86,13);#9F0013" dur="1.5s" repeatCount="indefinite" />
    </line>

    <g>
    <circle cx="30" cy="200" r="25" fill="url(#lineGradient)">
        <animate attributeName="fill" values="#9F0013;rgb(239,86,13);#9F0013" dur="1.5s" repeatCount="indefinite" />
    </circle>

    <text x="49%" y="207" fill="white" fontSize="24" fontFamily="Arial" fontWeight="bold" textAnchor="middle" style={{ textShadow: '0px 0px 8px rgba(159, 0, 19, 0.8)' }}>
        OR
    </text>
    </g>

    <text x="30" y="380" fill="url(#lineGradient)" fontSize="28" fontFamily="Arial" fontWeight="bold" textAnchor="middle" style={{ textShadow: '0px 0px 10px rgba(159, 0, 19, 0.8)' }}>
        <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="fill" values="#9F0013;rgb(239,86,13);#9F0013" dur="1.5s" repeatCount="indefinite" />
        ?
    </text>
</svg>

    );
}

export default ChooseBanner;
