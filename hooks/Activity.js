class Activity {
  constructor(){
    this._activityCout = 3;
    this._started = false;
    this._timestamp = null;
    this._currentActivity = null;
  }

  isStarted(){
    return this._started;
  }

  isSetUp(){
    return this._currentActivity !== null;
  }

  decreaseCount(){
    if (this._activityCout === 0 ) return false;
    this._activityCout -= 1;
    return this._activityCout;
  }

  setUp(activity) {
    if(this._started) return false;
    if(this._activityCout === 0) return false;
    this._currentActivity = activity;
    return true;
  }

  start() {
    if(this._started) return false;
    if(!this.decreaseCount()) return false;
    this.setStarted(true);
    this._timestamp = Date.now();
    return true;
  }

  stop() {
    this._timestamp = null;
    this._currentActivity = null;
    this._started = false;
  }
}

const instance = new Activity();
Object.freeze(instance);

export default instance;