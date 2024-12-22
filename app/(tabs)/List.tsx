import React, { useState } from 'react';
import { ScrollView, YStack, XStack, Stack ,Input} from 'tamagui';
import { Feather } from '@expo/vector-icons';
import Text from 'Components/Text';

import { StudentTableList } from '../../Components/InvestorTableList';


const dummyData = [
  { id: "1", userId: "Vinay Basutkar", current: "₹11,22,155", invested: "₹9,83,200", unrealised: "₹1,38,955", percentage: "14.13%", xirr: "190.57%", mutualFunds: "₹11,22,155", stocks: "-", etf: "-", bank: "-" },
  { id: "2", userId: "VIKAS KUMAR", current: "₹4,94,975", invested: "₹4,20,008", unrealised: "₹74,967", percentage: "17.85%", xirr: "39.89%", mutualFunds: "₹4,94,975", stocks: "-", etf: "-", bank: "-" },
  { id: "3", userId: "Varsha Halwai", current: "₹6,03,472", invested: "₹4,91,342", unrealised: "₹1,12,130", percentage: "22.82%", xirr: "41.01%", mutualFunds: "₹6,03,472", stocks: "₹14,93,311", etf: "₹22,811", bank: "₹1,33,789" },
  // Add more dummy data as required
];

function InvestorTable() {
  
  return (
    <>
      <StudentTableList/>
    </>
  );
}

export default InvestorTable;
