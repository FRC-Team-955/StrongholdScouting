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
import MatchStore from '../stores/match/MatchStore';

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
    width: "100%"
}

const teamData = [
    'Apple'
]

const selectStyle = {
	width: "100%"
}

const teams = (
    <div style = {tabContainer}>
        <Tabs style = {tabsStyle}>
            <Tab 
                label = "Team 1"
                // style = {tabStyle}
            />
            <Tab 
                label = "Team 2"
                // style = {tabStyle}
            />
            <Tab 
                label = "Team 3"
                // style = {tabStyle}
            />
            <Tab 
                selected = {false}
                label = {<Toggle iconStyle = {toggleStyle} />}
            />
            <Tab
                label = {<MatchSelectComponent/>
				} 
            />
			<SaveButtonComponent/>
        </Tabs>
    </div>
  )

const NavbarComponent = React.createClass({
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
            open: false
        }
    },
    render: function(){
      return (
          <div>
              <AppBar
                  title="Scouting App v1.0"
                  iconElementRight = {teams}
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