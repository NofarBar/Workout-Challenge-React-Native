import React,{useState} from 'react';
import { StyleSheet, Text, View,ImageBackground, Button } from 'react-native';
import DayWorkoutScreen from './DayWorkoutScreen';
import DayOption from '../components/DayOption';

//All Days Workout option
const WeekWorkoutScreen =({navigation})=>{
  const [exercise,setExercise] = useState(1);
        //All DayOption
        return (
          <View style={styles.container}>
            <ImageBackground source={require('../../assets/screen3.jpg')} style={styles.imageBackground}>
                <Text style={styles.text}>One Week Challenge!</Text>
               <DayOption  name="Day #1" numRep={20} numSec={30}/>
               <DayOption  name="Day #2" numRep={25} numSec={35}/>
               <DayOption  name="Day #3" numRep={30} numSec={40}/>
               <DayOption  name="Day #4" numRep={35} numSec={45}/>
               <DayOption  name="Day #5" numRep={40} numSec={50}/>
               <DayOption  name="Day #6" numRep={45} numSec={55}/>
               <DayOption  name="Day #7" numRep={50} numSec={60}/>
           </ImageBackground>
     
          </View>
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
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
  },
  text:{
    alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        fontStyle: 'italic',
        color: 'white',
      }
 
 
});

export default WeekWorkoutScreen;