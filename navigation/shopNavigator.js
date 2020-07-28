import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import ProductOverViewScreen from '../screens/shop/ProductOverViewScreen';

import Color from '../constants/Color';
import {Platform} from 'react-native';

const Productnavigator = createStackNavigator({
    ProductOverViewScreen: ProductOverViewScreen

},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:Platform.OS ==='android'?  Color.primary: ''

        },
        headerTintColor:Platform.OS === 'android'? 'white': Color.primary
    }
});
//show product title
ProductOverViewScreen.nvigationOptions={
    headerTitle:'All products'
};

export default createAppContainer(Productnavigator);