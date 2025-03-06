const Logo = () =>{
    return(
        <svg width="70" height="70" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">

        <rect width="70" height="70" fill="#1E1E1E" rx="10"/>
        
        {/* <!-- Буква "M" в стиле Marvel --> */}
        <text x="15" y="51.5" fontFamily="Arial, sans-serif" fontSize="50" fontWeight="bold" fill="#E50914" stroke="#FF3D00" strokeWidth="2">M</text>
        
        {/* <!-- Декоративные элементы --> */}
        <polygon points="35,5 50,20 35,35 20,20" fill="rgba(255,255,255,0.2)"/>
      </svg>
    )
}

export default Logo;