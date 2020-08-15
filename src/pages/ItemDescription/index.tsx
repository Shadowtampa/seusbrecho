import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

function ItemDescription(){
    return (
        <View style={styles.container}>
             <Text>Descrição do item</Text>
        </View>
    );
}
export default ItemDescription;