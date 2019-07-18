import { Router, Scene,Stack } from 'react-native-router-flux';
import React from 'react';
import InitialScreen from '../InitialScreen/InitialScreen';
import HomeScreen from '../HomeScreen/HomeScreen';
import NavSidebar from '../Components/NavSidebar';
import Trending from '../Trending/Trending'



const RouterFile=()=>{

    return (
        <Router>
            <Stack key="root">
            <Scene key="initial" component={InitialScreen} initial={true} />
            
            <Scene key="drawer" drawer wrap={false} drawerWidth={260} contentComponent={NavSidebar} hideNavBar>
                <Scene key="home" component={HomeScreen} hideNavBar />
                <Scene key="trending" component={Trending} hideNavBar/>    
            </Scene>
          
            
            
</Stack>
            </Router>
    )
}

export default RouterFile;