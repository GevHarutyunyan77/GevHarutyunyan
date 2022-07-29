import resho from "../constants/resho";

const styles = {
   bottomContainer:{
    width: '100%',
    height:100*resho,
    justifyContent:"flex-end"
  },
  buttonBigView:{

    flex:1,
    flexDirection: "row",
    justifyContent: 'center'


  },
  buttonView:{
    width: 77*resho,
    height: 60*resho,
    backgroundColor: 'blue'

  },

  tabContent:{
    width: '100%',
    height:70*resho,
    flexDirection:'row',
    position:'relative'

  },
  buttonPlus:{
    width: 77*resho,
    height: 60*resho,
  },
  myImageStyle:{
    width:'100%',
    height: '100%',
    position: 'absolute'
  }

};

export default styles;
