import AppStylesHousin from '../../../../../AppStyleHousin';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build();

const styles = (colorTheme) => {
  return EStyleSheet.create({
    h1Text:{
      fontFamily:'Poppins-Bold',
      color:AppStylesHousin.colorSet[colorTheme].whiteText,
      fontSize:AppStylesHousin.fontSet.xlarge,
    },
    h1TextGray:{
      fontFamily:'Poppins-Bold',
      color:AppStylesHousin.colorSet[colorTheme].textDarkGray,
      fontSize:AppStylesHousin.fontSet.middle,
    },

    h1ThemeText:{
      fontFamily:'Poppins-Bold',
      color:AppStylesHousin.colorSet[colorTheme].themeText,
      fontSize:AppStylesHousin.fontSet.middle,
    },

    buttonText:{
      fontFamily:'Poppins-SemiBold',
      color:AppStylesHousin.colorSet[colorTheme].whiteText,
      fontSize:AppStylesHousin.fontSet.normal,
    },

    subText:{
      fontFamily:'Poppins-Regular ',
      color:AppStylesHousin.colorSet[colorTheme].whiteText,
      fontSize:AppStylesHousin.fontSet.xsmall,
    },

    subTextGray:{
      fontFamily:'Poppins-SemiBold',
      color:AppStylesHousin.colorSet[colorTheme].subText,
      fontSize:AppStylesHousin.fontSet.small,
      textAlign:'justify',
      paddingHorizontal:'5%'
    },

    contentContainer:{
      width:'100%',
      height:'75%',
      justifyContent:'center'
    },

    imageStyleFullRadius:{width:'105%', height:'105%', overflow: 'hidden'},

    goBackAbsoluteContainer:{
      width: '100%', height: '10%',position:'absolute',
      top:'4%',
      zIndex:2,
      justifyContent:"center",
      paddingHorizontal:'5%',
      alignItems:'flex-start'
    },
    iconContainer:{
      width: '3rem',
      height: '3rem',
      backgroundColor:'white',
      borderRadius:'20rem',
      justifyContent:'center',
      alignItems:'center',
      paddingLeft:'1.5%'
    }
  });

};
export default styles;