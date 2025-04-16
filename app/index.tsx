import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import Basket from '../assets/images/basket'
import { useRouter } from 'expo-router';


export default function WelcomeScreen() {
    const Router = useRouter()
    return (
        <>
            <TouchableOpacity onPress={()=>Router.replace('/login')} style={{ flex: 1, backgroundColor: '#F9EF05', justifyContent: 'center', alignItems: 'center', gap: 41 }}>
                <Text style={styles.title}>WELCOME TO SHOPPERS</Text>
                <Basket />
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Inter',
        fontWeight: 600,
        fontSize: 36,
        textAlign: 'center'
    },
});
