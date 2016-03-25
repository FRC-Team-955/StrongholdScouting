// import MatchConstants from'../../constants/MatchConstants'
var MatchConstants = require('../../constants/MatchConstants');
var AppDispatcher = require('../../components/AppDispatcher');

var MatchActions = {

  updateSchedule: function() {
    AppDispatcher.handleViewAction({
      actionType: MatchConstants.Schedule,
    });
  },

  updateValue: function(matchNum,textID,value) {
    AppDispatcher.handleViewAction({
      actionType: MatchConstants.TextField,
      data: {"matchNum" : matchNum,"textID" : textID,"value" : value}
    });
  },

};

module.exports = MatchActions;