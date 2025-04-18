import { FooterContainer, Logo, SocialLinks } from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src="/assets/logo.png" alt="Efood" />
      <SocialLinks>
        <li>
          <a href="https://www.instagram.com/vivianezzt/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/instagram.png" alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="https://github.com/vivianezzt" target="_blank" rel="noopener noreferrer">
            <img src="/assets/github.png" alt="Github" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/vivianezzt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/linkedin.png" alt="LinkedIn" />
          </a>
        </li>
      </SocialLinks>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos. A responsabilidade pela
        entrega e qualidade dos produtos é do estabelecimento contratado.
      </p>
    </FooterContainer>
  );
};

export default Footer;
