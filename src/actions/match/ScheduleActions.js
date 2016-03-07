import alt from '../../alt.js';

class ScheduleActions {
	updateSchedule(){
		console.log("dispatched");
		this.dispatch();
	}
}

export default alt.createActions(ScheduleActions);