const StubAvatar=()=>{
    return(
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="90" fill="#222" stroke="#fff" strokeWidth="5">
            <animate attributeName="r" values="90;100;90" dur="3s" keyTimes="0;0.2;1" repeatCount="indefinite" />
        </circle>
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="80" fill="#fff" fontWeight="bold">
            <animate attributeName="font-size" values="80;90;80" dur="5s" keyTimes="0;0.9;1" repeatCount="indefinite" />
            ?
        </text>
        </svg>
    )
}

export default StubAvatar;