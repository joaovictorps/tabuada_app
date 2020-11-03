import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    imageBackground: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff', 
        alignItems:"center",
        justifyContent: 'center',
        flex: 1
    },

    container: {
        margin: 20,
        paddingVertical: 20,
        alignItems: "center",
        backgroundColor: 'rgba(255,255,255,0.85)',
        borderRadius: 10,
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

    containerButtons: {
        flexDirection: 'row'
    },

    button: {
        width: 130,
        marginBottom: 10,
        paddingHorizontal: 5
    }
});

export default styles;