// import MatchConstants from '../../constants/MatchConstants'
var MatchConstants = require('../../constants/MatchConstants');
var AppDispatcher = require('../../components/AppDispatcher'); 
var MatchData = require('./MatchData');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var matches = {"totalMatchNumber": 0};

function handleUpdateSchedule(){
	matches.totalMatchNumber += 1;
	console.log(JSON.stringify(matches) + " object");
}

function handleUpdateTextField(data){
	// console.log(JSON.stringify(data));
    matches[data.matchNum+data.textID] = data.value;
}

function handleUpdateCurrentMatch(currentMatch){
	matches.currentMatch = currentMatch;
}

function handleUpdateCurrentTeam(currentTeam){
	matches.currentTeam = currentTeam;
}

var MatchStore = assign({}, EventEmitter.prototype, {
	getData: function() {
		return matches;
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
		console.log("change");
 	},

  	addChangeListener: function(callback) {
    	this.on(CHANGE_EVENT, callback);
		console.log("listening");
  	},

  	removeChangeListener: function(callback) {
    	this.removeListener(CHANGE_EVENT, callback);
  	},

  	dispatcherIndex: AppDispatcher.register(function(payload) {
    	var action = payload.action;
    	var text;

		switch(action.actionType) {
			case MatchConstants.Schedule:
				handleUpdateSchedule();
				MatchStore.emitChange();
				break;

			case MatchConstants.TextField:
				handleUpdateTextField(action.data);
				MatchStore.emitChange();
				break;
				
			case MatchConstants.currentMatch:
				handleUpdateCurrentMatch(action.currentMatch);
				MatchStore.emitChange();
				break;
			
			case MatchConstants.currentTeam:
				handleUpdateCurrentTeam(action.currentTeam);
				MatchStore.emitChange();
				break;
		}

		return true;
  })
});

module.exports = MatchStore;