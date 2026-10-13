import { Screen } from "@/components/ui/Screen";
import { Text, View } from "react-native";

export default function SearchScreen() {
  return (
    <Screen>
      <View className="flex-1 items-center justify-center px-8">
        <Text className="text-2xl font-bold text-white">Buscar</Text>
        <Text className="mt-2 text-center text-zinc-400">
          Pantalla preparada para el siguiente módulo: búsqueda de películas y
          debounce.
        </Text>
      </View>
    </Screen>
  );
}
