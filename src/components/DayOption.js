import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';


import Counter from './Counter';

//Show the Day number and when presses start the daily workout
const DayOption =({name,numRep, numSec,navigation})=>{
    const [dayName,setName]=useState('')
  return (
            <View style={styles.container}>
                <TouchableOpacity style={{ height: 100, marginTop: 10,alignSelf:'center' }} onPress={()=>{navigation.navigate('DayWorkout',{numRep: numRep,numSec: numSec})}}>
                    <Text style={styles.text}>{name} {dayName}</Text>
                </TouchableOpacity> 
            </View>
        );
};

const styles = StyleSheet.create({
  container: {
       height:60,
       width: 200,
       backgroundColor: 'white',
       alignSelf:'center',
       marginBottom: 5,
       marginTop: 10,
       borderRadius: 40,
       borderWidth: 5

    },
    text:{
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 22,
        fontStyle: 'italic',
        color: '#9B3294',


    }
  
 
});

export default withNavigation(DayOption);