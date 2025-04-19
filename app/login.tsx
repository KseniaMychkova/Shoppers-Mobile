import { StyleSheet, TouchableOpacity, Text, View, TextInput } from 'react-native';
import { Link, useRouter } from 'expo-router'
import { useState } from 'react'

export default function Signup() {
    const [user, setUser] = useState({ name: '', password: '' });
    const router = useRouter();

    function saveUserData(value: any, tag: any) {
        setUser(prevState => ({ ...prevState, [tag]: value }));
    }

    const goToProductsMenu = () => {
        try {
            if (!user.name || !user.password) throw new Error('пустое значение')
            if (user.password.length < 8) throw new Error('пароль не менее 8 символов')
            setUser({ name: '', password: '' })
            router.replace('/(tabs)/home');

        } catch (error: any) {
            console.error(error.message);
        }

    }

    return (
        <View style={{ flex: 1, gap: 67, paddingHorizontal: 25, justifyContent: 'center', backgroundColor: '#FFFFFF' }}>
            <View style={{ paddingLeft: 15 }}>
                <Text style={{ fontWeight: 400, fontSize: 24 }}>Welcome Back !</Text>
                <Text style={{ fontWeight: 400, fontSize: 12, color: '#606060' }}>Login with Username & password</Text>
            </View>
            <View style={styles.loginContainer}>
                <View style={{ gap: 12 }}>
                    <Text style={styles.textInput}>Username</Text>
                    <TextInput value={user.name} onChangeText={(value: any) => saveUserData(value, 'name')} style={styles.inputField}></TextInput>
                </View>
                <View style={{ gap: 12 }}>
                    <Text style={styles.textInput}>Password</Text>
                    <TextInput value={user.password} onChangeText={(value: any) => saveUserData(value, 'password')} style={styles.inputField} secureTextEntry></TextInput>
                </View>
                <TouchableOpacity
                    onPress={() => goToProductsMenu()}
                    style={{ backgroundColor: '#F9EF05', borderRadius: 40, height: 50 }}>
                    <Text style={styles.btnText}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', gap: 3, alignSelf: 'center' }}>
                <Text style={{ fontWeight: 300, fontSize: 14 }}>Create a new account?</Text>
                <Link href={'/signup'} style={{ color: '#120EDB' }}><Text style={{ fontWeight: 300, fontSize: 14 }}>Sign Up</Text></Link>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    loginContainer: {
        gap: 24,
        paddingVertical: 35,
        borderWidth: 1,
        borderColor: '#00000040',
        borderRadius: 20,
        padding: 36,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
    },
    textInput: {
        fontFamily: 'Inter',
        fontWeight: 700,
        fontSize: 14,
        paddingLeft: 14
    },
    inputField: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#CECECE',
        borderRadius: 40,
        height: 50,
        paddingLeft: 15
    },
    btnText: {
        color: '#D04444',
        fontWeight: 700,
        fontSize: 14,
        textAlign: 'center',
        verticalAlign: 'middle',
        paddingVertical: 16

    }
});
