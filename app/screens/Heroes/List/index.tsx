import React from "react";
import { ActivityIndicator, FlatList, SafeAreaView, Text, View } from "react-native";
import HeroesModule from 'app/modules/heroes';
import { useDispatch, useSelector } from "app/storage/utilities";
import Tile from "app/components/Tile";
import ENV from 'app/environments';
import { HeroesStack, routes } from "app/navigation";
import Toast from "react-native-toast-message";

type Props = HeroesStack<typeof routes.heroes.list>;

export default React.memo<Props>(({ navigation }) => {
  const dispatch = useDispatch();
  const loading = useSelector(HeroesModule.getEvent('fetch'));
  const heroes = useSelector(HeroesModule.getHeroes);


  React.useEffect(() => {
    // ? Pass {triggerError: true} to simulate an error
    dispatch(HeroesModule.fetch.async()).catch(() => {
      Toast.show({ type: 'error', text1: 'Failed to fetch heroes' });
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 items-stretch my-2">
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          className="flex-1 w-full"
          contentContainerClassName="items-stretch"
          data={heroes}
          renderItem={({ item }) => {
            return (
              <Tile.Hero
                name={item.localized_name}
                icon={ENV.url.assets + item.icon}
                roles={item.roles}
                onPress={() => navigation.navigate(routes.heroes.details, {hero: item})}
              />
            );
          }}
          onRefresh={() => {
            dispatch(HeroesModule.fetch.async()).catch(() => {
              Toast.show({ type: 'error', text1: 'Failed to fetch heroes' });
            });
          }}
          refreshing={loading}
          ListEmptyComponent={() => (
            <Text className="text-center">No heroes found</Text>
          )}
        />
      )}
    </SafeAreaView>
  );
});