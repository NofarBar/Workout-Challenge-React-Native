import React, {useState} from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import {withNavigation} from 'react-navigation';

import Counter from './Counter';

/*Component show the image of the exercise and number of reps. For Plank
shows a react counter*/
const CircleView =({images,numRep, count,name,navigation,onDoneExercise})=>{
  const [done,setDone] = useState(false);

        return (
          <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{numRep} {name}</Text>
          </View>
            <View style={styles.CircleShapeView}>
            {count >0 ?    <Counter  count={count} onCountDone={()=>setDone(true)} />: null}
            <Image style={styles.image} source={images} />
            {done ?    <TouchableOpacity  onPress={onDoneExercise}>
              <Text style={styles.text2}>Done! </Text>
              <Text style={styles.text2}> Back to main screen</Text>
            </TouchableOpacity>: null}
            
            </View>   
            
          </View>
        );
};

const styles = StyleSheet.create({
  container: {
      //flex: 1,
      justifyContent: 'center',
       alignItems: 'center',
      // position : 'absolute',
       top : 0,
       left : 0,
       right : 0,
       bottom : 0
    },
    textContainer: {
      width: 200,
      height: 50,
      borderRadius: 20,
      backgroundColor: 'white',
      marginBottom: 40,
      marginTop: 100,
      borderWidth: 3,
      borderColor: '#412C49'
    },
  
    CircleShapeView: {
      width: 320,
      height: 320,
      borderRadius: 320/ 2,
      backgroundColor: 'white',
      borderWidth: 3,
      borderColor: '#412C49'
  },
  image: {
    width: 150,
    height: 150,
    //borderRadius:170 /2,
    marginTop: 20,
    alignSelf: 'center'
},
text: {
  alignSelf: 'center',
  marginTop: 10,
  fontWeight: 'bold',
  fontSize: 20,
  fontStyle: 'italic',
},
text2:{
  alignSelf: 'center',
  fontWeight: 'bold',
  fontSize: 18,
  fontStyle: 'italic',
  marginBottom:10
}

  
 
});

export default withNavigation(CircleView);