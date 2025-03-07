const CloseIcon =() =>{
    return(
<svg className={"close__icon"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <path 
    d="M6 6l12 12M6 18l12-12" 
    stroke="#9F0013" 
    strokeWidth="4" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    filter="url(#shadow)"
    className="close__path"
  />
  <defs>
    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#9F0013" floodOpacity="1" />
    </filter>
  </defs>
</svg>

    )
}

export default CloseIcon;