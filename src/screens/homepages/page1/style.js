import resho from "../../../constants/resho";

const styles = {
  mainView: {
    flex: 1,
    alignItems: "center",
  },
  container: {
    width: 315 * resho,
  }
  ,
  title: {
    fontSize: 24 * resho,
    fontWeight: "600",
    lineHeight: 32,
    marginTop: 6 * resho,
    fontStyle: "normal",
    width: 153 * resho,
    letterSpacing: 0.25 * resho,
    color: "#11493E",
  },

  date: {
    fontSize: 14 * resho,
    fontWeight: "600",
    lineHeight: 16 * resho,

    fontStyle: "normal",
    width: 93 * resho,
    letterSpacing: 0.25 * resho,
    color: "#1B3131",
  },

  wallpaper: {
    width: "100%",
    height: 145 * resho,
    marginTop: 20 * resho,
  },

  filterView: {
    width: "100%",
    height: 28 * resho,
    marginTop: 30 * resho,
    backgroundColor: "#347474",
    borderRadius: 6 * resho,
    flexDirection: "row",
  },

  filterFild: {
    flex: 0.3333,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4 * resho,
  },
  activefilterFild: {
    flex: 0.3333,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4 * resho,
    backgroundColor: '#E7F2F2'
  },

  filterText: {
    fontSize: 14 * resho,
    fontWeight: "500",
    lineHeight: 24 * resho,
    fontStyle: "normal",
    letterSpacing: 0.25 * resho,
    color: "#FCFCFC",
  },

  activefilterText: {
    fontSize: 14 * resho,
    fontWeight: "500",
    lineHeight: 24 * resho,
    fontStyle: "normal",
    letterSpacing: 0.25 * resho,
    color: "#101010",
  },
  calendarLine: {
    width: "100%",
    height: 24 * resho,

    marginTop: 30 * resho,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  calendarView: {
    width: 30 * resho,
    height: 30 * resho,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4 * resho,
  },

  calendarActiveView: {
    width: 30 * resho,
    height: 30 * resho,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#347474",
    borderRadius: 4 * resho,
  },


};

export default styles;
