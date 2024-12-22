import { getColor } from '../constants/Constants';
import { XStack } from 'tamagui';
import areEqual from '../utils/MemoFunction';
import GetFormattedNumber from '../utils/GetFormattedNumber';
import React from 'react';
import Text from './Text';

export const StudentLg = React.memo((props: any) => {
  const { student } = props;

  return (
    <XStack p="$2" px="$3" bg="$lightSilver7">
      <XStack width="10%">
        <Text notchChange={-2} linkProps={{ href: { pathname: `/admin/${student.StudentId}` } }}>
          {student.StudentId}
        </Text>
      </XStack>
      <XStack width="10%">
        <Text notchChange={-2} textAlign="right" f={1}>
          {student.Name || '-'}
        </Text>
      </XStack>
      <XStack width="10%">
        <Text notchChange={-2} textAlign="right" f={1}>
          {student.Class || '-'}
        </Text>
      </XStack>
      {/* <XStack width="5%">
        <Text notchChange={-2} textAlign="right" f={1}>
          {student.Section || '-'}
        </Text>
      </XStack> */}
      <XStack width="10%">
        <Text notchChange={-2} textAlign="right" f={1}>
          {student.Age || '-'}
        </Text>
      </XStack>
      <XStack width="10%">
        <Text notchChange={-2} textAlign="right" f={1} color={getColor(student.Marks, false)}>
          {student.Marks ? `${GetFormattedNumber(student.Marks)}%` : '-'}
        </Text>
      </XStack>
      <XStack width="10%">
        <Text notchChange={-2} textAlign="right" f={1}>
          {student.Attendance ? `${GetFormattedNumber(student.Attendance)}%` : '-'}
        </Text>
      </XStack>
      <XStack width="10%">
        <Text notchChange={-2} textAlign="right" f={1}>
          {student.Email || '-'}
        </Text>
      </XStack>
      <XStack width="10%">
        <Text notchChange={-2} textAlign="right" f={1}>
          {student.Phone || '-'}
        </Text>
      </XStack>
      <XStack width="10%">
        <Text notchChange={-2} textAlign="right" f={1}>
          {student.EnrollmentDate || '-'}
        </Text>
      </XStack>
      <XStack width="10%">
        <Text notchChange={-2} textAlign="right" f={1}>
          {student.Status || '-'}
        </Text>
      </XStack>
    </XStack>
  );
}, areEqual);
