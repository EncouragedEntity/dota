import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Heroes from 'app/screens/Heroes';
import routes from './routes';
import { NavigationRef, RootStack } from './types';
import type { HeroesStackParams, RootStackParams } from './types';
import theme from 'app/theme';

const MainNavigation: React.FC<RootStack<typeof routes.heroes.stack>> = React.memo(() => {
  const Stack = React.useMemo(() => createStackNavigator<HeroesStackParams>(), []);

  return (
    <Stack.Navigator
      id={routes.heroes.stack}
      initialRouteName={routes.heroes.list}
    >
      <Stack.Screen
        component={Heroes.List}
        name={routes.heroes.list}
        options={{ title: 'Heroes' }}
      />

      <Stack.Screen
        component={Heroes.Details}
        name={routes.heroes.details}
        options={{ title: 'Hero Details' }}
      />
    </Stack.Navigator>
  );
});

export default React.forwardRef<NavigationRef, {}>((props, ref) => {
  const navigation = React.useRef<NavigationRef>(null);

  const Stack = React.useMemo(() => createStackNavigator<RootStackParams>(), []);

  React.useImperativeHandle<NavigationRef | null, NavigationRef | null>(ref, () => navigation.current);

  return (
    <NavigationContainer ref={navigation} {...props} theme={theme}>
      <Stack.Navigator
        id={routes.root.stack}
        initialRouteName={routes.heroes.stack}
        screenOptions={{
          gestureEnabled: false,
          headerShown: false,
        }}
      >

        <Stack.Screen component={MainNavigation} name={routes.heroes.stack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
});