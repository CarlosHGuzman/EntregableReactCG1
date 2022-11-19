import ButtonQuote from "./ButtonQuote"
const QuoteBox = ({quote, changeQC, color}) => {
  const colorL = {color: color}
    return (
        <div className="quote-box">
            <div className="center">
            <i style = {colorL} class='bx bxs-quote-alt-left' ></i>

                <cite style={colorL}>{quote.quote}</cite>
            </div>
            <p style={colorL}>{quote.author}</p>
            <section className="btn">
                <ButtonQuote changeQC={changeQC} color={color}/>
            </section>
        </div>
    )
}

export default QuoteBox