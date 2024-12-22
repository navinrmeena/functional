import React from 'react';
import { Adapt, Popover as TamagPopover, Sheet, ScrollView, YStack } from 'tamagui';
import { CustomPopoverProps } from '../../types';
import areEqual from '../../utils/MemoFunction';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function PopoverOrSheet(props: CustomPopoverProps) {
  const { open, onOpenChange, contentProps, children, arrowProps, noAdapt, sheetProps, ...rest } = props;
  const insets = useSafeAreaInsets();
  return (
    <TamagPopover  open={open} onOpenChange={onOpenChange} placement="bottom-end">
      <TamagPopover.Trigger>{<></>}</TamagPopover.Trigger>
      <Adapt when="ltSm">
        <Sheet modal snapPointsMode="mixed" dismissOnSnapToBottom animation={'lazy'} moveOnKeyboardChange disableDrag={true}>
          <Sheet.Handle backgroundColor="white" />
          <Sheet.Frame flex={1} justifyContent="flex-start" bg="$chineseBlack100" paddingBottom={insets.bottom} height={'75%'} minWidth={'75%'}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Adapt.Contents />
            </ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay />
        </Sheet>
      </Adapt>
      {open && (
        <TamagPopover.Content  enterStyle={{ x: 0, y: 10, opacity: 0 }} exitStyle={{ x: 0, y: 10, opacity: 0 }} x={0} y={0} opacity={1} animation="lazy" mt={ 0}>
          <TamagPopover.Arrow   />
          <YStack background="$chineseBlack100" borderColor="$lightSilver7"  borderRadius={"$2"} borderWidth={"$0.5"}>
          {children}
          </YStack>
        </TamagPopover.Content>
      )}
    </TamagPopover>
  );
}

export default React.memo(PopoverOrSheet, areEqual);
