import React, {Component} from 'react';
import {View,StyleSheet,Text,Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Detalles extends Component {
    render() {
        const {params} = this.props.route;
        return ( 
            <LinearGradient colors={['#000046', '#1CB5E0', '#000046']} style={styles.linearGradient}>
                <LinearGradient colors={['#000000', '#434343']} style={styles.item}>
                    <Text style={styles.title}>{params.itemObject.title}</Text>
                    <Image 
                        source={{uri:params.itemObject.medium_cover_image}} 
                        style={{
                            height: 170,
                            width: 120, 
                            borderTopRightRadius: 30,
                            borderBottomLeftRadius: 30,
                            borderColor: 'white',
                            borderWidth: 1
                        }} 
                    />
                    <Text style={styles.summary}>{params.itemObject.summary}</Text>
                </LinearGradient>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },
    container: {
        flex: 1,
        marginTop: 20,
    },
    item: {
        flex: 1,
        backgroundColor: 'black',
        padding: 1,
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
    },
    title: {
        fontSize: 17,
        padding: 15,
        color: 'white',
        fontWeight: 'bold',
    },
    summary: {
        flex: 1,
        fontSize: 11,
        padding: 15,
        color: 'white',
    },
});