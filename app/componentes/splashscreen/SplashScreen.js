import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class SplashScreen extends Component {
    constructor(props){
        super();
    }

    render(){
        return(
            <LinearGradient colors={['#000046', '#1CB5E0', '#000046']} style={styles.linearGradient}>
                <LottieView 
                    source={require('../../../assets/splash.json')} 
                    autoPlay 
                    loop= {false}
                    onAnimationFinish= {() => {
                        this.props.navigation.replace('Login');
                    }} 
                />
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },
});