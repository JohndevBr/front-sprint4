import { Container } from './styles'

import FooterContact from './FooterContact'
import FooterLinks from './FooterLinks'
import FooterPayment from './FooterPayment'
import FooterBottom from './FooterBottom'

export default function Footer() {
    return (
        <Container className="footer">
            <FooterContact />
            <FooterLinks />
            <FooterPayment />
            <FooterBottom />
        </Container>
    );
}

