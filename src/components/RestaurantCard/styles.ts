import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: #fff;
  border: 1px solid #e66767;
  border-radius: 8px;
  overflow: hidden;
`

export const CardImage = styled.div`
  position: relative;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px 4px 0 0;
  }

  .tags {
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    flex-direction: row; 
    gap: 8px;            
  }
`


export const Tag = styled.span`
  background-color: #e66767;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: capitalize;
`

export const CardContent = styled.div`
  padding: 16px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #e66767;
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  font-weight: 900;
  font-size: 18px;
  color: #e66767;
  gap: 6px;

  span {
    color: #ffb930;
    font-size: 24px; /* A estrela fica maior */
    line-height: 1;
  }
`




export const Description = styled.p`
  font-size: 14px;
  line-height: 1.5;
  text-align: justify;
  margin-bottom: 16px;
  color: #e66767;
`

export const LearnMoreButton = styled(Link)`
  display: inline-block;
  background-color: #e66767;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 8px 12px;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  width: auto; 

  &:hover {
    filter: brightness(0.95);
  }
`

