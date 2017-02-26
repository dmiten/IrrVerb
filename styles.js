/**
 * Created by Дмитрий on 10.02.2017.
 */

const STYLES = {
  irrVerb: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#cfd8dc'
  },
  filteredTable: {
    paddingTop: 5,
    paddingBottom: 50
  },
  singleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 35,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#b0bec5'
  },
  verbForms: {
    fontSize: 16
  },
  searchInputWithX: {
    height: 46,
    marginTop: 3,
    marginHorizontal: 30,
    paddingBottom: 5,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    elevation: 4,
    backgroundColor: '#eceff1',
    borderColor: '#78909c'

  },
  searchInput: {
    flex: 0.9,
    fontSize: 16,
    marginLeft: 40,
    height: 43,
    alignSelf: 'stretch',
    textAlign: 'center',
    backgroundColor: '#eceff1'
  },
  xButton: {
    flex: 0.1,
    height: 30,
    width: 30,
    margin: 7,
    fontSize: 18,
    alignSelf: 'stretch',
    alignItems: 'center',
    textAlign: 'center',
    color: '#546e7a'
  },
  rowSearch_X: {
    flexDirection: 'row',
    paddingBottom: 3
  },
  modal: {
    marginTop: 100,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 20,
    elevation: 4,
    borderColor: '#78909c',
    backgroundColor: '#eceff1'
  },
  rowInModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 7
  },
  verbFormsInModal: {
    marginTop: 20,
    alignSelf: 'center'
  },
  transcriptionInModal: {
    fontSize: 16,
    marginLeft: 20,
    color: '#5e6b9e'
  },
  translationInModal: {
    fontSize: 16,
    marginTop: 15,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#5e6b9e'
  },
  okButton: {
    fontSize: 18,
    alignSelf: 'flex-end',
    margin: 20,
    color: '#546e7a'
  }
};

export default STYLES;
