import * as React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

// it's pre-built library => jadi teman2 cukup implement saja apabila pengen tanpa perlu install lagi
// import * as SplashScreen from "expo-splash-screen";
// SplashScreen.preventAutoHideAsync();
// setTimeout(SplashScreen.hideAsync, 5000);

export default function RootLayout() {
  return (
    <React.Fragment>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="inverted" />
    </React.Fragment>
  );
}
