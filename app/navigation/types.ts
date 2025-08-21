import type { CompositeScreenProps, NavigationContainerRef, NavigatorScreenParams } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import type { Hero } from 'app/modules/heroes/types';
import routes from './routes';
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = //

export type HeroesStackParams = {
  [routes.heroes.list]?: undefined;
  [routes.heroes.details]?: Hero;
};

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = //

export type RootStackParams = {
  [routes.root.initial]?: { reset: boolean };
  [routes.root.error]: { error: string };
  [routes.heroes.stack]: NavigatorScreenParams<HeroesStackParams>;
};

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = //

export type HeroesStack<T extends keyof HeroesStackParams = keyof HeroesStackParams> = CompositeScreenProps<
  StackScreenProps<HeroesStackParams, T>,
  StackScreenProps<HeroesStackParams & RootStackParams>
>;

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = //

export type RootStack<T extends keyof RootStackParams = keyof RootStackParams> = CompositeScreenProps<
  StackScreenProps<RootStackParams, T>,
  StackScreenProps<HeroesStackParams>
>;

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = //

export type NavigationRef = NavigationContainerRef< HeroesStackParams & RootStackParams>;