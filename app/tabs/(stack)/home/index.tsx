import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import CustomButton from "@/components/shared/CustomButton";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10 flex gap-2 mt-10">
        {/* <Link href='/products' asChild>
          <CustomButton color="primary">Products Link</CustomButton>
        </Link> */}

        <CustomButton color="primary" onPress={() => router.push("/tabs/(stack)/products")}>
          Productos
        </CustomButton>

        <CustomButton
          color="secondary"
          variant="containt"
          onPress={() => router.push("/tabs/(stack)/profile")}
        >
          Perfil
        </CustomButton>

        <CustomButton
          color="tertiary"
          variant="containt"
          onPress={() => router.push("/tabs/(stack)/settings")}
        >
          Configuración
        </CustomButton>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
