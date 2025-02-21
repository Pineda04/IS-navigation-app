import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import CustomButton from "@/components/shared/CustomButton";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10 flex gap-2">
        {/* <Link href='/products' asChild>
          <CustomButton color="primary">Products Link</CustomButton>
        </Link> */}

        <CustomButton color="primary" onPress={() => router.push("/products")}>
          Productos
        </CustomButton>

        <CustomButton
          color="secondary"
          variant="containt"
          onPress={() => router.push("/profile")}
        >
          Perfil
        </CustomButton>

        <CustomButton
          color="tertiary"
          variant="containt"
          onPress={() => router.push("/settings")}
        >
          Configuración
        </CustomButton>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
