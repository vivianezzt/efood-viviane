import { Link } from 'react-router-dom';
import * as S from './styles';

type Props = {
  type: 'headerHome' | 'headerMenu'
}

const Header = ({ type }: Props) => {
  if (type === 'headerHome') {
    return (
      <S.Imagem style={{ backgroundImage: "url('/assets/fundo.png')" }}>
        <div className="container">
          <Link to="/">
            <img src="/assets/logo.png" alt="eFood Logo" />
          </Link>
          <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
        </div>
      </S.Imagem>
    );
  }

  return (
    <div>
      <div style={{ backgroundImage: "url('/assets/fundo.png')" }}>
        <S.HeaderContainer className="container">
          <Link to="/">Restaurantes</Link>
          <img src="/assets/logo.svg" alt="Logo eFood" />
        </S.HeaderContainer>
      </div>
      <S.ImagemFundo
        key={'default-key'}
        style={{ backgroundImage: `url('default-image-url')` }}
      >
        <div className="container">
          <div>
            <span>{'default-type'}</span>
            <h1>{'default-title'}</h1>
          </div>
        </div>
        <div className="overlay"></div>
      </S.ImagemFundo>
    </div>
  );
};

export default Header;

