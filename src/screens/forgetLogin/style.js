import resho from "../../constants/resho";

const styles = {
  mainView: {
    flex: 1,
    justifyContent: "center"
  },

  inputView: {
    width: 329 * resho,
    marginLeft: "auto",
    marginRight: "auto",
  },

  image: {
    width: 192 * resho,
    height: 218 * resho,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: resho * 68,
  },

  loginText: {
    fontWeight: "600",
    fontStyle: "normal",
    fontSize: 24,
    lineHeight: 32,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 85 * resho,
    marginBottom: 20 * resho,

  },

  text: {
    width: 328 * resho,
    height: 36 * resho,
    fontSize: 14,
    color: "#616062",
    letterSpacing: 0.25,
    fontStyle: "normal",
    fontWeight: "400",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom:32*resho
  },

  viewInputStyle: {
    width: '100%',
    height: 45 * resho,
    borderWidth: 1 * resho,
    borderTopRightRadius: 5 * resho,
    borderTopLeftRadius: 5 * resho,
    borderBottomLeftRadius: 5 * resho,
    borderBottomRightRadius: 5 * resho,
    overflow: "hidden",
    borderColor: "#DEDEDE",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16 * resho,
  },

  logo: {
    width: 18 * resho,
    height: 20 * resho,
    marginLeft: 10 * resho,
  },

  textInputStyle: {
    flex: 1,
    marginLeft: 10 * resho,
  },

  loginButton: {
    width: '100%',
    height: 38 * resho,
    borderTopRightRadius: 5 * resho,
    borderTopLeftRadius: 5 * resho,
    borderBottomLeftRadius: 5 * resho,
    borderBottomRightRadius: 5 * resho,
    overflow: "hidden",
    backgroundColor: "#11493E",
    alignItems: "center",
    justifyContent: "center",
    marginTop:12,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0.25
  },

  backto:{
    fontSize: 14,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing:0.25,
    textAlign:'center',
  },
  greenText:{
    fontSize:16,
    color:'#11493E'
  },

  backtoView:{
    width:resho*132,
    height: 24*resho,
    marginLeft:'auto',
    marginTop: 11*resho
  },


};

export default styles;
