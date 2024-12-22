import React from 'react';
import { Controller } from 'react-hook-form';
import { Input as TamagInput } from 'tamagui';
import areEqual from '../../utils/MemoFunction';
import { CustomInputProps } from '../../types';
import GetFormattedInput from '../../utils/GetFormattedInput';

function Input(props: any) {
  const { placeholder, number, phoneNumber, control, rules, name = '', isUpper, inputRef, $sm, $md, $lg, editable = true, numberFormat, onChangeText, ...rest } = props;

  const commonProps = {
    color: editable ? 'white' : '$gray',
    backgroundColor: '$lightSilver7',
    borderRadius: 4,
    placeholderTextColor: '$color',
    autoCorrect: false,
    placeholder,
    borderColor: '$rhythm20',
    borderWidth: 0.25,
    focusStyle: { outlineStyle: 'none' },
    hoverStyle: { borderColor: 'none' },
    editable,
    cur: editable ? 'text' : 'not-allowed',
    px: '$2.5',
  };

  return control ? (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({ field: { onChange, value, ref } }) => (
        <TamagInput
          ref={ref}
          onChangeText={(value) => GetFormattedInput(value, onChange, phoneNumber, isUpper, numberFormat)}
          value={(isUpper ? value?.toUpperCase() : value) || ''}
          keyboardType={number ? 'number-pad' : 'default'}
          {...commonProps}
          {...rest}
        />
      )}
    />
  ) : (
    <TamagInput ref={inputRef} keyboardType={number ? 'number-pad' : 'default'} {...commonProps} {...rest} onChangeText={(value) => GetFormattedInput(value, onChangeText, phoneNumber, isUpper, numberFormat)} />
  );
}

export default React.memo(Input, areEqual);
