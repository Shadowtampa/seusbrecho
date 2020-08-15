import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity}  from 'react-native';
import roupa from '../../assets/images/exemploCamisa.png'
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

const MainPage = () => {
    const {navigate} = useNavigation();

    function handleNavigationtoItemPage(){
        navigate('ItemDescription');
    }   
    function handleNavigationtoBrechoPage(){
        alert('Você Vai visitar o Brecho');
    }   
    function handleLikeItem(){
        alert('Você deu LIKE');
    }   

    return (
      
        <View style={styles.container}>
            <View style={{flexDirection: 'row', top: 0, backgroundColor: '#FFF', zIndex: 1, width: '100%', height: 80, position: 'absolute', margin: 0}}></View>
            <Text style={styles.titleText}>SeusBrecho</Text>
            <Icon name="message-square" size={20} color={"#131111"} style={{zIndex: 1, top: 43, left: 350, position: 'absolute', opacity: 0}}/>
            <View />
                <View style={styles.space}>
                    <Text> / </Text>
                </View>
            <FlatList data={[0,1,2]} style={{flex: 1, width: '100%'}} keyExtractor={item => String(item)} renderItem={(item) =>(
                            <View style={styles.itemContainer}>
                                <TouchableOpacity style={styles.itemTouch} onPress={handleNavigationtoItemPage}> 
                            <Image  source={roupa} style={styles.itemImg}>
                            </Image>
                            </TouchableOpacity>
                            <View style={styles.itemLegend}>
                                <View style={styles.itemLegendText}>
                                    <Text style={{ fontFamily: 'Raleway_600SemiBold', fontSize: 16 }} >Maiô Florido</Text>
                                    <TouchableOpacity style={styles.itemLegendText} onPress={handleNavigationtoBrechoPage}> 
                                    <Text style={{ fontFamily: 'Raleway_400Regular', fontSize: 13 }}>Alec's Modas</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.itemScoreHearth}>
                                    <TouchableOpacity  onPress={handleLikeItem}> 
                                        <Icon name="heart" size={24}  color={'#FF4500'} />
                                    </TouchableOpacity>

                                    <Text> 1K +</Text>
                                </View>
                            </View>
                        </View>
            )} />




            {/* <View style={styles.itemContainer}>
                <Image source={roupa} style={styles.itemImg}>
                </Image>
                <View style={styles.itemLegend}>
                    <View style={styles.itemLegendText}>
                        <Text style={{ fontFamily: 'Raleway_600SemiBold', fontSize: 16 }} >Maiô Florido</Text>
                        <Text style={{ fontFamily: 'Raleway_400Regular', fontSize: 13 }}>Alec's Modas</Text>
                    </View>
                    <View style={styles.itemScoreHearth}>
                        <Icon name="heart" size={24} style={styles.heartIcon} color={'#FF4500'} />
                        <Text> 1K +</Text>
                    </View>
                </View>
            </View> */}
        </View>
    );
}
export default MainPage;