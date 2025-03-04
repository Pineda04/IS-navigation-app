import { View, Text, FlatList } from "react-native";
import React from "react";
import { products } from "@/store/products";
import { Link } from "expo-router";

const ProductsScreen = () => {
  return (
    <View className="flex flex-1 px-4">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mt-10">
            <Text className="text-2xl font-work-black">{item.title}</Text>
            <Text>{item.description}</Text>
            <View className="flex flex-row justify-between mt-2">
              <Text className="font-work-medium">${item.price}</Text>
              <Link
                className="text-primary"
                href={`/products/${item.id}`}
              >
                Ver detalles
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ProductsScreen;
