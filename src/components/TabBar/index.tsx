import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home} from '@screens/Home'; 
import Matchs from '@screens/Matchs';
import News from '@screens/News';
import {CreateCourt} from '@screens/CreateCourt';
import Menu from '@screens/Menu'; 
import ButtonNew from '@components/ButtonNew';
import { Feather, FontAwesome, Entypo, FontAwesome6 } from '@expo/vector-icons';
import { Container, MarginRight, MarginLeft, screenOptions, tabBarLabelStyle } from './styles';

const Tab = createBottomTabNavigator();

function TabBar() {
  return (
    <Container>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{ 
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" size={size} color={color} />
            ),
            tabBarLabelStyle
          }} 
        />
        <Tab.Screen 
          name="Partidas" 
          component={Matchs} 
          options={{ 
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
                <FontAwesome6 name="basketball" size={size} color={color} />
            ),
            tabBarLabelStyle,
          }} 
        />
        <Tab.Screen 
          name="Novo" 
          component={CreateCourt} 
          options={{ 
            tabBarLabel: '',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <ButtonNew/>
            )
          }} 
        />
        <Tab.Screen 
          name="News" 
          component={News} 
          options={{ 
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
                <FontAwesome name="newspaper-o" size={size} color={color} />
            ),
            tabBarLabelStyle,
          }} 
        />
        <Tab.Screen 
          name="Menu" 
          component={Menu} 
          options={{ 
            headerShown: false,
            tabBarIcon: ({ color}) => (
              <Entypo name="menu" size={35} color={color} />
            ),
            tabBarLabelStyle
          }} 
        />
      </Tab.Navigator>
    </Container>
  );
}

export default TabBar;
