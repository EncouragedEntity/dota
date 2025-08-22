import React from 'react';
import { StatusBar } from 'react-native';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation, { NavigationRef } from 'app/navigation';
import store, { Provider } from 'app/storage';
import "./global.css"
import Toast from 'react-native-toast-message';

export default React.memo(() => {
  const navigation = React.useRef<NavigationRef>(null);

  return (
    <SafeAreaProvider className='bg-background' initialMetrics={initialWindowMetrics}>
      <StatusBar
        backgroundColor='transparent'
        barStyle='light-content'
        translucent={true}
        animated={true}
      />

      <Provider store={store}>
        <Navigation ref={navigation} />

        <Toast />
      </Provider>
    </SafeAreaProvider>
  );
});