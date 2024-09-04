import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { Stack } from "expo-router";
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="(root)/welcome/index"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="(auth)/login/index" />
      <Stack.Screen name="(auth)/sign-up/index" />
      <Stack.Screen name="(auth)/forgot-password/index" />
      <Stack.Screen
        name="(root)/course-details/index"
        options={{
          headerShown: true,
          title: "Course Details",
          headerBackTitle: "Back",
        }}
      />
      <Stack.Screen
        name="(root)/cart/index"
        options={{
          headerShown: true,
          title: "Cart Items",
          headerBackTitle: "Back",
        }}
      />
      <Stack.Screen
        name="(root)/profile-details/index"
        options={{
          headerShown: true,
          title: "Profile Details",
          headerBackTitle: "Back",
        }}
      />
      <Stack.Screen
        name="(root)/course-access/index"
        options={{
          headerShown: true,
          title: "Course Lessons",
          headerBackTitle: "Back",
        }}
      />
      <Stack.Screen
        name="(root)/enrolled-courses/index"
        options={{
          headerShown: true,
          title: "Enrolled Courses",
          headerBackTitle: "Back",
        }}
      />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
