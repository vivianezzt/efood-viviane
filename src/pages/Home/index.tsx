import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Restaurant } from "../../types/restaurants";
import { HomeContainer, RestaurantGrid } from "./styles";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import RestaurantCard from "../../components/RestaurantCard";

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then((res) => res.json())
      .then((data) => {
        setRestaurants(data);
        setLoading(false);
      })
      .catch(() => {
        alert("Erro ao carregar os restaurantes 😢");
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header type="headerHome" />
      <Banner />
      <HomeContainer>
        {loading ? (
          <p>Carregando restaurantes...</p>
        ) : (
          <RestaurantGrid>
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </RestaurantGrid>
        )}
      </HomeContainer>
      <Footer />
    </>
  );
};

export default Home;
