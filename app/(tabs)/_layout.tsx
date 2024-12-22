import { Link, Tabs } from 'expo-router'
import { Button, useTheme } from 'tamagui'
import { Atom, AudioWaveform, BookA } from '@tamagui/lucide-icons'


export default function TabLayout() {
  const theme = useTheme()

  return (
    <>
    
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.red10.val,
        tabBarStyle: {
          backgroundColor: theme.background.val,
          borderTopColor: theme.borderColor.val,
        },
        headerStyle: {
          backgroundColor: theme.background.val,
          borderBottomColor: theme.borderColor.val,
        },
        headerTintColor: theme.color.val,
      }}
    >
      <Tabs.Screen
        name="Admin"
        options={{
          title: 'Admin',
          tabBarIcon: ({ color }) => <BookA color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Student"
        options={{
          title: 'Student',
          tabBarIcon: ({ color }) => <BookA color={color} />,
          headerShown: false,
          
        }}
      />
       <Tabs.Screen
        name="index"
        options={{
          title: 'DashBoard',
          tabBarIcon: ({ color }) => <BookA color={color} />,
          headerShown: false,
          
        }}
        
      />
    </Tabs>
    </>
  )
}
