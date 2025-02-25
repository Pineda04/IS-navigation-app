import React from "react";
import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "#fff",
        },
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: "Inicio",
        }}
      />

      <Stack.Screen
        name="products/index"
        options={{
          title: "Productos",
        }}
      />

      <Stack.Screen
        name="products/[id]"
        options={{
          title: "Detalle del producto",
        }}
      />

      <Stack.Screen
        name="profile/index"
        options={{
          title: "Perfil",
        }}
      />

      <Stack.Screen
        name="settings/index"
        options={{
          title: "Configuración",
        }}
      />
    </Stack>
  );
};

export default StackLayout;
