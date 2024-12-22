import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { useTheme, XStack } from "tamagui";
import areEqual from "../../utils/MemoFunction";

function PaginationButtons(props: {
  currentPage: number;
  setCurrentPage: any;
  length: number;
  fetchData?: any;
}) {
  const { currentPage, setCurrentPage, length, fetchData } = props;

  const theme = useTheme();

  return (
    <XStack space="$2" alignSelf="flex-end" alignItems="center">
      <AntDesign
        color={currentPage === 0 ? theme?.iconNeutral?.val : "white"}
        name="caretleft"
        size={20}
        onPress={() => {
          if (currentPage !== 0)
            setCurrentPage((prevState: number) => prevState - 1);
        }}
      />
      <AntDesign
        color={
          !length || currentPage === length - 1
            ? theme?.iconNeutral?.val
            : "white"
        }
        name="caretright"
        size={20}
        onPress={() => {
          if (currentPage !== length - 1) {
            fetchData && fetchData();
            setCurrentPage((prevState: number) => prevState + 1);
          }
        }}
      />
    </XStack>
  );
}

export default React.memo(PaginationButtons, areEqual);
