const Spinner = () => {
    return (
        <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{margin: '35px auto', background: 'none', display: 'block', justifySelf:'center', alignSelf:'center'}} preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="50" r="45" stroke="#FF0000" strokeWidth="6" fill="none" strokeDasharray="283" strokeDashoffset="75">
                <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="0.8s" repeatCount="indefinite"/>
                <animate attributeName="stroke-dashoffset" values="75;0;75" dur="0.8s" repeatCount="indefinite"/>
            </circle>
            <circle cx="50" cy="50" r="35" stroke="#FFD700" strokeWidth="3" fill="none" strokeDasharray="220" strokeDashoffset="110">
                <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="1.2s" repeatCount="indefinite"/>
                <animate attributeName="stroke-dashoffset" values="110;0;110" dur="1.2s" repeatCount="indefinite"/>
            </circle>
        </svg>


    )
}

export default Spinner;