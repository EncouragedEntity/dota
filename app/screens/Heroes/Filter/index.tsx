import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { submit } from "app/utilities/form/redux";
import Form, { FORM_NAME, SubmitHandler } from './Form';
import { useDispatch } from "app/storage/utilities";
import HeroesModule from 'app/modules/heroes';
import { HeroesStack, routes } from "app/navigation";

type Props = HeroesStack<typeof routes.heroes.filter>;

export default React.memo<Props>(({ navigation }) => {
  const dispatch = useDispatch();
  const handleSubmit = React.useCallback<SubmitHandler>((values) => {
    console.log('Form submitted with values:', values);

    dispatch(HeroesModule.fetch.async(values)).then(() => {
      navigation.goBack()
    });
  }, []);

  return (
    <SafeAreaView className="flex-1">
      <Form onSubmit={handleSubmit}/>

      <TouchableOpacity
        className="p-4 m-4 bg-blue-400 rounded-full flex items-center"
        activeOpacity={0.7}
        onPress={() => dispatch(submit(FORM_NAME))}
      >
        <Text className="text-white font-bold text-lg">Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
});