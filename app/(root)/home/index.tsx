import { View, Text, Image, TouchableOpacity } from "react-native";
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";
import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "@/styles/onboarding/onboard";
import { router } from "expo-router";

export default function OnBoarding() {
  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <LinearGradient
      colors={["#E5ECF9", "#F6F7F9"]}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <View style={styles.firstContainer}>
        <View>
          <Image source={require("@/assets/logo.png")} style={styles.logo} />
          <Image source={require("@/assets/onboarding/shape_9.png")} />
        </View>
        <View style={styles.titleWrapper}>
          <Image
            style={styles.titleTextShape1}
            source={require("@/assets/onboarding/shape_3.png")}
          />
          <Text style={[styles.titleText, { fontFamily: "Raleway_700Bold" }]}>
            Start Your Learning Journey With
          </Text>
          <Image
            style={styles.titleTextShape2}
            source={require("@/assets/onboarding/shape_2.png")}
          />
        </View>
        <View>
          <Image
            style={styles.titleShape3}
            source={require("@/assets/onboarding/shape_6.png")}
          />
          <Text style={[styles.titleText, { fontFamily: "Raleway_700Bold" }]}>
            Dondza
          </Text>
        </View>
        <View style={styles.dscpWrapper}>
          <Text style={[styles.dscpText, { fontFamily: "Nunito_400Regular" }]}>
            Discover a wide range of interactive lessons,
          </Text>
          <Text style={[styles.dscpText, { fontFamily: "Nunito_400Regular" }]}>
            videos, quizzes & assignments.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => router.push("/(root)/welcome")}
        >
          <Text style={[styles.buttonText, { fontFamily: "Nunito_700Bold" }]}>
            Get Started Today
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
