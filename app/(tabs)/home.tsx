import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import productsCard from '../../storage/index'
import { iProducts } from "@/interfaces"
import Product1 from '../../assets/images/Product1'
import { useRouter } from 'expo-router'
import ArrowBack from '../../assets/images/ArrowBack'
import Header from '../../components/Header'


export default function Home() {
    const router = useRouter()
    const container = productsCard.map((el: iProducts) =>
        <TouchableOpacity onPress={() => router.push(`/detail/${el.id}`)} key={el.id}>
            <View style={styles.card}>
                <Product1 width={111} height={112} />
                <Text>{el?.title}</Text>
                <Text>Rs. {el?.price}</Text>
            </View>
        </TouchableOpacity>)

    return <ScrollView style={{flex: 1}}>
        <Header />
        <View style={{ backgroundColor: '#FFFFFF', paddingVertical: 62, gap: 30 }}>
            <View style={styles.wrapperProductsCards}>
                {container}
            </View>
            <View style={{ paddingLeft: 32, borderRadius: 50, backgroundColor: ' #F9EF05', width: 50, height: 50 }}>
                <ArrowBack onPress={() => router.back()} />
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
        borderRadius: 20,
        shadowColor: '#00000040',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
        padding: 15,
        height: 169,
        alignItems: 'center'
    },


}
)