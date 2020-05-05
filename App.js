import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import music from '../Cogent-app - Copy/assets/music.jpg'
const axios = require('axios').default;
import {LivePlayer} from "react-native-live-stream";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      data : null,
      play: false
    };
  }
  componentDidMount() {
    axios.post('https://www.mantrafm.com.ar/mantrafm/cmd/action.php',{action: 'getShowDetails', showid: 357})
    .then(function (response) {
      console.log(response.body);
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  
  ShowHideComponent = () => {
    
    if (this.state.show == true) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
    
  };
  
  soundHandler=()=>{
    console.log("button Pressed")
    if (this.state.play == true) {
      this.setState({ play: false });
    } else {
      this.setState({ play: true });
    }
      {
   
          try {
      <LivePlayer source={{uri:"rtmp://live.hkstv.hk.lxdns.com/live/hks"}}
        ref={(ref) => {
            this.player = ref
        }}
        style={styles.video}
        paused={false}
        muted={false}
        bufferTime={300}
        maxBufferTime={1000}
        
      />
        } catch (e) {
            console.log(`cannot play the sound file`, e)
        }

      }
    }
  
  
  render(){
    let trans= this.state.show? {
    height: '35%',
    position: 'absolute',
    width:'100%',
    bottom: 0,
    margin: 'auto',
    borderTopRightRadius: 40,
    borderTopLeftRadius:40,
    backgroundColor: '#2d8cff',
    zIndex:500,
    transform: [{ translateY: 0 }]
    } : 
    {
    height: '35%',
    position: 'absolute',
    bottom: 0,
    margin: 'auto',
    width:'100%',
    borderTopRightRadius: 40,
    borderTopLeftRadius:40,
    backgroundColor: '#2d8cff',
    zIndex:500,
    transform: [{ translateY: -1000 }]
    }
  let iconName= this.state.play? "ios-radio-button-on" : "ios-play"
  return (
    <View style={styles.Container}>
      <View style={trans}>
        <View style={{padding: 40}} >
        <View >
          <Text style={{color: 'white', fontSize:23, fontWeight:'600'}}>El Portal</Text>
          <Text style={{color: 'yellow', fontSize:12, fontWeight:'300'}}>Maga</Text>
        </View>
        <Text  style={{color: 'white', fontSize:18, fontWeight:'400'}}>10:30 - 11:40</Text>
        <Text  style={{color: 'white', fontSize:12, fontWeight:'200'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Text>
      </View>
   </View>
        
      <ImageBackground source={music} style={styles.inner}>
        
        
        <View style={styles.box}>
        <TouchableOpacity style={styles.button} onPress={this.soundHandler}>
          <Ionicons name={iconName} size={40} color="white"  
            />
        </TouchableOpacity>
         <View>
          <Text style={{color: 'red', fontWeight:'400', fontSize:15}}>91.9</Text>
         </View>
         
         <View>
          <Text style={{color: 'white', fontWeight:'bold', fontSize:27}}>Welcome to</Text>
          <View style={styles.Flex}>
          <Text style={{color: 'white', fontWeight:'500', fontSize:23}}>Mantra FM </Text>
          <Text style={{color: 'white', fontWeight:'600',fontSize:30}}>91.9</Text>
         </View>
         </View>
         <Text style={{color: 'white', fontWeight:'300', fontSize:15}}>Make life with music and endless inspirational</Text>
         <TouchableOpacity style={styles.Touch} onPress={this.ShowHideComponent}>
           <Text style={{color: 'white', fontWeight:'400', textAlign: 'center', fontSize:17}}>Show details</Text>
         </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>

  );
  }
      
}

const styles = StyleSheet.create({
  Container:{
    backgroundColor: '#1f1d39',
    justifyContent:'center',
    height: '100%',
    zIndex:100
  },
  details:{
    height: '35%',
    position: 'absolute',
    bottom: 0,
    margin: 'auto',
    borderTopRightRadius: 20,
    borderTopLeftRadius:20,
    backgroundColor: '#2d8cff',
    zIndex:500,
  },
  Flex:{
    flexDirection:'row'
  },
  button:{
    height: 70,
    width: 70,
    borderRadius: 50,
    marginTop: -60,
    backgroundColor: '#2d8cff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    alignSelf: 'flex-end',
    alignItems: 'center',
    elevation: 13,
    paddingTop: 12,
    paddingLeft : 0
  },
  Touch:{
    borderRadius: 15,
    backgroundColor: '#2d8cff',
    height: 50,
    width: 200,
    padding: 13,
    alignSelf:'center',
    shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.33,
        shadowRadius: 2.90,
        elevation: 6,
  },
  inner:{
    borderRadius: 20,
    height: '90%',
    width: '80%',
    margin: 'auto',
    
  },
  box:{
    backgroundColor: '#383676',
    justifyContent:'space-evenly',
    borderRadius: 20,
    height: '40%',
    width: '104%',
    position: 'absolute',
    bottom: -2,
    marginLeft: -5,
    borderRadius:20,
    shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.50,
        elevation: 5,
        padding:15
  }
})

export default App
