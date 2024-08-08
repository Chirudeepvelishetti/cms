import { StyleSheet , Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    headercontainer: {
        backgroundColor: '#070720',
        flexDirection: 'row',
        paddingHorizontal: width * 0.00,
        paddingVertical:width*0.06,
        justifyContent: 'space-evenly'
    },
    headerimage: {
        width: width * 0.22,
        height: height * 0.02,
    },
    headerlogoview: {
        flex:0,
        alignItems:'center',
        justifyContent:'center'
    },
    headertext: {
        fontSize: width * 0.037,
        color: 'white',
        fontWeight: 'bold',
        
    },
    headertext1: {
        fontSize: width * 0.028,
        color: 'white',
        fontWeight: '600',
        textAlign: 'center',
        paddingTop: width * 0.02
    },
    headeroneconatiner:{
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingVertical: width * 0.02,
        paddingHorizontal:width*0.10,
        justifyContent: 'space-between',
        borderRadius: 10
    },
    headeronetextcont:{
        flexDirection:'row',
    },
    entypo:{
         color: '#070720', 
         paddingRight: width * 0.02 
    },
    headeronetext:{
        fontSize: width * 0.03,
        fontWeight: 'bold',
        color: '#070720'
    },
    headerlogin:{ fontWeight: 'bold', 
    paddingVertical: width * 0.010, 
    paddingHorizontal: width * 0.025,
    borderRadius: 5, 
    backgroundColor: '#070720', 
    color: 'white',
    fontSize: width * 0.03
     },
     sliderbg:{
    backgroundColor: '#070720',
    borderBottomRightRadius: width*0.03,
    borderBottomLeftRadius: width*0.03,
    paddingVertical: width*0.02,
    paddingLeft:width*0.08,
    height: width
     },
    sliderimage:{
    width: width*0.80,
    height: width,
    borderRadius: 10
    },
    homev2: {
    marginHorizontal: width*0.03,
    marginBottom: width*0.03,
    marginTop:width*0.05,
    borderRadius: 15,
    backgroundColor: 'white',
    elevation: 50
  },
    hometo: {
    paddingHorizontal: width*0.04,
    paddingVertical: width*0.02,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    elevation:10
  },
  btext:{
    fontSize:width*0.04,
    fontWeight:'bold',
    flexWrap: 'wrap',
    width: width*0.60,
    textAlign:'center',
    paddingTop:width*0.05
  },
  bimage:{
    width:width*0.20,
    height:width*0.20,  
  },
  hometext3: {
    fontSize: width*0.03,
    fontWeight: '300',
    textAlign: 'center',
    paddingVertical:width*0.05,
    backgroundColor:'#070720',
    color:'white',
    borderRadius:5,
    marginTop:width*0.02
  },
  footer:{
    paddingTop:width*0.31
  },
  scannerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    absoluteFillObject: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    //
    modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: add a background overlay
  },
  closeButton: {
    position: 'absolute',
    bottom: width*0.25,
    left: width*0.40,
    paddingHorizontal: width*0.04,
    paddingVertical:width*0.03,
    backgroundColor: '#76B900',
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: width*0.04,
    color: 'white',
    fontWeight:'bold'

  },
  //
  bg1:{
    marginVertical:width*0.30,
    marginHorizontal:width*0.04,
    paddingVertical:width*0.20,
    backgroundColor:'#0A0A30',
    borderRadius:20
  },
  splashcontainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#070720'

},
splashimage:{
width:150,
height:30,

},
splashtext:{
    fontSize:16,
    fontWeight:'bold',
    color:'white'

},
})
export default styles