import React, { useRef, useEffect } from "react";
import { Animated } from "react-native";

export const FadeInView = ({ duration = 1500, ...props }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, duration]);

  return (
    <Animated.View // special animatable view
      style={{
        ...props.style,
        opacity: fadeAnim, // bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};
