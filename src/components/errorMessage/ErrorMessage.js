import img from './error.gif'

const ErrorMessage = () =>{
    return (
        <img className='err' style={{display:'block', objectFit: 'contain', margin:'0 auto'}}
        src={img} alt='error img'/>
    )
}

export default ErrorMessage;