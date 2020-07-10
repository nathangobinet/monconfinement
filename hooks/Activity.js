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

class Activity {
  constructor(){
    this._isOutside = null;
    this._activityCout = 3;
    this._started = false;
    this._timestamp = null;
    this._currentActivity = null;
  }

  isStarted(){
    return this._started;
  }

  getCount() {
    return this._activityCout;
  }

  isSetUp(){
    return this._currentActivity !== null;
  }

  decreaseCount(){
    if (this._activityCout === 0 ) {
      errorAlert('Vous avez epuisé votre nombre d\'activité'); 
      return false;
    }
    console.log('dicrease');
    this._activityCout -= 1;
    return this._activityCout;
  }

  setUp(activity) {
    if(this._started) {
      errorAlert('Une activité est déjà en cours'); 
      return false;
    }
    if(this._activityCout === 0) {
      errorAlert('Vous avez epuisé votre nombre d\'activité'); 
      return false;
    }
    console.log('set up');
    this._currentActivity = activity;
    return true;
  }

  start() {
    console.log('start');
    alertAndNotifiate('L\'activité à commencer !', 'L\'activité à commencer + ext info');
    this._started = true;
    this._timestamp = Date.now();
    return true;
  }

  stop() {
    console.log('stop');
    this._timestamp = null;
    this._currentActivity = null;
    this._started = false;
  }

  begin(type) {
    console.log('begin');
    if(this.isOutside()) {
      if(this.setUp(type)) this.start();
    } else {
      this.setUp(type);
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
    this._isOutside =  (state === 2);
    console.log('isStarted', this.isStarted(), 'isSetUp', this.isSetUp());
    (this.isOutside()) ? this.handleGoOutside() : this.handleGoInside();
  }
}

const instance = new Activity();

export default instance;