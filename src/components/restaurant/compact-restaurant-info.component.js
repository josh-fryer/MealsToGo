import React from "react";
import styled from "styled-components/native";
import { Platform, View } from "react-native";
import { WebView } from "react-native-webview";

import { Text } from "../typography/text.component";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const AndroidView = styled.View`
  overflow: hidden;
  border-radius: 10px;
  height: 100px;
  width: 120px;
`;

// for rounded border on android devices
const AndroidImageView = ({ restaurant }) => (
  <AndroidView>
    <CompactWebview source={{ uri: restaurant.photos[0] }} />
  </AndroidView>
);

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant }) => {
  return (
    <Item>
      {isAndroid ? (
        <AndroidImageView restaurant={restaurant} />
      ) : (
        <CompactImage source={{ uri: restaurant.photos[0] }} />
      )}

      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
