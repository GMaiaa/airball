import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@screens/Home'; 
import Matchs from '@screens/Matchs';
import News from '@screens/News'; 
import Menu from '@screens/Menu'; 
import { Feather, FontAwesome, Entypo, FontAwesome6, Ionicons } from '@expo/vector-icons';
import { Container, NewCourt, MarginRight, MarginLeft, screenOptions, tabBarLabelStyle } from './styles';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabBar() {
  return (
    <NavigationContainer>
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
                <MarginRight>
                  <FontAwesome6 name="basketball" size={size} color={color} />
                </MarginRight>
              ),
              tabBarLabelStyle: {
                ...tabBarLabelStyle,
                marginRight: 50,
              } 
            }} 
          />
          <Tab.Screen 
            name="News" 
            component={News} 
            options={{ 
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <MarginLeft>
                  <FontAwesome name="newspaper-o" size={size} color={color} />
                </MarginLeft>
              ),
              tabBarLabelStyle: {
                ...tabBarLabelStyle,
                marginLeft: 50,
              } 
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

        <NewCourt>
          <Ionicons name="add" size={24} color="#FFFFFF" />
        </NewCourt>

      </Container>
    </NavigationContainer>
  );
}

export default TabBar;
