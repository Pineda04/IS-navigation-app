import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'green',
        // tabBarShowLabel: false,
        // headerShown: false,
        tabBarStyle: {
          backgroundColor: 'indigo'
        },
        tabBarActiveBackgroundColor: 'red'
      }}
    >
      // Home
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}
      />
      // Favorites
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="star" color={color} size={size} />
          ),
        }}
      />
      // Favorites
      <Tabs.Screen
        name="(stack)"
        options={{
          title: "Stack",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="table" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
