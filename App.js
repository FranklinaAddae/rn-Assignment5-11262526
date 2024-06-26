import React, { useContext } from 'react';
import { Image, Text } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import MyCardsScreen from './screens/MyCardsScreen';
import StatisticsScreen from './screens/StatisticsScreen';
import SettingsScreen from './screens/SettingsScreen';
import { ThemeProvider, ThemeContext } from './components/ThemeContext';

const Tab = createBottomTabNavigator();

// Import images
const homeIcon = require('./assets/images/home.png');
const cardsIcon = require('./assets/images/myCards.png');
const statisticsIcon = require('./assets/images/statistics.png');
const settingsIcon = require('./assets/images/settings.png');

function AppNavigator() {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <NavigationContainer theme={isDarkTheme ? DarkTheme : DefaultTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            // Choose the correct image based on the route name
            switch (route.name) {
              case 'Home':
                iconName = homeIcon;
                break;
              case 'My Cards':
                iconName = cardsIcon;
                break;
              case 'Statistics':
                iconName = statisticsIcon;
                break;
              case 'Settings':
                iconName = settingsIcon;
                break;
            }
            // Return an Image component as the icon
            return <Image source={iconName} style={{ width: size, height: size, tintColor: color }} />;
          },
          tabBarLabel: ({ color, focused }) => {
            let label;
            switch (route.name) {
              case 'Home':
                label = 'Home';
                break;
              case 'My Cards':
                label = 'My Cards';
                break;
              case 'Statistics':
                label = 'Statistics';
                break;
              case 'Settings':
                label = 'Settings';
                break;
            }
            return <Text style={{ color, fontSize: focused ? 16 : 16 }}>{label}</Text>;
          },
          tabBarStyle: {
            height: 60,
            display: 'flex',
            alignItems: 'center',
            paddingTop: 2,
            paddingBottom: 5,
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="My Cards" component={MyCardsScreen} />
        <Tab.Screen name="Statistics" component={StatisticsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
}

export default App;