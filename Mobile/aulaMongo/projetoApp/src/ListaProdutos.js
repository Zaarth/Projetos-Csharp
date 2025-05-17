import React, { useEffect } from "react";
import { View, Text, FlatList, Button } from "react-native";
import { api } from "../services/api";

export default function ListaProdutos({ navigation }) {
    const [produto, setProduto] = useState([]);

    async function carregar() {
        const res = await api.get('/');
        setProduto(res.data);
    }

    useEffect(() => {
        const unsubscribre = navigation.addListener('focus', carregar);
        return unsubscribre;
    }, [navigation]);

    async function excluir(id) {
        await api.delete(`/${id}`);
        carregar();
    }

    const renderItem = ({ item }) => (
        <View style={{ borderBottomWidth: 1, padding: 10 }}>
            <Text>{item.nome} - R$ {item.preco.toFixed(2)} - Qtde: {item.quantidade}</Text>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Button title='Editar'
                    onPress={() => navigation.navigate('Form', { id: item_id })} />
                <View style={{ width: 10 }}>
                    <Button title='Excluir'
                        onPress={() => excluir(item._id)}
                        color="red" />
                </View>
            </View>
        </View>
    );

    return (
        <View style={{ flex: 1, padding: 10 }}>
            <Button title='Novo produto'
                onPress={() => navigation.navigate('Form')} 
                />
            <FlatList
            data={produtos}
            keyExtractor = {renderItem}
            />
                
            
        </View>
    )

}