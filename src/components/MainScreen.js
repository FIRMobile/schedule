import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    ActivityIndicator,
} from 'react-native';
import { Field, reduxForm } from 'redux-form';



const MainScreen = () => (
    <View style={styles.container}>
        <Text>Programm Main</Text>

    </View>
);

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#bfd8ff',
    },
    logo: {
        height: 45,
        marginBottom: 25,
    },
    containerLogIn: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 260,
        width: 280,
        backgroundColor: '#eaf2ff',
        borderRadius: 4,
    },
    header: {
        fontSize: 18,
        marginBottom: 25,
        color: '#2368b8',
    },
    textInput: {
        alignSelf: 'stretch',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#888',
        fontSize: 14,
        padding: 4,
        marginBottom: 10,
        height: 40,
        marginHorizontal: 20,
        backgroundColor: '#fff',
    },
    btn: {
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3787ff',
        marginBottom: 10,
        marginTop: 20,
        marginHorizontal: 20,
        height: 40,
        borderRadius: 2,
        flexDirection: 'row',
    },
    btnText: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
    },
});
