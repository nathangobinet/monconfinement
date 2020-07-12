import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import { Alert } from 'react-native';

async function notifiate(title, message) {
  const {status: existingStatus} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  if (existingStatus !== 'granted' ) return;
  Notifications.presentLocalNotificationAsync({
    title: title,
    body: message,
  });
}

function alertAndNotifiate(title, message) {
  Alert.alert(title, message);
  notifiate(title, message);
}

function errorAlert(msg) {
  Alert.alert('Attention !', msg);
}

export const states = Object.freeze({ STOP: 1,  SETUP: 2,  STARTED: 3 });

class Activity {
  constructor(){
    this._isOutside = null;
    this._activityCount = 5;
    this._state = states.STOP;
    this._timestamp = null;
    this._type = null;
    this._currentSetState = null;
    this._setCount = null;
    this._maxTime = null;
  }

  isCurrent(type) {
    return this._type === type;
  }

  isSetUp() {
    return this._state === states.SETUP;
  }

  isStarted() {
    return this._state === states.STARTED;
  }

  getState() {
    return this._state;
  }

  setState(state) {
    this._state = state;
    if(this._currentSetState !== null) this._currentSetState(state);
  }

  getCount() {
    return this._activityCount;
  }

  getSecondsSinceItStarted() {
    if(this._timestamp === null) return 0;
    return (Date.now() - this._timestamp) / 1000;
  }

  getRemainingSeconds() {
    console.log('Remaining Seconds', this._maxTime - this.getSecondsSinceItStarted());
    return this._maxTime - this.getSecondsSinceItStarted();
  }

  setSetCount(setCount) {
    this._setCount = setCount;
  }

  setSetState(setState) {
    console.log(setState);
    this._currentSetState = setState;
  }

  decreaseCount(){
    if (this._activityCount === 0 ) {
      errorAlert('Vous avez epuisé votre nombre maximale d\'activité'); 
      return false;
    }
    console.log('dicrease');
    this._activityCount -= 1;
    this._setCount(this._activityCount);
    return this._activityCount;
  }

  setUp(setState, type, maxTime) {
    if(this.isStarted()) {
      errorAlert('Une activité est déjà en cours'); 
      return false;
    }
    if(this._activityCount === 0) {
      errorAlert('Vous avez epuisé votre nombre d\'activité'); 
      return false;
    }
    console.log('set up');
    this._currentSetState = setState;
    this._type = type;
    this.setState(states.SETUP);
    this._maxTime = maxTime;
    return true;
  }

  start() {
    console.log('start');
    this.decreaseCount();
    alertAndNotifiate('L\'activité à commencer !', 'L\'activité a commencée');
    this._timestamp = Date.now();
    this.setState(states.STARTED);
  }

  stop() {
    console.log('stop');
    this.setState(states.STOP);
    this._timestamp = null;
    this._type = null;
  }

  begin(setState, type, maxTime = null) {
    if(this.isOutside()) {
      if(this.setUp(setState, type, maxTime)) this.start();
    } else {
      this.setUp(setState, type, maxTime);
    }
  }

  isOutside(){
    return this._isOutside;
  }

  handleGoOutside() {
    // L'utilisateur sort de sa zone de confinement alors qu'il a commencé une activité 
    if(this.isSetUp() && !this.isStarted()) {
      this.start();
    } 
    // L'uitilisateur sort de sa zone de confinement alors qu'il n'a pas commencé une activité 
    else if(!this.isStarted()){
      alertAndNotifiate(
        'Sortie non authorisée', 
        'Attention, vous sortez de votre zone de confinement. Merci de regagner votre zone deconfinement ou de commencer une activité.',
      );
    }
  }
  
  handleGoInside() {
    // L'uitilisateur rentre dans sa zone de confinement alors qu'il était en activité 
    if (this.isStarted()) {
      Alert.alert(
        "Zone de confinement regagnée",
        "Vous avez regagné votre zone de confinement. Voulez-vous terminer l'activité en cours ?",
        [{ text: "Non", style: "cancel" },
          { text: "Oui", onPress: () => { this.stop(); }}
        ],{ cancelable: false }
      );
    } 
    // L'uitilisateur rentre dans sa zone de confinement alors qu'il n'était pas en activité 
    else {
      alertAndNotifiate(
        'Vous êtes dans votre zone de confinement', 
        'Merci d\'avoir gagné votre zone de confinement',
      );
    }
  }

  handlePositionChange(state) {
    this._isOutside = (state === 2);
    console.log('isStarted', this.isStarted(), 'isSetUp', this.isSetUp(), this._state, this.getCount());
    (this.isOutside()) ? this.handleGoOutside() : this.handleGoInside();
  }
}

const instance = new Activity();

export default instance;