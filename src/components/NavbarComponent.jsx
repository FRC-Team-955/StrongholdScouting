'use strict';
/** In this file, we create a React component which incorporates components provided by material-ui */

import React from 'react';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';
import Colors from 'material-ui/lib/styles/colors';
import AppBar from 'material-ui/lib/app-bar';
import Toggle from 'material-ui/lib/toggle';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import LeftNav from 'material-ui/lib/left-nav';
import RaisedButton from 'material-ui/lib/raised-button'; 
import AutoComplete from 'material-ui/lib/auto-complete';
import ScheduleComponent from './match/ScheduleComponent';
import ScoringMainComponent from './scoring/ScoringMainComponent';
import MatchSelectComponent from './scoring/MatchSelectComponent';
import SaveButtonComponent from './SaveButtonComponent';
import MatchActions from '../actions/match/MatchActions';

require('styles//Navbar.css');

const toggleStyle = {
    marginLeft: 100,
    marginRight: 175,
}

const toggleContainer = {
    width: "100%",
	paddingTop: 20
}

const tabContainer = {
    width: 1050,
}

const tabsStyle = {
    width: "100%",
}

const teamData = [
    'Apple'
]

const selectStyle = {
	width: "100%"
}

const tabFont = {
	fontSize: 18
}

const NavbarComponent = React.createClass({
	getDreams: function(teamOne,teamTwo,teamThree){
		return(
    		<div style = {tabContainer}>
				<Tabs style = {tabsStyle}>
            		<Tab style = {tabFont}
                		label = {teamOne}
						onTouchTap = {MatchActions.updateCurrentTeam(teamOne)}
                			// style = {tabStyle}
            		/>
            		<Tab style = {tabFont}
                		label = {teamTwo}
						onTouchTap = {MatchActions.updateCurrentTeam(teamOne)}
                		// style = {tabStyle}
            		/>
					<Tab style = {tabFont}
						label = {teamThree}
						onTouchTap = {MatchActions.updateCurrentTeam(teamOne)}
						// style = {tabStyle}
					/>
					<Tab 
						selected = {false}
						label = {<Toggle onClick = {this.setToggleState} iconStyle = {toggleStyle}/>}
					/>
					<Tab
						label = {<MatchSelectComponent matches = {this.props.matchData.totalMatchNumber}/>}
					/>
					<SaveButtonComponent/>
				</Tabs>
			</div>
		)	
	},
	
	getTeams: function(){
		if(this.props.matchData.currentMatch != undefined){
			if(!this.state.isToggleOpen){
				return this.getDreams(
					this.props.matchData[this.props.matchData.currentMatch+"b1"],
					this.props.matchData[this.props.matchData.currentMatch+"b2"],
					this.props.matchData[this.props.matchData.currentMatch+"b3"]
				);
			}
		
			else{
				return this.getDreams(
					this.props.matchData[this.props.matchData.currentMatch+"r1"],
					this.props.matchData[this.props.matchData.currentMatch+"r2"],
					this.props.matchData[this.props.matchData.currentMatch+"r3"]
				);
			}
		}
		
		else{
			return this.getDreams("Team 1","Team 2","Team 3")
		}
	},
	
    switchToMatchScoring: function(){
        document.getElementById('matchScoring').style.display = "block";
        document.getElementById('matchTable').style.display = "none";
		document.getElementById('analysisPreview').style.display = "none";
		// document.getElementById('allianceSelection').style.display = "none";
        this.setState({open: false})
    },
    switchToMatchTable: function(){
        document.getElementById('matchScoring').style.display = "none";
        document.getElementById('matchTable').style.display = "block";
		document.getElementById('analysisPreview').style.display = "none";
		// document.getElementById('allianceSelection').style.display = "none";
        this.setState({open: false})
    },
	
	switchToAnalysisPreview: function(){
		document.getElementById('matchScoring').style.display = "none";
        document.getElementById('matchTable').style.display = "none";
		document.getElementById('analysisPreview').style.display = "block";
		// document.getElementById('allianceSelection').style.display = "none";
        this.setState({open: false})
	},
	
    toggle: function(){
        this.setState({
            open: !this.state.open
        })
    },
    handleClose: function(){ this.setState({open: false})},
    
	getInitialState: function(){
        return{
            open: false,
			isToggleOpen: false		
        }
    },
	
	setToggleState: function(){
		this.setState({
			isToggleOpen : !this.state.isToggleOpen
		})	
	},
	
    render: function(){
      return (
          <div>
              <AppBar
                  title="Scouting App v1.0"
                  iconElementRight = {this.getTeams()}
                  onLeftIconButtonTouchTap = {this.toggle}
              />
              <LeftNav
                  docked={false}
                  width={300}
                  open={this.state.open} 
                  onRequestChange={ this.toggle }>
                  <MenuItem onTouchTap = {this.switchToMatchScoring}>Home</MenuItem>
                  <MenuItem onTouchTap = {this.switchToMatchTable}>Match List</MenuItem>
                  <MenuItem onTouchTap = {this.switchToAnalysisPreview}>Team Archive</MenuItem>
                //   <MenuItem onTouchTap = {this.switchToAllianceSelection}>Alliance Selection</MenuItem>
                  <MenuItem>
                        <AutoComplete
                            floatingLabelText = "Search for teams"
                            filter = {AutoComplete.fuzzyFilter}
                            dataSource = {teamData}
                        />
                 </MenuItem>
              </LeftNav>
          </div>
      );
  }
});

export default NavbarComponent;