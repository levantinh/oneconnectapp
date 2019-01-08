import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bdInput: { borderRadius: 20, borderColor: '#000', borderWidth: 1, marginTop: 20 }
    ,
    logo: { width: 150, height: 150 },
    inpText: { width: 250, height: 40, color: '#000', padding: 3,marginLeft:5},
    images:{
        width:150,
        height:150
    },
    txt: {
        fontWeight: 'bold',
        fontSize: 18,
        color:'#fff',
    },
    centers:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
    ,
    btnLogin: { width: 200, borderRadius: 20, paddingVertical: 10, backgroundColor: '#448AFF' },
    touchbtn: { textAlign: 'center', marginTop: 10, backgroundColor: '#000', width: 150, height: 40, borderColor: '#000', borderRadius: 20, borderWidth: 1 },
    itemflat: { flex: 1, height: 113, borderColor: '#000', borderWidth: 2, marginTop: 2 },

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
    marginTop:10,
    width: 200,
    height:50,
    backgroundColor:'#720E0E',
    borderRadius:10,

  }

})
module.exports = styles;