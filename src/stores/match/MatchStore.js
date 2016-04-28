// import MatchConstants from '../../constants/MatchConstants'
var MatchConstants = require('../../constants/MatchConstants');
var AppDispatcher = require('../../components/AppDispatcher'); 
var MatchData = require('./MatchData');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var lockr = require('lockr');

var CHANGE_EVENT = 'change';

var matches = {"totalMatchNumber": 0, "currentTeam" : "Team 1", "currentMatch" : 0, "0comments" : ""};

function handleUpdateSchedule(){
	matches.totalMatchNumber += 1;
	matches[matches.totalMatchNumber + "comments"] = "";
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

function handleUpdateMatchComments(matchComments,match){
	matches[match+"comments"] = matchComments;
}

function handleUpdateSave(data){
	console.log(data);
	lockr.set('matchData',data)
}

function handleUpdateLoad(){
	console.log(lockr.get('matchData') + " lockr")
	matches = lockr.get('matchData');
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
				
			case MatchConstants.MatchComments:
				handleUpdateMatchComments(action.matchComments,action.match);
				MatchStore.emitChange();
				break;
				
			case MatchConstants.MatchSave:
				var data = MatchStore.getData();
				handleUpdateSave(data);
				MatchStore.emitChange();
				break;
				
			case MatchConstants.MatchLoad:
				handleUpdateLoad();
				MatchStore.emitChange();
				break;
		}

		return true;
  })
});

module.exports = MatchStore;