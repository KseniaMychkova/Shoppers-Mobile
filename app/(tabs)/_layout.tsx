import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome'
import React from 'react';


export default function TabLayout() {
    return (
        <>
            <Tabs screenOptions={{ headerShown: false }}>
                <Tabs.Screen
                    name="Home"
                    options={{
                        title: '',
                        tabBarIcon: ((focused) => <FontAwesome size={30} name='home' color={focused ? '#F9EF05' : 'black'} />),
                        tabBarActiveTintColor: '#F9EF05'
                    }} />

                <Tabs.Screen
                    name="Profile"
                    options={{
                        title: '',
                        tabBarIcon: ((focused) => <FontAwesome size={30} name='user' color={focused ? '#F9EF05' : 'black'} />),
                        tabBarActiveTintColor: '#F9EF05'
                    }} />
                <Tabs.Screen
                    name="Basket"
                    options={{
                        title: '',
                        tabBarIcon: ((focused) => <FontAwesome size={30} name='shopping-cart' color={focused ? '#F9EF05' : 'black'} />),
                        tabBarActiveTintColor: '#F9EF05'
                    }} />

            </Tabs>
        </>
    );
}