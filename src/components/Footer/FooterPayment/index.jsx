export default function FooterPayment() {
    return (
        <section className="footer__payment">
                <div className="footer__container payment">
                    <div className="payment__alternatives">
                        <h3 className="payment__title">Formas de Pagamento</h3>
                        <img className="payment__img" src="assets/ico-cartao-rchlo1.webp" alt="" />
                        <img className="payment__img" src="assets/ico-cartao-rchlo2.webp" alt="" />
                        <img className="payment__img" src="assets/ico-cartao-rchlo3.webp" alt="" />
                        <img className="payment__img" src="assets/ico-cartao-visa.png" alt="" />
                        <img className="payment__img" src="assets/ico-cartao-master.webp" alt="" />
                        <img className="payment__img" src="assets/ico-cartao-amex.webp" alt="" />
                        <img className="payment__img" src="assets/ico-cartao-diners.png" alt="" />
                        <img className="payment__img" src="assets/ico-cartao-elo.png" alt="" />
                        <img className="payment__img" src="assets/ico-boleto.webp" alt="" />
                        <img className="payment__img" src="assets/ico-paypal.png" alt="" />
                    </div>
                    <div className="payment__social">
                        <h3 className="payment__title">Siga a Riachuelo</h3>
                        <div className="social__icons">
                            <div className="social__icon icon">
                                <a href="#home">
                                    <img className="icon__img" src="assets/ico-facebook.svg" alt="" />
                                </a>
                            </div>

                            <div className="social__icon icon">
                                <a href="#home">
                                    <img className="icon__img" src="assets/ico-instagram.svg" alt="" />
                                </a>
                                <p className="icon__text">RCHLO</p>
                            </div>

                            <div className="social__icon icon">
                                <a href="#home">
                                    <img className="icon__img" src="assets/ico-instagram.svg" alt="" />
                                </a>
                                <p className="icon__text">CASA RCHLO</p>
                            </div>

                            <div className="social__icon icon">
                                <a href="#home">
                                    <img className="icon__img" src="assets/ico-pinterest.svg" alt="" />
                                </a>
                            </div>
                            <div className="social__icon icon">
                                <a href="#home">
                                    <img className="icon__img" src="assets/ico-twitter.svg" alt="" />
                                </a>
                            </div>
                            <div className="social__icon icon">
                                <a href="#home">
                                    <img className="icon__img" src="assets/ico-youtube.svg" alt="" />
                                </a>
                            </div>
                            <div className="social__icon icon">
                                <a href="#home">
                                    <img className="icon__img" src="assets/ico-linkedin.svg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="payment__accessibility">
                        <h3 className="payment__title">Acessibilidade</h3>
                        <img src="assets/ico-a11y.webp" alt="" />
                    </div>
                </div>
            </section>
    )
}