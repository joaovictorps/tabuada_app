import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    imageBackground: {
        width: '100%', 
        height: '100%'
    },

    containerMain: {
        alignItems: 'center',
        justifyContent: 'center',
        flex:1,
        
    },


    container: {
        backgroundColor: 'rgba(255,255,255,0.85)',
        borderRadius: 10,
        margin: 20,
        padding: 20,
        alignItems: "center",
        width: 300
    },

    containerButtons: {
        width:320,
        marginTop: 20,
        alignItems:"center",
        justifyContent: 'space-around',
        flexDirection: 'row'
    },

    title: {
        marginBottom: 20,
        paddingHorizontal: 10, 
        fontSize: 26,
        textTransform: "uppercase",
        fontWeight: "700",
        textAlign: "center",
        color:"#1f4f66"
    },

    question: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    },

    text: {
        marginRight: 10,
        fontSize: 26
    },

    input: {
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 3,
        width: 100,
        paddingHorizontal: 5,
        marginLeft: 10 ,
        fontSize: 26
    },

    button: {
        minWidth: 130,
        marginBottom: 10
    }
});

export default styles;