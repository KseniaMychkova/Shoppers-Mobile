import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome'

export default function TabLayout() {
    return (
        <>
            <Tabs screenOptions={{ headerShown: false }}>
                <Tabs.Screen
                    name="Home"
                    options={{
                        title: '',
                        tabBarIcon: ((focused) => <FontAwesome name='home' color={focused ? '#F9EF05' : 'black'} />),
                        tabBarActiveTintColor: '#F9EF05'
                    }} />

                <Tabs.Screen
                    name="Profile"
                    options={{
                        title: '',
                        tabBarIcon: ((focused) => <FontAwesome name='user' color={focused ? '#F9EF05' : 'black'} />),
                        tabBarActiveTintColor: '#F9EF05'
                    }} />
                <Tabs.Screen
                    name="Basket"
                    options={{
                        title: '',
                        tabBarIcon: ((focused) => <FontAwesome name='shopping-cart' color={focused ? '#F9EF05' : 'black'} />),
                        tabBarActiveTintColor: '#F9EF05'
                    }} />

            </Tabs>
        </>
    );
}