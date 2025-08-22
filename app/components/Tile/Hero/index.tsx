import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import { cssInterop } from "nativewind";

cssInterop(FastImage, {
  className: "style",
});

type Props = {
  name: string;
  icon: string;
  roles?: Array<string>;
  onPress?: () => void;
};

export default React.memo<Props>(props => {
  const { name, icon, roles, onPress } = props;

  return (
    <TouchableOpacity
      disabled={!onPress}
      onPress={onPress}
      activeOpacity={onPress ? 0.7 : 1}
      className="flex-row items-center p-3 bg-white rounded-lg shadow-sm mb-2"
    >
      <FastImage
        className="w-12 h-12 mr-3 rounded-full border border-gray-200 bg-gray-100"
        source={{ uri: icon }}
        resizeMode={FastImage.resizeMode.cover}
      />

      <View className="flex-1">
        <Text className="font-bold text-base text-text" numberOfLines={1}>
          {name}
        </Text>
        {roles && roles.length > 0 && (
          <Text className="text-xs text-placeholder mt-0.5" numberOfLines={1}>
            {roles.join(", ")}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
});