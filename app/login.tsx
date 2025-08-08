import PrimaryButton from "@/components/PrimaryButton";
import PrimaryTextInput from "@/components/PrimaryTextInput";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import { Surface, Text } from "react-native-paper";

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../assets/images/icon.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <Surface style={styles.box}>
          <Text style={styles.text}>
            Vi har sendt en email til example@bot.com{"\n"}
            Indtast koden fra din email her
          </Text>
        </Surface>

        <PrimaryTextInput label="Kode" />
        <PrimaryButton label="Login" />
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
  box: {
    backgroundColor: "#B8D7F4",
    padding: 16,
    borderRadius: 8,
    elevation: 4, // shadow for Android
    shadowColor: "#000", // shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginBottom: 20,
  },
  text: {
    color: "#000",
    fontSize: 16,
    textAlign: "center",
  },
});
