import { StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { ReactFragment } from "react";
import { View } from '../Common/Themed';

type LayoutProps = {
  children?: ReactFragment,
}

const Layout = ({ children }:LayoutProps) => {
  return (
    <View style={style.layoutContainer}>
      {children}
      <StatusBar style="dark" />
    </View>
  );
}

const style = StyleSheet.create({
  layoutContainer: {
    flex: 1,
  }
})

export default Layout;