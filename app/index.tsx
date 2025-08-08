import PrimaryButton from "@/components/PrimaryButton";
import PrimaryTextInput from "@/components/PrimaryTextInput";
import { useRouter } from "expo-router";
import React from "react";
import { View, StyleSheet, SafeAreaView, Image } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../assets/images/icon.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <PrimaryTextInput label="Email" />
        <PrimaryButton
          label="Send kode"
          onPress={() => router.push("/login")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#86C5E0",
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 50,
    paddingTop: 140,
  },
  logo: {
    width: 300,
    height: 100,
    marginBottom: 20,
  },
});
