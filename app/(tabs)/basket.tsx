import Header from "@/components/Header"
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native"
import Product3 from '../../assets/images/Product3'


function Basket() {
    return <>
        <Header />
        <View style={{ flex: 1, backgroundColor: '#ffffff', alignItems: 'center', gap: 97, paddingTop: 62 }}>
            <View style={{ gap: 29 }}>
                <View style={styles.productContainer}>
                    <Product3 style={{ width: 136 }} />
                    <View style={{ gap: 14 }}>
                        <Text style={styles.text}>Adidas Shoe</Text>
                        <Text style={{ color: '#827D7D', fontFamily: 'Inter', fontWeight: 600, fontSize: 12 }}>Qty: 1</Text>
                        <Text style={styles.text}>Rs. 20000.00</Text>
                    </View>
                </View>
                <View style={styles.productContainer}>
                    <Product3 style={{ width: 136 }} />
                    <View style={{ gap: 14 }}>
                        <Text style={styles.text}>Adidas Shoe</Text>
                        <Text style={{ color: '#827D7D', fontFamily: 'Inter', fontWeight: 600, fontSize: 12 }}>Qty: 1</Text>
                        <Text style={styles.text}>Rs. 20000.00</Text>
                    </View>
                </View>
                <View style={styles.totalContainer}>
                    <Text style={styles.totalText}>Total :</Text>
                    <Text style={styles.totalText}>Rs. 40000</Text>
                </View>
            </View>
            <TouchableOpacity style={{ backgroundColor: '#F9EF05', borderRadius: 40, width: 269, height: 50 }}>
                <Text style={styles.btnText}>CHECKOUT</Text>
            </TouchableOpacity>
        </View>
    </>
}

export default Basket

const styles = StyleSheet.create({
    productContainer: {
        flexDirection: 'row',
        gap: 25,
        alignItems: 'center',
        width: 321,
        borderRadius: 20,
        shadowColor: '#00000040',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 4,
    },

    text: {
        fontFamily: 'Inter',
        fontWeight: 600,
        fontSize: 12
    },
    totalContainer: {
        borderTopWidth: 1,
        borderTopColor: '#C6C4C4',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 29
    },
    totalText: {
        fontFamily: 'Inter',
        fontWeight: 700,
        fontSize: 16
    },
    btnText: {
        color: '#000000',
        fontWeight: 700,
        fontSize: 14,
        textAlign: 'center',
        verticalAlign: 'middle',
        paddingVertical: 16

    }
})