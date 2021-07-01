import { Container, Content, ImgContent } from './styles'

export default function NotFound(){
    return (
        <Container>
        <Content>
            <h2>Página não encontrada</h2>
            <p>Desculpe, parece que a página que você está procurando já não existe mais.<br /> 
                Por favor, continue navegando ou confira nossas sugestões abaixo.
            </p>
            <a href="/">Quero ir para a Página Inicial</a>
        </Content>
        <ImgContent>
            <img src="/assets/Pagina-404.webp" alt="Foto erro 404" />
        </ImgContent>
        </Container>
    )
}