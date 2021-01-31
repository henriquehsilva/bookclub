import styled from 'styled-components';

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  background-color: #00000070;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px; 
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://www.linkedin.com/in/henriquesilvadev">
        <img src="https://res.cloudinary.com/henrique-silva-dev/image/upload/v1612113485/henriquesilva.dev/logo_hudlrw.png" alt="Logo Alura" />
      </a>
      <p>
        Desenvolvido com 🖤
        {' '}
        por
        {' '}
        <a href="https://henriquesilva.dev">
          <span>Henrique Silva Dev</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
