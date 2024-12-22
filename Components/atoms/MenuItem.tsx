import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { XStack, YGroup, Separator, useTheme, PopoverContentProps, PopoverProps } from 'tamagui';
import Text from '../Text';
import AnchorLink from './AnchorLink';
import PopoverOrSheet from '../molecules/PopoverOrSheet';

function isSubScreen(items: { screen: string; title: string }[], name: string) {
  return items.map((item) => item.screen).includes(`/${name}`);
}

export const MenuItem = function (props: {
  isSelected: boolean;
  title: string;
  screen?: string;
  onPress?: any;
  disabled?: boolean;
  popupItems?: { title: string; screen?: string; onCheck?: boolean; popupItems?: any[]; disabled?: boolean; onPress?: any }[];
  routeName?: string;
  popoverContentProps?: PopoverContentProps;
  popOverProps?: PopoverProps;
  subChild?: boolean;
  afterClose?: () => void;
  anchor?: boolean;
}) {
  const { isSelected, title, screen, disabled, popupItems, routeName, popoverContentProps, popOverProps, subChild, afterClose, anchor, onPress } = props;
  const [open, setOpen] = useState(false);
  const { vividOrange100 } = useTheme();

  return popupItems ? (
    <>
      <XStack alignItems="center" space="$1" cur="pointer" onPress={() => setOpen((prev) => !prev)}>
        <Text color={isSelected ? '$vividOrange100' : 'white'} disabled={disabled} fontWeight="$semibold">
          {title}
        </Text>
        <Ionicons name={subChild ? 'chevron-forward' : open ? 'chevron-up' : 'chevron-down'} size={16} color={isSelected ? vividOrange100 : 'white'} style={{ marginTop: 2 }} />
      </XStack>
      <PopoverOrSheet open={open} onOpenChange={setOpen}>
        <YGroup alignSelf="center" minWidth="$11" bordered size="$5" space="$3" p="$3" separator={<Separator borderColor="$rhythm20" borderWidth={0.5} />}>
          {popupItems.map((item) =>
            item.popupItems ? (
              <MenuItem
                title={item.title}
                subChild
                key={item.screen}
                screen={item.screen}
                afterClose={() => setOpen(false)}
                popupItems={item.popupItems}
                isSelected={isSubScreen(item.popupItems, routeName ?? '')}
                routeName={routeName}
                popoverContentProps={{ maxWidth: '$13' }}
                popOverProps={{ placement: 'right-start' }}
              />
            ) : item.screen ? (
              <AnchorLink key={item.title} linkProps={anchor ? undefined : { href: item.screen }} href={anchor ? item.screen : undefined}>
                <XStack
                  cur="pointer"
                  onPress={() => {
                    if (afterClose) afterClose();
                    setOpen(false);
                  }}
                >
                  <Text color={`/${routeName}` === item.screen ? '$vividOrange100' : 'white'} hoverStyle={{ color: '$vividOrange100' }} fontWeight="$semibold">
                    {item.title}
                  </Text>
                </XStack>
              </AnchorLink>
            ) : (
              <Text
                key={item.title}
                color={`/${routeName}` === item.screen ? '$vividOrange100' : 'white'}
                cur="pointer"
                onPress={
                  !item.disabled
                    ? () => {
                        item.onPress();
                        if (afterClose) afterClose();
                        setOpen(false);
                      }
                    : () => {}
                }
                disabled={item.disabled}
                hoverStyle={{ color: '$vividOrange100' }}
                fontWeight="$bold"
              >
                {item.title}
              </Text>
            )
          )}
        </YGroup>
      </PopoverOrSheet>
    </>
  ) : screen ? (
    <AnchorLink linkProps={anchor ? undefined : { href: screen }} href={anchor ? screen : undefined}>
      <Text color={isSelected ? '$vividOrange100' : 'white'} disabled={disabled} hoverStyle={{ color: '$vividOrange100' }} fontWeight="$bold">
        {title}
      </Text>
    </AnchorLink>
  ) : (
    <Text color={isSelected ? '$vividOrange100' : 'white'} cur="pointer" onPress={!disabled && onPress} disabled={disabled} hoverStyle={{ color: '$vividOrange100' }} fontWeight="$bold">
      {title}
    </Text>
  );
};
