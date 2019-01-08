import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inpText: {width:200, height:40, backgroundColor:'#448AFF',  color:'#fff', marginBottom:20 , paddingHorizontal:10},
  btnLogin:{width:200, borderRadius:20, paddingVertical:10, backgroundColor:'#448AFF'},
  touchbtn:{textAlign:'center'},
  itemflat:{flex:1, height:113, borderColor:'#000', borderWidth:2,marginTop:2},

  logo:{
    width: 130,
    height: 130,
    backgroundColor:'#720E0E'
  },
  textInpu:{
    width:340,
    height:40,
    borderColor:'gray',
    borderWidth:1,
    borderRadius:5,
    marginTop:5
  },
  confimPass:{
    width: 200,
    height:50,
    backgroundColor:'#720E0E',
    

  }

})
module.exports = styles;