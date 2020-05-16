import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import CountdownCircle from 'react-native-countdown-circle';

//Countdown according to received time
const Counter = ({count, onCountDone})=>{
    const [startCount,setCounter] = useState(false);


    
        if (startCount){
            return(
            <View style = {styles.container}>
             <CountdownCircle
                seconds={count}
                radius={30}
                borderWidth={3}
                color="#9B3294"
                bgColor="#fff"
                textStyle={{ fontSize: 20 }}
                onTimeElapsed={ onCountDone}
                    
                /> 
            </View>
            );
       
        } else {
            return(
                <View style = {styles.container}>
                     <TouchableOpacity  onPress={()=> {setCounter(true);}}>
                        <Text style={styles.text}>Start!</Text>
                    </TouchableOpacity>
                </View>
            )
           

        }
   
    
   
 /* useEffect(() => {
    const interval = setInterval(() => {
        setCounter(count => count - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
    if (counter>0){
        return <Text style={styles.container}>{counter}</Text>
    } else {
          return  <Button  title='Done!'/>
    }*/

};


const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 10
  },
  text:{
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    fontStyle: 'italic',
    color: '#9B3294'

}
});
export default Counter ;

