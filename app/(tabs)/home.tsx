import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import productsCard from '../../storage/index'
import { iProducts } from '../../interfaces'
import Product1 from '../../assets/images/Product1'
import { useRouter } from 'expo-router'
import Header from '../../components/Header'
import { Shadow } from 'react-native-shadow-2';

export default function Home() {
    const router = useRouter()
    const container = productsCard.map((el: iProducts) =>
        <TouchableOpacity onPress={() => router.replace(`/detail/${el.id}`)} key={el.id}>
            <Shadow
                style={styles.card}
                distance={8}
                startColor="#00000040"
                offset={[0, 4]}
                paintInside={true}
            >
                <View style={{ paddingBottom: 15, alignItems: 'center', height: '100%', gap: 6, justifyContent:'center' }}>
                    <Product1 width={111} height={112} />
                    <Text style={{fontFamily: 'Inter',fontWeight: 600, fontSize: 12}}>{el?.title}</Text>
                    <Text style={{fontFamily: 'Inter',fontWeight: 600, fontSize: 12}}>Rs. {el?.price}</Text>
                </View>
            </Shadow>
        </TouchableOpacity>)

    return <ScrollView style={{ flex: 1 }}>
        <Header />
        <View style={{ backgroundColor: '#FFFFFF', paddingVertical: 62, gap: 30 }}>
            <View style={styles.wrapperProductsCards}>
                {container}
            </View>
        </View>
    </ScrollView>

}

const styles = StyleSheet.create({
    wrapperProductsCards: {
        flexDirection: 'row',
        gap: 48,
        flexWrap: 'wrap',
        justifyContent: 'center',

    },
    card: {
        overflow: 'hidden',
        borderRadius: 20,
        backgroundColor: 'white',
        padding: 15,
        width: 134,
        height: 169,
        alignItems: 'center',
        boxSizing: 'border-box'
    },


}
)