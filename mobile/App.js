/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 //import { Input } from 'react-native-elements';
 import {Text, StyleSheet } from 'react-native';
 
 
 import { Calendar, LocaleConfig } from 'react-native-calendars'
 LocaleConfig.locales['fr'] = {
   monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
   monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
   dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
   dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.'],
   today: 'Aujourd\'hui'
 }
 LocaleConfig.defaultLocale = "fr"
 function App () {
 
   return (
     <>
     
       <Text style={styles.test}>
         Prise Un Rendez-Vous
        
       </Text>
       <Text style={styles.test1}>
         Select a Date :
        
       </Text>
     

     
           <Calendar
             //   renderHeader={(date) => {
             //       return (<Text style={{ color: "#0066ff" }}>Mon calendrier {date.getDate()}</Text>)
             //   }}
        //        onDayLongPress={(e) => {
        //            console.log(`e`, e)
        //        }}
        //  onMonthChange={(e) => {
        //    console.log(`e`, e)
        //  }}
        //  onPressArrowLeft={(goBack) => {
 
        //    console.log("mois-passé")
        //    goBack()
        //  }}
        //  enableSwipeMonths
        //  onPressArrowRight={(goFuture) => {
        //    console.log("mois-suivant")
        //    goFuture()
        //  }}
        //  onDayPress={(e) => {
        //    console.log(`e`, e)
        //  }}
        //  firstDay={1}
        //  style={{ height: "100%" }
        //  }
       />
     </>
 
   )
 }

 const styles = StyleSheet.create({
  test:{
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
    marginTop: '5%'
  },
  test1:{
    fontSize: 24,
    // fontWeight: 'bold',
    color: 'black',
    marginLeft:'5%',
    marginTop: '5%'
  }
})

 
 export default App;