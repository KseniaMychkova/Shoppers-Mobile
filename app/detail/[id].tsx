import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import Product1 from '../../assets/images/Product1';
import Share from '../../assets/images/Share';
import ArrowBack from '../../assets/images/ArrowBack';
import productsCard from '../../storage/index';
import { iProducts } from "@/interfaces";
import { useLocalSearchParams, useRouter } from "expo-router/build/hooks";
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'
import arrBasket from "@/storage/basket";

export default function Detail() {
    const router = useRouter();
    const params: any = useLocalSearchParams();
    const [product, setProduct] = useState<iProducts[]>([]);

    useEffect(() => {
        const filerProductCard = productsCard.filter(el => el.id === Number(params.id));
        setProduct(filerProductCard);
    }, [params.id]);

    const addToBasket = async() =>{
        try {
            await AsyncStorage.setItem('products', JSON.stringify(product))
            
            console.log('success set item');

            router.replace('/(tabs)/basket')
            
        } catch (error: any) {
            console.error(error.message)
        }
    }
    return (
        <ScrollView style={styles.wrapper}>
            <View style={{ position: 'absolute', top: 57, width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <ArrowBack onPress={() => router.back()}/>
                <Share />
            </View>
            <Product1 width={'100%'} height={390} />
            <View style={{ paddingLeft: 5, gap: 14 }}>
                <Text style={styles.nameText}>{product[0]?.title}</Text>
                <Text style={styles.nameText}>Rs. {product[0]?.price}</Text>
            </View>
            <TouchableOpacity onPress={addToBasket} style={styles.btnAdd}>
                <Text style={styles.btnText}>Add to Cart</Text>
            </TouchableOpacity>
            <View style={{ marginTop: 12 }}>
                <Text style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 14 }}>More Details</Text>
                <Text style={{ alignSelf: 'center', width: 292, color: '#AAA8A8' }}>{product[0]?.description}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 32,
        paddingVertical: 30,
        gap: 30,
        backgroundColor: '#FFFFFF',
        position: 'relative',
    },
    nameText: {
        fontFamily: 'Inter',
        fontWeight: 600,
        fontSize: 20,
    },
    btnAdd: {
        width: 269,
        height: 50,
        borderRadius: 40,
        backgroundColor: '#F9EF05',
        alignSelf: 'center',
        marginTop: 38,
    },
    btnText: {
        fontFamily: 'Inter',
        fontWeight: 700,
        fontSize: 14,
        color: '#4D1717',
        textAlign: 'center',
        verticalAlign: 'middle',
        paddingVertical: 16,
    },
});