import resho from "../../constants/resho";

const styles = {
  mainView: {
    flex: 1,
    justifyContent:'center'
  },

  image: {
    height: 241 * resho,
    width: 263 * resho,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 99 * resho,
  },

  loginText: {

    fontWeight: "600",
    fontStyle: "normal",
    fontSize: 24,
    lineHeight: 32,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 32 * resho,
    marginBottom: 20 * resho,
  },

  inputView: {
    width: 329 * resho,
    marginLeft: "auto",
    marginRight: "auto",
  },

  viewInputStyle: {
    width: "100%",
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

  loginButton: {
    width: "100%",
    height: 38 * resho,
    borderTopRightRadius: 5 * resho,
    borderTopLeftRadius: 5 * resho,
    borderBottomLeftRadius: 5 * resho,
    borderBottomRightRadius: 5 * resho,
    overflow: "hidden",
    backgroundColor: "#11493E",
    alignItems: "center",
    justifyContent: "center",
    marginTop:12
  },
   forgetView:{
    width:resho*132,

    marginLeft:'auto',
    marginTop: 14*resho
  },

  forget:{
    fontSize: 14,
    fontWeight: "400",
    fontStyle: "normal",
    textAlign:'center'
  },

  textInputStyle: {
    flex: 1,
    marginLeft: 10 * resho,
  },

  logo: {
    width: 18 * resho,
    height: 20 * resho,
    marginLeft: 10 * resho,
  },

  eye: {
    width: 20 * resho,
    height: 20 * resho,
  },

  eyeView: {
    width: 45 * resho,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0.25
  },


};

export default styles;
