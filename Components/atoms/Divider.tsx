import { Separator } from 'tamagui';
import areEqual from '../../utils/MemoFunction';
import React from 'react';

function Divider() {
  return <Separator borderColor="white" bw="$0.8" width={'100%'} />;
}

export default React.memo(Divider, areEqual);
