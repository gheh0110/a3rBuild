import {StyleSheet, Dimensions} from 'react-native';



const styles = StyleSheet.create({
    container: {
        margin: 20,
    },

    textInput:{
        fontSize: 20,
        marginBottom: 20,
    },

    iconContainer:{
        backgroundColor: '#ededed',
        padding: 5,
        borderRadius: 8,
        marginRight: 15,      
    },

    row:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        
    },
    locationText:{
        fontWeight: 'bold',

    },

});

export default styles;