import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
  Oswald_500Medium,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import * as firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB9CMqwGgvvQDwip6JuA6VSBvFV7Pcg0gw",
  authDomain: "mealstogo-23cda.firebaseapp.com",
  projectId: "mealstogo-23cda",
  storageBucket: "mealstogo-23cda.appspot.com",
  messagingSenderId: "874854139932",
  appId: "1:874854139932:web:e094b2f946fb2dc23cb7d9",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
    Oswald_500Medium,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  /* wait till fonts are loaded */
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
