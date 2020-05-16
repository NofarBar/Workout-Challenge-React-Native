import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import WeekWorkoutScreen from './src/screens/WeekWorkoutScreen';
import DayWorkoutScreen from './src/screens/DayWorkoutScreen';


const navigator = createStackNavigator({
  WeekWorkout: WeekWorkoutScreen,
  DayWorkout: DayWorkoutScreen

}, {
  initialRouteName: "WeekWorkout",
    defaultNavigationOptions: {
      title: "Workout Challenge"
    }
  }
);
export default createAppContainer(navigator);