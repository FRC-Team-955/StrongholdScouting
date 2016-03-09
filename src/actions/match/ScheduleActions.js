var alt = require('../../components/Dispatcher');

class ScheduleActions {
	updateSchedule(){
		console.log("dispatched");
		return 5;
	}
}

module.exports = alt.createActions(ScheduleActions);