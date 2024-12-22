import React, { useState } from "react";
import { Button,  Input, TextArea, YStack, XStack, Spinner ,Form} from "tamagui";
import GetFormattedInput from "../utils/GetFormattedInput";
import Text from "./Text";

function SectionItem({ title, value, placeholder, onChange, disabled }: any) {
  return (
    <YStack width="100%" $md={{ width: "45%" }} mb="$3">
      <Text mb="$1" fontWeight="600" color="$color">
        {title}
      </Text>
      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        backgroundColor="rgba(255, 255, 255, 0.1)"
        borderColor="rgba(255, 255, 255, 0.2)"
        color="$color"
      />
    </YStack>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<"Contact Us" | "submitting" | "submitted">("Contact Us");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (value: any, setter: any, options: any) => {
    GetFormattedInput(value, setter, options.phnNumber, options.isUpper, options.numFormat, options.isEmail);
  };

  const handleSubmit = () => {
    setStatus("submitting");
    console.log("Form submitted:", { FirstName, LastName, email, phone, message });
    setTimeout(() => setStatus("submitted"), 2000); // Simulate form submission delay
  };

  return (
    <YStack gap="$4" padding="$4" borderWidth="$0.5" borderColor="$rhythm20" backgroundColor="transparent">
      <Text textAlign="center" fontWeight="bold" fontSize={"$lg"} color="$color" mb="$4">
        Contact Us
      </Text>

      {/* Contact Form Fields */}
      <XStack flexWrap="wrap" justifyContent="space-between">
        <SectionItem
          title="First Name"
          value={FirstName}
          onChange={(e) => handleInputChange(e.nativeEvent.text, setFirstName, { isUpper: true })}
          placeholder="First Name"
          disabled={status !== "Contact Us"}
        />
        <SectionItem
          title="Last Name"
          value={LastName}
          onChange={(e) => handleInputChange(e.nativeEvent.text, setLastName, { isUpper: true })}
          placeholder="Last Name"
          disabled={status !== "Contact Us"}
        />
      </XStack>

      <XStack flexWrap="wrap" justifyContent="space-between">
        <SectionItem
          title="Email"
          value={email}
          onChange={(e) => handleInputChange(e.nativeEvent.text, setEmail, { isEmail: true })}
          placeholder="Your Email"
          disabled={status !== "Contact Us"}
        />
        <SectionItem
          title="Phone"
          value={phone}
          onChange={(e) => handleInputChange(e.nativeEvent.text, setPhone, { phnNumber: true })}
          placeholder="Your Phone Number"
          disabled={status !== "Contact Us"}
        />
      </XStack>

      <YStack mb="$4">
        <Text mb="$1" fontWeight="600" color="$color">
          Message
        </Text>
        <TextArea
          value={message}
          onChange={(e) => setMessage(e.nativeEvent.text)}
          placeholder="Your Message"
          disabled={status !== "Contact Us"}
          backgroundColor="rgba(255, 255, 255, 0.1)"
          borderColor="rgba(255, 255, 255, 0.2)"
          color="$color"
        />
      </YStack>
        <Button
          icon={status === "submitting" ? () => <Spinner /> : undefined}
          backgroundColor="rgba(255, 255, 255, 0.2)"
          color="$color"
          hoverStyle={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
        >
          {status === "Contact Us" ? "Add " : status === "submitting" ? "Sending..." : "Sent!"}
        </Button>
     
    </YStack>
  );
}
