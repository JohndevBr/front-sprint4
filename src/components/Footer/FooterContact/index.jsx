
export default function FooterContact(){
    return (
        <section className="footer__contact">
                <div className="footer__container contact">
                    <p className="contact__info">Receba ofertas e novidades por e-mail</p>
                    <form action="/">
                        <input className="contact__input" type="email" placeholder="Digite aqui seu e-mail" />
                        <button className="contact__btn" type="submit">
                            <span className="contact__btn__txt">Cadastrar</span>
                        </button>
                    </form>
                    <p className="contact__msg-app">Baixe nosso App</p>
                    <div className="apps">
                        <a href="#home">
                            <img className="apps__img" src="assets/google-play.webp" alt="Google Play" />
                        </a>
                        <a href="#home">
                            <img className="apps__img" src="assets/app-store.webp" alt="App Store" />
                        </a>
                    </div>
                </div>
            </section>
    )
}