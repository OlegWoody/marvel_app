import img from './error.gif'

const ErrorMessage = () =>{
    return (
        <img style={{display:'block', width: '350px', height: '350px', objectFit: 'contain', margin:'0 auto'}}
        src={img} alt='error img'/>
    )
}

export default ErrorMessage;