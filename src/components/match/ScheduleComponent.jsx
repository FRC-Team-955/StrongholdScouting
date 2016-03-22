'use strict';

import React from 'react';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import TextField from 'material-ui/lib/text-field';
import MatchStore from '../../stores/match/MatchStore';
import ScheduleActions from '../../actions/match/ScheduleActions';
import TextFieldComponent from './TextFieldComponent';
import TextFieldActions from '../../actions/match/TextFieldActions';


require('styles//match/Schedule.css');

const style = {
    action: {
        marginTop: 250,
        marginLeft: 1275
    }
}

var matchTable = [];

const tableRow = (rowColumn,blueAlliance,redAlliance,blueScore,redScore) =>{
	return(
		<div>
			<TableRow>
        		<TableRowColumn>{rowColumn}</TableRowColumn>
        		<TableRowColumn><TextField value = {blueAlliance[0]}/></TableRowColumn>
        		<TableRowColumn><TextField value = {blueAlliance[1]}/></TableRowColumn>
        		<TableRowColumn><TextField value = {blueAlliance[2]}/></TableRowColumn>
        		<TableRowColumn><TextField value = {redAlliance[0]}/></TableRowColumn>
        		<TableRowColumn><TextField value = {redAlliance[1]}/></TableRowColumn>
        		<TableRowColumn><TextField value = {redAlliance[2]}/></TableRowColumn>
        		<TableRowColumn>{blueScore}</TableRowColumn>
        		<TableRowColumn>{redScore}</TableRowColumn>
      		</TableRow>
		</div>
	)
}

const ScheduleComponent = React.createClass({
	
    getInitialState() {
		return {
			table : []
		}
	},
    
    handleChange(event){
        this.setState({
            value: event.target.value
        });
    },
	
	updateBlueOne(value){
		TextFieldActions.updateTeamBlueOne(this.state.table.length +1,value);	
	},
    
	updateTable(){     
        var matchNumber = this.state.table.length +1;
		console.log
		
        matchTable.push(
            <TableRow>
					<TableRowColumn>{matchNumber}</TableRowColumn>
					<TableRowColumn><TextFieldComponent matchNum = {matchNumber} textID = "b1"/></TableRowColumn>
					<TableRowColumn><TextFieldComponent matchNum = {matchNumber} textID = "b2"/></TableRowColumn>
					<TableRowColumn><TextFieldComponent matchNum = {matchNumber} textID = "b3"/></TableRowColumn>
					<TableRowColumn><TextFieldComponent matchNum = {matchNumber} textID = "r1"/></TableRowColumn>
					<TableRowColumn><TextFieldComponent matchNum = {matchNumber} textID = "r2"/></TableRowColumn>
					<TableRowColumn><TextFieldComponent matchNum = {matchNumber} textID = "r3"/></TableRowColumn>
					<TableRowColumn><TextFieldComponent matchNum = {matchNumber} textID = "bs"/></TableRowColumn>
					<TableRowColumn><TextFieldComponent matchNum = {matchNumber} textID = "rs"/></TableRowColumn>
           </TableRow>
         );
        
        ScheduleActions.updateSchedule();
        
		this.setState({
			table: matchTable
		})
        
        // console.log(this.state.table[0].length);
	},
	
	render(){
		return(
			<div className = "col-md-12 spacing">
				<Table selectable = {false}>
					<TableHeader displaySelectAll = {false}>
						<TableRow>
							<TableHeaderColumn>#</TableHeaderColumn>
							<TableHeaderColumn>Blue 1</TableHeaderColumn>
							<TableHeaderColumn>Blue 2</TableHeaderColumn>
							<TableHeaderColumn>Blue 3</TableHeaderColumn>
							<TableHeaderColumn>Red 1</TableHeaderColumn>
							<TableHeaderColumn>Red 2</TableHeaderColumn>
							<TableHeaderColumn>Red 3</TableHeaderColumn>
							<TableHeaderColumn>Blue Score</TableHeaderColumn>
							<TableHeaderColumn>Red Score</TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody displayRowCheckbox = {false}>
						{this.state.table}
					</TableBody>
				</Table>
				
				<FloatingActionButton style = {style.action} onTouchTap = {this.updateTable}>
					<ContentAdd/>
				</FloatingActionButton>
			</div>
		)
	}
});

export default ScheduleComponent;