import { Tabs } from "expo-router";
import { Image } from "react-native";
import React from "react";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          // Dynamically import icons based on route name
          switch (route.name) {
            case "index":
              iconName = require("@/assets/icons/HouseSimple.png");
              break;
            case "search/index":
              iconName = require("@/assets/icons/search.png");
              break;
            case "courses/index":
              iconName = require("@/assets/icons/BookBookmark.png");
              break;
            case "profile/index":
              iconName = require("@/assets/icons/User.png");
              break;
          }

          return (
            <Image
              style={{ width: 25, height: 25, tintColor: color }}
              source={iconName}
            />
          );
        },
        headerShown: false,
        tabBarShowLabel: false,
      })}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="search/index" />
      <Tabs.Screen name="courses/index" />
      <Tabs.Screen name="profile/index" />
    </Tabs>
  );
}
