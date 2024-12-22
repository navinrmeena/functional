import { Stack, XStack, YStack } from 'tamagui';
import areEqual from '../utils/MemoFunction';
import React from 'react';
import SortableHeader from './atoms/SortableHeader';
import Text from './Text';

export const StudentTableHeader = React.memo((props:any) => {
  const { sortedColumn, setSortedColumn } = props;

  function SortValue(name, previous) {
    return {
      name,
      order:
        previous.name !== name
          ? previous.order
          : previous.order === 'DSC'
          ? 'ASC'
          : 'DSC',
    };
  }

  return (
    <YStack flex={1} minWidth={1100} p="$2" px="$3">
      <XStack>
        <Stack width="22%" />
        <Stack width="42%" alignItems="center" bg="$grey" p="$1.5">
          <Text  >Student List</Text>
        </Stack>
        
      </XStack>
      <XStack>
        <SortableHeader
          width="10%"
          show={sortedColumn.name === 'id'}
          order={sortedColumn.order}
          notchChange={-2}
          onPress={() => setSortedColumn((prev) => SortValue('id', prev))}
          p="$1.5"
        >
          UserId/Student ID
        </SortableHeader>
        <SortableHeader
          width="10%"
          show={sortedColumn.name === 'Name'}
          order={sortedColumn.order}
          notchChange={-2}
          onPress={() => setSortedColumn((prev) => SortValue('Name', prev))}
          justifyContent="flex-end"
          p="$1.5"
        >
          Name
        </SortableHeader>
        <SortableHeader
          width="10%"
          show={sortedColumn.name === 'ClassGrade'}
          order={sortedColumn.order}
          notchChange={-2}
          onPress={() => setSortedColumn((prev) => SortValue('ClassGrade', prev))}
          justifyContent="flex-end"
          p="$1.5"
        >
          Class/Grade
        </SortableHeader>
        <SortableHeader
          width="10%"
          show={sortedColumn.name === 'Age'}
          order={sortedColumn.order}
          notchChange={-2}
          onPress={() => setSortedColumn((prev) => SortValue('Age', prev))}
          justifyContent="flex-end"
          p="$1.5"
        >
          Age
        </SortableHeader>
        <SortableHeader
          width="10%"
          show={sortedColumn.name === 'RollNumber'}
          order={sortedColumn.order}
          notchChange={-2}
          onPress={() => setSortedColumn((prev) => SortValue('RollNumber', prev))}
          justifyContent="flex-end"
          p="$1.5"
        >
          Roll Number
        </SortableHeader>
        <SortableHeader
          width="10%"
          show={sortedColumn.name === 'Email'}
          order={sortedColumn.order}
          notchChange={-2}
          onPress={() => setSortedColumn((prev) => SortValue('Email', prev))}
          justifyContent="flex-end"
          p="$1.5"
        >
          Email
        </SortableHeader>
        <SortableHeader
          width="20%"
          show={sortedColumn.name === 'Phone'}
          order={sortedColumn.order}
          notchChange={-2}
          onPress={() => setSortedColumn((prev) => SortValue('Phone', prev))}
          justifyContent="flex-end"
          p="$1.5"
        >
          Phone
        </SortableHeader>
        <SortableHeader
          width="10%"
          show={sortedColumn.name === 'EnrollmentDate'}
          order={sortedColumn.order}
          notchChange={-2}
          onPress={() => setSortedColumn((prev) => SortValue('EnrollmentDate', prev))}
          justifyContent="flex-end"
          p="$1.5"
        >
          Enrollment Date
        </SortableHeader>
        <SortableHeader
          width="5%"
          show={sortedColumn.name === 'Status'}
          order={sortedColumn.order}
          notchChange={-2}
          onPress={() => setSortedColumn((prev) => SortValue('status', prev))}
          justifyContent="flex-end"
          p="$1.5"
        >
          Status
        </SortableHeader>
      </XStack>
    </YStack>
  );
}, areEqual);

