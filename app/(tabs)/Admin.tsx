import { ExternalLink } from "@tamagui/lucide-icons";
import { Anchor, H2, Paragraph, XStack, YStack } from "tamagui";
import { ToastControl } from "app/CurrentToast";
import { ContactForm } from "../../Components/ContactForm";
import DialogOrSheet from "Components/DialogOrSheet";
import React, { useState } from "react";
import { Toast, useToastController, useToastState } from "@tamagui/toast";
import { Button, H4, isWeb } from "tamagui";
import { StudentTableList } from "Components/InvestorTableList";
import Header from "navigation/Header";

export default function AdminPage() {
  const [AddStudent, setAddStudent] = useState(false);
  const [showStudent, setShowStudent] = useState(false);
  const [AddStaff, setAddStaff] = useState(false);
  
  return (
    <>
    {/* <Header/> */}
    <YStack f={1} ai="center" gap="$8" px="$10" pt="$5" bg="$background">
      <H2>Admin page</H2>
      <YStack gap="$2" ai="center">
        <H4>Add Student </H4>
        <XStack gap="$2" jc="center">
          <Button
            onPress={() => {
              setAddStudent(true);
            }}
          >
            Add New
          </Button>
          <Button
            onPress={() => {
              setAddStudent(false);
            }}
          >
           Show All Stuents
          </Button>
        </XStack>

        <H4>office staff </H4>
        <XStack gap="$2" jc="center">
          <Button
            onPress={() => {
              setAddStaff(true);
            }}
          >
            Add New
          </Button>
          <Button
            onPress={() => {
              setAddStaff(false);
            }}
          >
            Show All Staff
          </Button>
        </XStack>
      </YStack>
      <DialogOrSheet showModal={AddStudent} setShowModal={setAddStudent}>
        {/* <ContactForm /> */}
        <StudentTableList />
        {/* <InvestorListLg/>
         */}
      </DialogOrSheet>
      <DialogOrSheet showModal={showStudent} setShowModal={setShowStudent}>
        {/* <StudentTableList /> */}
        <ContactForm />
      </DialogOrSheet>
      <DialogOrSheet showModal={AddStaff} setShowModal={setAddStaff}>
        <ContactForm />
      </DialogOrSheet>
      <XStack
        ai="center"
        jc="center"
        fw="wrap"
        gap="$1.5"
        pos="absolute"
        b="$8"
      >
  
      </XStack>
    </YStack>
    </>
  );
}
