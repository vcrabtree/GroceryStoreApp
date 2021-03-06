// styles.js
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightcyan'
  },
  container2: {
    backgroundColor: 'yellowgreen',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 90,
    flex: 1
  },
  heading2: {
    fontSize: 28,
    color: "lightyellow",
    fontFamily: "Cochin",
    marginBottom: 10,
    alignItems: 'center',
  },
  myListText: {
    fontSize: 15,
    fontFamily: "Cochin",
    marginBottom: 10,
    marginLeft:40,
    alignItems: 'center',
    textAlign: "center",
    paddingTop: 15,
    backgroundColor: 'pink',
    padding: 12,
    width: 255,
    height: 45,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOpacity: 0.9,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  heading1: {
    fontSize: 30,
    color: "papayawhip",
    fontFamily: "Cochin",
    marginBottom: 10,
    borderRadius: 10,
    padding: 12,
    borderWidth: 3.5,
    borderColor: "papayawhip",
    paddingLeft: 30
  },
  searchText: {
    fontSize: 20,
    color: "lightpink",
    fontFamily: "Cochin",
    paddingTop: 3
  },
  searchText3: {
    fontSize: 20,
    color: "lightpink",
    fontFamily: "Cochin",
    marginBottom: 50,
  },
  searchText2: {
    fontSize: 15,
    color: "lightpink",
    fontFamily: "Cochin",
    marginLeft: 40,
    paddingTop: 10
  },
  button2: {
    textAlign: "center",
    marginTop: 20,
    paddingTop: 15,
    // borderRadius: 10,
    // borderWidth: 1,
    backgroundColor: 'pink',
    padding: 12,
    // borderWidth: 0.5,
    borderRadius: (65 / 2),
    width: 95,
    height: 45,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOpacity: 0.9,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },

  },
  heading11: {
    fontSize: 25,
    color: "papayawhip",
    fontFamily: "Cochin",
    marginBottom: 10,
    borderRadius: 10,
    padding: 12,
    borderWidth: 3.5,
    borderColor: "papayawhip",
    paddingLeft: 30
  },
  textButton: {
    textAlign: 'center',
    fontSize: 12,
  },
  homeButton: {
    textAlign: "center",
    marginTop: 20,
    paddingTop: 15,
    backgroundColor: 'pink',
    padding: 12,
    borderRadius: (65 / 2),
    width: 150,
    height: 60,
    height: 70,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOpacity: 0.9,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },

  },
  homeButtonText: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // homeButtonText: {
  //   textAlign: 'center',
  //   fontSize: 34,
  //   fontFamily: "Cochin",
  //   color: '#6b1331',
  //   paddingBottom:20,
  //   marginBottom:30
  // },
  listItem: {
    backgroundColor: 'lightyellow',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
  },
  item: {
    padding: 10,
    color: '#F95904',
    fontSize: 17,
    height: 35,
    textAlign: 'center',
    fontFamily: 'Cochin',
  },
  fList: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#C3DCFF'

  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  itemImage: {
    height: 40,
    width: 40,
    justifyContent: 'flex-end',
    borderRadius: 150 / 2,
  },
  itemTextStyle: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: "Cochin",
    color: '#333333',
    paddingTop: 10,
    paddingRight: 40
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  pickerStyle: {
    height: 50,
    width: "80%",
    color: '#344953',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 90,
    fontSize: 20
  },
  containerPicker: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeButtonText: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    paddingTop: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOpacity: 0.9,
    elevation: 6,
    shadowRadius: 25,
    shadowOffset: { width: 1, height: 13 },
  },
  modalView: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 50,
    alignItems: "center",
    shadowColor: '#fff',
    shadowOpacity: 9.25,
    shadowRadius: 8.84,
    elevation: 50,
    marginTop: 350,
  },
  openButton: {
    backgroundColor: "#A5C9FA",
    borderRadius: 20,
    padding: 10,
  },
  textStyle: {
    color: "#021B3D",
    textAlign: "center",
    fontSize: 10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },

});

export { styles }