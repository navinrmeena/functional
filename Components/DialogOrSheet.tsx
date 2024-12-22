import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useMedia, Dialog, Adapt, Sheet, Unspaced, Button, ScrollView, XStack } from 'tamagui';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function DialogOrSheet(props: any) {
  const { children, showModal, setShowModal, transparent = false } = props;
  const insets = useSafeAreaInsets();
  const media = useMedia();

  const bgColor = transparent ? 'transparent' : '$chineseBlack100';

  return (
    <Dialog open={showModal} onOpenChange={(open) => setShowModal(open)}>
      <Adapt when="ltSm">
        <Sheet modal snapPointsMode="mixed" dismissOnSnapToBottom animation={'quick'} snapPoints={['70%']} disableDrag={true}>
          <Sheet.Handle backgroundColor={transparent ? 'transparent' : 'white'} />
          <Sheet.Frame flex={1} justifyContent="flex-start" bg={bgColor} paddingBottom={insets.bottom} height={'75%'} minWidth={'75%'}>
            <ScrollView>
              <Adapt.Contents />
            </ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay />
        </Sheet>
      </Adapt>
      <Dialog.Portal>
        <Dialog.Overlay 
          key="overlay" 
          animation="quick" 
          opacity={transparent ? 0 : 0.7} 
          enterStyle={{ opacity: 0 }} 
          exitStyle={{ opacity: 0 }} 
          onPress={() => setShowModal(false)} 
        />
        <Dialog.Content
          bordered={!transparent}
          elevate={!transparent}
          animation={'quick'}
          enterStyle={{
            opacity: 0,
          }}
          exitStyle={{
            opacity: 0,
          }}
          bg={bgColor}
          minWidth={'75%'}
          height={'75%'}
        >
          <ScrollView>{children}</ScrollView>
          <Unspaced>
            <XStack alignItems="center" gap="$2" position="absolute" top="$3" right="$3" $ltSm={{ display: 'none' }}>
              <Dialog.Close asChild>
                <Button 
                  hoverStyle={{ backgroundColor: 'transparent' }} 
                  pressStyle={{ backgroundColor: 'transparent' }} 
                  backgroundColor="transparent" 
                  borderWidth={0} 
                  focusable={false} 
                  size="$3" 
                  circular 
                  onPress={() => setShowModal(false)}
                >
                  <AntDesign name="close" size={20} color={transparent ? 'black' : 'white'} />
                </Button>
              </Dialog.Close>
            </XStack>
          </Unspaced>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}

export default React.memo(DialogOrSheet);