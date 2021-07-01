
export default function FooterLinks(){
    return(
        <section className="footer__links links">
                <div className="footer__container links">
                    <div className="links__contacts">
                        <div className="col">
                            <a href="#home" className="contact-icon">
                                <img className="contact-icon__img" src="assets/ico-attendance.svg" alt="Atendimento" />
                                <p className="contact-icon__text">Atendimento</p>
                            </a>
                            <a href="#home" className="contact-icon">
                                <img className="contact-icon__img" src="assets/ico-faq.svg" alt="Perguntas Frequentes" />
                                <p className="contact-icon__text">Perguntas Frequentes</p>
                            </a>
                        </div>
                        <div className="col">
                            <a href="#home" className="contact-icon">
                                <img className="contact-icon__img" src="assets/ico-invoice-and-statement.svg" alt="Fatura e Extrato" />
                                <p className="contact-icon__text">Fatura e Extrato</p>
                            </a>
                            <a href="#home" className="contact-icon">
                                <img className="contact-icon__img" src="assets/ico-work-with-us.svg" alt="Trabalhe Conosco" />
                                <p className="contact-icon__text">Trabalhe Conosco</p>
                            </a>
                        </div>
                    </div>
                    <hr className="links__separator" />
                    <ul className="links__companies company-links">
                        <li className="company-links">
                            <h3 className="company-links__title">Cartão Riachuelo</h3>
                            <ul>
                                <li className="company-links__item">
                                    <a className="company-links__text" href="#home">
                                        Midway Financeira
                  </a>
                                </li>
                                <li className="company-links__item">
                                    <a className="company-links__text" href="#home">
                                        Saiba como adquirir
                  </a>
                                </li>
                                <li className="company-links__item">
                                    <a className="company-links__text" href="#home">
                                        Veja sua fatura e extrato
                  </a>
                                </li>
                                <li className="company-links__item">
                                    <a className="company-links__text" href="#home">
                                        Buscando quitar suas dívidas?
                  </a>
                                </li>
                            </ul>
                        </li>
                        <li className="company-links">
                            <h3 className="company-links__title">Sobre a Riachuelo</h3>
                            <ul>
                                <li className="company-links__item">
                                    <a className="company-links__text" href="#home">A Empresa</a>
                                </li>
                                <li className="company-links__item">
                                    <a className="company-links__text" href="#home">Portal de Fornecedores</a>
                                </li>
                                <li className="company-links__item">
                                    <a className="company-links__text" href="#home">
                                        Relação com Investidores
                  </a>
                                </li>
                                <li className="company-links__item">
                                    <a className="company-links__text" href="#home">
                                        Assessoria de Imprensa
                  </a>
                                </li>
                                <li className="company-links__item">
                                    <a className="company-links__text" href="#home">Trabalhe Conosco</a>
                                </li>
                                <li className="company-links__item">
                                    <a className="company-links__text" href="#home">
                                        Programa Jovem Aprendiz
                  </a>
                                </li>
                                <li className="company-links__item">
                                    <a className="company-links__text" href="#home">
                                        Cadastro de Startups
                  </a>
                                </li>
                                <li className="company-links__item">
                                    <a className="company-links__text" href="#home"> Mapa do Site </a>
                                </li>
                                <li className="company-links__item">
                                    <a className="company-links__text" href="#home"> Guide Shop </a>
                                </li>
                                <li className="company-links__item">
                                    <a className="company-links__text" href="#home">
                                        Venda na Riachuelo Marketplace
                  </a>
                                </li>
                            </ul>
                        </li>
                        <li className="company-links">
                            <h3 className="company-links__title">Moda que Transforma</h3>
                            <ul>
                                <li className="company-links__item">
                                    <a className="company-links__text" href="#home">Na prática</a>
                                </li>
                                <li className="company-links__item">
                                    <a className="company-links__text" href="#home">Entre Costuras</a>
                                </li>
                                <li className="company-links__item">
                                    <a className="company-links__text" href="#home">
                                        Jeans Mais Transparente</a>
                                </li>
                                <li className="company-links__item">
                                    <a className="company-links__text" href="#home">Ações Covid-19</a>
                                </li>
                                <li className="company-links__item">
                                    <a className="company-links__text" href="#home">Free Free</a>
                                </li>
                            </ul>
                        </li>
                        <li className="company-links">
                            <h3 className="company-links__title">Ajuda</h3>
                            <ul>
                                <li className="company-links__item">
                                    <a className="company-links__text" href="#home">Atendimento</a>
                                </li>
                                <li className="company-links__item">
                                    <a className="company-links__text" href="#home">Perguntas Frequentes</a>
                                </li>
                                <li className="company-links__item">
                                    <a className="company-links__text" href="#home">Trocas e Devoluções</a>
                                </li>
                                <li className="company-links__item">
                                    <a className="company-links__text" href="#home">Portal da Privacidade</a>
                                </li>
                                <li className="company-links__item">
                                    <a className="company-links__text" href="#home">Política de Privacidade</a>
                                </li>
                                <li className="company-links__item">
                                    <a className="company-links__text" href="#home">Termos e Condições de Uso</a>
                                </li>
                                <li className="company-links__item">
                                    <a className="company-links__text" href="#home">Regras e Resultados de Sorteios</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
    )
}