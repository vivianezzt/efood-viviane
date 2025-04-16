import styled from 'styled-components';

export const HomeContainer = styled.main`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const RestaurantGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 32px;
  margin-bottom: 120px;
`;
