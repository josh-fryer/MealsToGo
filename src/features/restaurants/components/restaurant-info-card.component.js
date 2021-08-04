import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background: white;
`;

const Title = styled.Text`
  padding: 16px;
`;

/* takes in restaurant object */
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://i2-prod.nottinghampost.com/incoming/article5409747.ece/ALTERNATES/s615/0_Grounded-Kitchen.jpg",
    ],
    address = "100 random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
