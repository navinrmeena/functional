import { AntDesign } from '@expo/vector-icons';
import { CustomTextProps } from '../../types';
import { useMedia, useTheme, XStack } from 'tamagui';
import areEqual from '../../utils/MemoFunction';
import React from 'react';
import Text from '../Text';

function SortableHeader(props: CustomTextProps & { show: boolean; order?: 'ASC' | 'DESC' | string; onPress?: any }) {
  const { show, order, children, onPress, width, justifyContent, ...rest } = props;
  const theme = useTheme();
  const media = useMedia();

  return (
    <XStack gap="$1.5" onPress={onPress} width={width} cur="pointer" alignItems="center" justifyContent={justifyContent}>
      <Text {...rest}>{children}</Text>
      {show && <AntDesign name={order === 'ASC' ? 'arrowdown' : 'arrowup'} size={16} color={theme?.iconBrandSecondary?.val} />}
    </XStack>
  );
}

export default React.memo(SortableHeader, areEqual);
