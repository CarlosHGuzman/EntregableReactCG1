const ButtonQuote = ({changeQC, color}) => {
    return(
        
        <button style={{backgroundColor: color}} onClick={changeQC}><i  className='bx bx-right-arrow-alt'></i></button>
    )
}

export default ButtonQuote