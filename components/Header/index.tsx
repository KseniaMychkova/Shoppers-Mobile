import { Text, View, StyleSheet } from "react-native";
import { Shadow } from 'react-native-shadow-2';

export default function Header() {
    return <Shadow
    sides={{ bottom: true }}
        distance={8}
        startColor="#00000040"
        offset={[0, 4]}
        paintInside={false} 
        containerStyle={styles.shadowContainer} 
        style={styles.header}
    >
        <View style={{backgroundColor: '#FFFFFF'}}>
            <Text style={{
                fontFamily: 'Inter', fontWeight: 600, fontSize: 32
            }}>SHOPPERS</Text>
        </View>

    </Shadow>
}

const styles = StyleSheet.create({
    shadowContainer: {
        width: '100%',
        marginBottom: 1,
    }, 
    header: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        paddingTop: 45,
        paddingBottom: 16,
    },
    
})