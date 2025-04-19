import Header from "../../components/Header";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Product3 from '../../assets/images/Product3';
import arrBasket from "../../storage/basket";
import { iProducts } from "../../interfaces";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Shadow } from 'react-native-shadow-2';



function Basket() {
    const [basket, setBasket] = useState<iProducts[]>(arrBasket);
    const [total, setTotal] = useState(0)

    const loadBasket = async () => {
        const existingProducts = await AsyncStorage.getItem('products');
        if (!existingProducts) return;
        const parsed = JSON.parse(existingProducts);
        setBasket(parsed)
        console.log('success get', parsed);

    }

    useEffect(() => {
        loadBasket()
    }, [])


    return <>
        <Header />
        <View style={{ flex: 1, backgroundColor: '#ffffff', alignItems: 'center', gap: 97, paddingTop: 62 }}>
            <View style={{ gap: 29 }}>
                {basket.map((el: iProducts) => (
                    <Shadow
                        key={el.id}
                        distance={4}
                        startColor="#00000040"
                        offset={[0, 4]}
                        containerStyle={{ marginBottom: 4 }}
                        style={{ borderRadius: 20 }}
                    >
                        <View style={styles.productContainer}>
                        <View style={[StyleSheet.absoluteFill, {
                                shadowColor: '#00000040',
                                shadowOffset: { width: 0, height: 4 },
                                shadowOpacity: 0.4,
                                shadowRadius: 4,
                            }]} />
                            <Product3 style={{ width: 136, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, }} />
                            <View style={{ gap: 14 }}>
                                <Text style={styles.text}>{el?.title}</Text>
                                <Text style={{ color: '#827D7D', fontFamily: 'Inter', fontWeight: 600, fontSize: 12 }}>Qty: 1</Text>
                                <Text style={styles.text}>Rs. {el?.price}</Text>
                            </View>
                        </View>
                    </Shadow>
                ))}
                <View style={styles.totalContainer}>
                    <Text style={styles.totalText}>Total :</Text>
                    <Text style={styles.totalText}>Rs. {total}</Text>
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
        backgroundColor: '#FFFFFF',
        position: 'relative', 
        overflow: 'hidden',
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