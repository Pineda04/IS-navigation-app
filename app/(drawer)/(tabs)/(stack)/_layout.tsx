import React from "react";
import { router, Stack, useNavigation } from "expo-router";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DrawerActions, StackActions } from "@react-navigation/native";

const StackLayout = () => {
  const navigation = useNavigation();

  const onHeaderLeftTab = (canGoBack: boolean | undefined) => {
    if (canGoBack) {
      // navigation.dispatch(StackActions.pop())
      router.back();
      return;
    }

    navigation.dispatch(DrawerActions.openDrawer);
  };

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "#fff",
        },
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            onPress={() => onHeaderLeftTab(canGoBack)}
            name={canGoBack ? "arrow-back-circle-outline" : "menu"}
            size={20}
            className="mr-5"
          />
        ),
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
