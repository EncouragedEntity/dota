
import React from "react";
import { Text, View } from "react-native";
import Input from "app/components/Input";
import type { FilteringParams, SortingParams } from "app/modules/heroes";
import { Field, FormSubmitHandler, reduxForm, type WrapperFormProps } from "app/utilities/form/redux";
import {HeroSortingFields, HeroFilteringFields, HeroSortingDirections} from 'app/constants';

export const FORM_NAME = "heroesFilterForm";

type Props = {};

type Values = {
  sort: SortingParams, 
  filter: FilteringParams;
};

const Form = React.memo<WrapperFormProps<Values, Props>>(() => {
  return (
    <View className="flex-1 p-4 gap-2">
      <View className="gap-1">
        <Text className="text-lg">Sort by:</Text>
        <Field
          name="sort.field"
          component={Input.Dropdown}
          data={HeroSortingFields}
        />
      </View>

      <View className="gap-1">
        <Text className="text-lg">Sort direction:</Text>
        <Field
          name="sort.direction"
          component={Input.Dropdown}
          data={HeroSortingDirections}
        />
      </View>

      <View className="gap-1">
        <Text className="text-lg">Filter by role:</Text>
        <Field
          name="filter.role"
          component={Input.Dropdown}
          data={HeroFilteringFields.map(field => ({
            label: field.label,
            value: field.value as string,
          }))}
        />
      </View>
    </View>
  );
});

export type SubmitHandler = FormSubmitHandler<Values, Props>;

export default reduxForm<Values, Props>({
  form: FORM_NAME,
})(Form);