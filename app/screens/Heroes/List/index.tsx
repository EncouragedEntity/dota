import React from "react";
import { FlatList, Text, View } from "react-native";
import HeroesModule from 'app/modules/heroes';
import { useDispatch, useSelector } from "app/storage/utilities";

export default React.memo(() => {
  const dispatch = useDispatch();
  const loading = useSelector(HeroesModule.getEvent('fetch'));
  const heroes = useSelector(HeroesModule.getHeroes);

  React.useEffect(() => {
    dispatch(HeroesModule.fetch.async());
  }, []);

  return (
    <View className="flex-1 items-center justify-center">
      <FlatList
        data={heroes}
        renderItem={({ item }) => (
            <Text>{item.name}</Text>
        )}
        ListEmptyComponent={() => (
            <Text>No heroes found</Text>
        )}
      />
    </View>
  );
});