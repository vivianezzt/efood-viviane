import styled from 'styled-components';
import { breakpoints, Colors } from '../../styles/globals';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 40px;
  margin-top: 120px;

  background-color: #FFEBD9;

  img {
    margin-top: 40px;
    width: 126px;
  }

  p {
    font-size: 10px;
    width: 480px;
    margin-top: 20px;
    line-height: 12px;
    font-weight: 400;
    color: ${Colors.textColor};
  }

  a {
    color: ${Colors.textColor};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    img {
      width: 96px;
    }

    p {
      font-size: 8px;
      width: 330px;
    }
  }
`

export const Logo = styled.img`
  height: 56px;
  margin-bottom: 32px;
`;

export const SocialLinks = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;
  
  li {
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
    }
  }
`;
