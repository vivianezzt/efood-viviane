import { Restaurant } from '../../types/restaurants';
import {
  Card,
  CardImage,
  CardContent,
  Tag,
  Title,
  Description,
  Rating,
  LearnMoreButton,
} from './styles';

type RestaurantCardProps = {
  restaurant: Restaurant;
};

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  return (
    <Card>
      <CardImage>
        <img src={restaurant.capa} alt={restaurant.titulo} />
        <div className="tags">
          {restaurant.destacado && <Tag>Destaque da semana</Tag>}
          <Tag>{restaurant.tipo}</Tag>
        </div>
      </CardImage>
      <CardContent>
        <div className="header">
          <Title>{restaurant.titulo}</Title>
          <Rating>
            {restaurant.avaliacao.toFixed(1)} <span>★</span>
          </Rating>
        </div>
        <Description>{restaurant.descricao}</Description>
        <LearnMoreButton to={`/restaurante/${restaurant.id}`}>Saiba mais</LearnMoreButton>
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;
