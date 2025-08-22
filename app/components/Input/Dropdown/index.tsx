import React from "react";
import { WrappedFieldProps } from "redux-form";
import {Dropdown as ElementDropdown} from 'react-native-element-dropdown';

type Props = WrappedFieldProps & {
  data: Array<{ label: string; value: string }>;
}

export default React.memo<Props>(({ input, data }) => {
  return (
    <ElementDropdown
      data={data}
      labelField={"label"}
      valueField={"value"}
      value={input.value}
      onChange={({value}) => {
        input.onChange(value);
      }}
    />
  );
});