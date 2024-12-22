import { ExternalLink } from "@tamagui/lucide-icons";
import { Anchor, H2, Paragraph, XStack, YStack } from "tamagui";
import { ToastControl } from "app/CurrentToast";
import { ContactForm } from "../../Components/ContactForm";
import DialogOrSheet from "Components/DialogOrSheet";
import React, { useState } from "react";
import { Toast, useToastController, useToastState } from "@tamagui/toast";
import { Button, H4, isWeb } from "tamagui";

export default function AdminPage() {
  const [open, setOpen] = useState(false);
  return (
    <YStack f={1} ai="center" gap="$8" px="$10" pt="$5" bg="$background">
      <H2>Student page</H2>
      <YStack gap="$2" ai="center">
        <H4>Add Student </H4>
        <XStack gap="$2" jc="center">
          <Button
            onPress={() => {
              setOpen(true);
            }}
          >
            Add New
          </Button>
          <Button
            onPress={() => {
              setOpen(false);
            }}
          >
            Hide
          </Button>
        </XStack>

        <H4>office staff </H4>
        <XStack gap="$2" jc="center">
          <Button
            onPress={() => {
              setOpen(true);
            }}
          >
            Add New
          </Button>
          <Button
            onPress={() => {
              setOpen(false);
            }}
          >
            Hide
          </Button>
        </XStack>
      </YStack>
      <DialogOrSheet showModal={open} setShowModal={setOpen}>
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
  );
}
