import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#FCE7F9',
        alignItems : 'center',
        justifyContent: 'center'
    },
    itemContainer:{
        height: 400, 
        width: 350,
        alignItems: 'center',
        backgroundColor: "#FFF",
        borderRadius: 23,
        marginBottom: 24,
        marginLeft: 'auto',
        marginRight: 'auto',

    },

    titleText:{
        zIndex: 1,
        position: 'absolute',
        fontSize: 27,
        fontFamily: 'Lobster_400Regular',
        color: '#000',
        lineHeight: 30,
        alignContent: "center",
        justifyContent : 'center',
        alignSelf: 'center',
        top: 40,
        marginBottom: 10,
    },
    itemTouch:{
        height: '85%',
        width: '100%',
        backgroundColor: '#eee',
        borderTopLeftRadius: 25,
       
    },
    itemImg:{
        borderTopRightRadius: 25,
        height: '100%',
        width: '100%',
     
    },
    space:{
        padding: 40,
    },
    itemLegend:{
        marginTop: 8,
        paddingLeft: 12,
        paddingRight: 12,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    itemLegendText:{
        marginRight: 'auto',
        flexDirection: 'column',
    },
    itemScoreHearth:{
        marginTop: 7,
        flexDirection: 'row',
        justifyContent: 'center'

    }
});

export default styles;
