import React, {useEffect} from 'react';
import Routes from './src/routes/routes';
import SplashScreen from 'react-native-splash-screen';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <Routes />;
};
export default App;
