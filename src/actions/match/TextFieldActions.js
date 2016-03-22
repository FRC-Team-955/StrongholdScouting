var alt = require('../../components/Dispatcher');

class TextFieldActions{
	updateValue(matchNum,textID,value){
		var data = {"matchNum" : matchNum,"textID" : textID,"value" : value}; 
		return data;
	}
}

module.exports = alt.createActions(TextFieldActions);
