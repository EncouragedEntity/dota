import React from "react";
import { ScrollView, Text, View } from "react-native";
import { HeroesStack, routes } from "app/navigation";
import FastImage from "react-native-fast-image";
import ENV from "app/environments";

type Props = HeroesStack<typeof routes.heroes.details>;

export default React.memo<Props>(({ route }) => {
  const { hero } = route.params ?? {};

  return (
    <ScrollView className="flex-1 p-4 bg-background">
      {/* Header */}
      <View className="flex-row items-center mb-6 bg-white/80 rounded-xl shadow-lg p-4">
        <FastImage
          source={{ uri: ENV.url.assets + hero.img }}
          className="w-32 h-32 mr-6 rounded-lg border-2 border-blue-400"
          resizeMode={FastImage.resizeMode.contain}
        />
        <View className="flex-1">
          <Text className="text-3xl font-extrabold text-blue-400 mb-1">
            {hero.localized_name}
          </Text>
          <Text className="text-base text-gray-700 mb-2">
            <Text className="font-semibold">{hero.primary_attr.toUpperCase()}</Text>
            {"  •  "}
            <Text className="font-semibold">{hero.attack_type}</Text>
          </Text>
          <View className="flex-row flex-wrap">
            {hero.roles.map((role: string) => (
              <View
                key={role}
                className="bg-blue-400/10 px-2 py-1 rounded-full mr-2 mb-2"
              >
                <Text className="text-xs text-blue-400 font-semibold">{role}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Base stats */}
      <View className="mb-4 bg-white/80 rounded-xl shadow p-4">
        <Text className="font-bold text-lg text-blue-400 mb-3">Base Stats</Text>
        <View className="flex-row flex-wrap">
          <View className="w-1/2 mb-2">
            <Text className="text-gray-700">
              ❤️ Health: <Text className="font-semibold">{hero.base_health}</Text>{" "}
              <Text className="text-xs text-gray-500">
                (+{hero.base_health_regen}/s)
              </Text>
            </Text>
          </View>
          <View className="w-1/2 mb-2">
            <Text className="text-blue-700">
              🔷 Mana: <Text className="font-semibold">{hero.base_mana}</Text>{" "}
              <Text className="text-xs text-gray-500">
                (+{hero.base_mana_regen}/s)
              </Text>
            </Text>
          </View>
          <View className="w-1/2 mb-2">
            <Text className="text-yellow-700">
              🛡️ Armor: <Text className="font-semibold">{hero.base_armor}</Text>
            </Text>
          </View>
          <View className="w-1/2 mb-2">
            <Text className="text-purple-700">
              ✨ Magic Resist: <Text className="font-semibold">{hero.base_mr}%</Text>
            </Text>
          </View>
          <View className="w-1/2 mb-2">
            <Text>
              ⚔️ Attack:{" "}
              <Text className="font-semibold">
                {hero.base_attack_min} - {hero.base_attack_max}
              </Text>
            </Text>
          </View>
          <View className="w-1/2 mb-2">
            <Text>
              ⏱️ Attack Rate:{" "}
              <Text className="font-semibold">{hero.attack_rate}</Text>
            </Text>
          </View>
          <View className="w-1/2 mb-2">
            <Text>
              🏃 Move Speed:{" "}
              <Text className="font-semibold">{hero.move_speed}</Text>
            </Text>
          </View>
        </View>
      </View>

      {/* Growth */}
      <View className="mb-4 bg-white/80 rounded-xl shadow p-4">
        <Text className="font-bold text-lg text-blue-400 mb-3">Attribute Gains</Text>
        <View className="flex-row">
          <View className="mr-6">
            <Text className="text-red-700 font-semibold">STR: </Text>
            <Text>
              {hero.base_str}{" "}
              <Text className="text-xs text-gray-500">(+{hero.str_gain})</Text>
            </Text>
          </View>
          <View className="mr-6">
            <Text className="text-green-700 font-semibold">AGI: </Text>
            <Text>
              {hero.base_agi}{" "}
              <Text className="text-xs text-gray-500">(+{hero.agi_gain})</Text>
            </Text>
          </View>
          <View>
            <Text className="text-blue-700 font-semibold">INT: </Text>
            <Text>
              {hero.base_int}{" "}
              <Text className="text-xs text-gray-500">(+{hero.int_gain})</Text>
            </Text>
          </View>
        </View>
      </View>

      {/* Other info */}
      <View className="mb-8 bg-white/80 rounded-xl shadow p-4">
        <Text className="font-bold text-lg text-blue-400 mb-3">Miscellaneous</Text>
        <View className="flex-row flex-wrap">
          <View className="w-1/2 mb-2">
            <Text>
              🏹 Attack Range:{" "}
              <Text className="font-semibold">{hero.attack_range}</Text>
            </Text>
          </View>
          <View className="w-1/2 mb-2">
            <Text>
              💨 Projectile Speed:{" "}
              <Text className="font-semibold">{hero.projectile_speed}</Text>
            </Text>
          </View>
          <View className="w-1/2 mb-2">
            <Text>
              ⏲️ Base Attack Time:{" "}
              <Text className="font-semibold">{hero.base_attack_time}</Text>
            </Text>
          </View>
          <View className="w-1/2 mb-2">
            <Text>
              ⚡ Attack Point:{" "}
              <Text className="font-semibold">{hero.attack_point}</Text>
            </Text>
          </View>
          <View className="w-1/2 mb-2">
            <Text>
              🦵 Legs: <Text className="font-semibold">{hero.legs}</Text>
            </Text>
          </View>
          <View className="w-1/2 mb-2">
            <Text>
              👁️ Vision:{" "}
              <Text className="font-semibold">
                {hero.day_vision} / {hero.night_vision}
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
});
