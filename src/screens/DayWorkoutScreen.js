import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button,TouchableOpacity } from 'react-native';
import CircleView from '../components/CircleView';
import {withNavigation} from 'react-navigation';
import Workout from '../components/workout';

const DayWorkoutScreen =({navigation})=>{
  //Counter to show the next exercise  when pressed next
  const [exercise,setExercise] = useState(1);
    //Day number of of reps and seconds for plank/
  const numRep=navigation.getParam('numRep');
  const numSec=navigation.getParam('numSec');

      switch(exercise){
        case 1:
          return (
            <Workout name="Squat" numRep={numRep} numSec={0} onDoneExercise={()=>setExercise(exercise + 1)} imageExercise ={require('../../assets/squat-exercise-illustration.jpg')}/>
          );
        case 2:
          return (
            <Workout name="Lunges" numRep={numRep} numSec={0} onDoneExercise={()=>setExercise(exercise + 1)} imageExercise ={require('../../assets/lunge.jpg')}/>
            );
        case 3:
          return (
            <Workout name="Crunches" numRep={numRep} numSec={0} onDoneExercise={()=>setExercise(exercise + 1)} imageExercise ={require('../../assets/crunches-exercise-illustration.jpg')}/>
            );
        case 4:
          return (
            <Workout name="Seconds Plank" numRep={numSec} numSec={numSec} onDoneExercise={()=>setExercise(exercise + 1)} imageExercise ={require('../../assets/plank-exercise-illustration.jpg')}/>
            );
        default:
            return ( 
              navigation.goBack()
            );
      }
        
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
  }
 
 
});
export default withNavigation( DayWorkoutScreen);