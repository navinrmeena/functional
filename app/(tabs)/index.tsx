import { ExternalLink } from '@tamagui/lucide-icons'
import { Anchor, H2, Paragraph, XStack, YStack, Button } from 'tamagui'
import { ToastControl } from 'app/CurrentToast'
import Header from 'navigation/Header'


function Footer() {
  return (
    <XStack
      bg="$background"
      width="100%"
      px="$4"
      py="$3"
      ai="center"
      jc="center"
      borderTopWidth={1}
      borderTopColor="$borderColor"
    >
      <Paragraph fos="$2" color="$color">
        © 2024 Your Company
      </Paragraph>
    </XStack>
  )
}

export default function DashboardScreen() {
  return (
    <YStack f={1} bg="$background">
      {/* Navbar */}
     

      {/* Main Content */}
      <YStack f={1} ai="center" gap="$8" px="$10" pt="$5">
        <H2>DashBoard</H2>
        
    

      
      </YStack>

      {/* Footer */}
      <Footer />
    </YStack>
  )
}
