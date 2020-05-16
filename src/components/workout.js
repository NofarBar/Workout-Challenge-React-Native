import React, {useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,ImageBackground} from 'react-native';
import CircleView from '../components/CircleView';
import {withNavigation} from 'react-navigation';


import Counter from './Counter';

//Returns the specific workout according to name number of reps and seconds
const Workout =({name,numRep, numSec,onDoneExercise,imageExercise})=>{

        return (
            <ImageBackground source={require('../../assets/screen3.jpg')} style={styles.imageBackground}>

                <View style={styles.container}>
                <CircleView images= {imageExercise} numRep={numRep} name={name} count={numSec} onDoneExercise={onDoneExercise}/>
                <View style={ styles.button}>
                {!numSec>0?   <TouchableOpacity style={{ height: 100,alignSelf:'center' }} onPress={onDoneExercise}>
                        <Text style={styles.text}>Next!</Text>
                </TouchableOpacity> :null}
              
                </View>
                </View>
            </ImageBackground>
        );
};

const styles = StyleSheet.create({
    container: {
        position : 'absolute',
        top : 0,
        left : 0,
        right : 0,
        bottom : 0
      },
      button:{
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 70
      },
      buttonStyle:{
        backgroundColor: 'red'
      },
    text:{
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        fontStyle: 'italic',
      },  imageBackground: {
        flex: 1,
        resizeMode: "cover",
        //justifyContent: "center"
      },
     
     
    });

export default Workout;