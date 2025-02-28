import React from "react";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import CustomDrawer from "@/components/shared/CustomDrawer";

const DrawerLayout = () => {
  return (
    <Drawer 
    drawerContent={CustomDrawer}
    screenOptions={{
      overlayColor: 'rgba(0,0,0, 7)',
      drawerActiveTintColor: 'indigo',
      headerShadowVisible: false,
      sceneStyle:{
        backgroundColor: '#fff'
      }
    }}>
      <Drawer.Screen
        name="user/index"
        options={{
          drawerLabel: "Usuarios",
          title: "Usuarios",
          drawerIcon: ({size, color}) => <Ionicons name="person" size={size} color={color}/>
        }}
      />

      <Drawer.Screen
        name="schedule/index"
        options={{
          drawerLabel: "Horario",
          title: "Horario",
          drawerIcon: ({size, color}) => <Ionicons name="calendar" size={size} color={color}/>
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
