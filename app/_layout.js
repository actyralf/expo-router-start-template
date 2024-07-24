import { StyleSheet, Pressable, View, Text } from "react-native";
import { globalStyles } from "../styles/gobalStyles";
import { router, Link, Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView style={globalStyles.pageContainer}>
      <View style={styles.slotContainer}>
        <Slot />
      </View>
      <View style={styles.navContainer}>
        <Link style={globalStyles.paragraph} href="/">
          Home
        </Link>
        <Pressable onPress={() => router.back()}>
          <Text style={globalStyles.paragraph}>Back</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  slotContainer: {
    flex: 1,
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
