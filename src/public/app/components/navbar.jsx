/** In this file, we create a React component which incorporates components provided by material-ui */

import React from 'react';
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';
import Colors from 'material-ui/lib/styles/colors';
import AppBar from 'material-ui/lib/app-bar';
import Toggle from 'material-ui/lib/toggle';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import LeftNav from 'material-ui/lib/left-nav';
import RaisedButton from 'material-ui/lib/raised-button'; 
import AutoComplete from 'material-ui/lib/auto-complete';
import MatchTable from './matchTable';
import MatchScoring from './matchScoring';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import MatchSelect from './matchSelect';
import Save from './SaveButtonComponent';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import RedAllianceThemeComponent from './RedAllianceThemeComponent';
import BlueAllianceThemeComponent from './BlueAllianceThemeComponent';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';


const toggleContainer = {
    width: "100%",
	paddingTop: 0
}

const tabContainer = {
    width: 1050,
}

const tab = {
	width: 175,
	padding: 0
}

const tabsStyle = {
    width: "100%",
	marginTop: 0,
	height: "100%"
}

const teamData = [
    'Apple'
]

const toggleStyle = {
    marginLeft: 50,
    marginRight: 175, 
	marginTop: 15
}

const tabStyle = {
	paddingBottom: 20
}

const selectStyle = {
	width: "100%"
}

const navStyle = {
	position: "fixed",
	paddingTop: 0,
	paddingRight: 0
}

const navMargin = {
	margin: 0
}


const Navbar = React.createClass({
	childContextTypes: {
    	muiTheme: React.PropTypes.object
  	},

  	getChildContext: function() {
      if(this.state.theme){
	  	return{muiTheme: ThemeManager.getMuiTheme(RedAllianceThemeComponent)}
	  }
	  else{
		return{muiTheme: ThemeManager.getMuiTheme(BlueAllianceThemeComponent)}
	  }
  },
  switchToMatchScoring: function(){
        document.getElementById('matchScoring').style.display = "block";
        document.getElementById('matchTable').style.display = "none";
		document.getElementById('analysisPreview').style.display = "none";
		document.getElementById('allianceSelection').style.display = "none";
		document.getElementById('graphDisplay').style.display = "none";
        this.setState({open: false})
    },
    switchToMatchTable: function(){
        document.getElementById('matchScoring').style.display = "none";
        document.getElementById('matchTable').style.display = "block";
		document.getElementById('analysisPreview').style.display = "none";
		document.getElementById('allianceSelection').style.display = "none";
		document.getElementById('graphDisplay').style.display = "none";
        this.setState({open: false})
    },
	
	switchToAnalysisPreview: function(){
		document.getElementById('matchScoring').style.display = "none";
        document.getElementById('matchTable').style.display = "none";
		document.getElementById('analysisPreview').style.display = "block";
		document.getElementById('allianceSelection').style.display = "none";
		document.getElementById('graphDisplay').style.display = "none";
        this.setState({open: false})
	},
	
	switchToAllianceSelection: function(){
		document.getElementById('matchScoring').style.display = "none";
        document.getElementById('matchTable').style.display = "none";
		document.getElementById('analysisPreview').style.display = "none";
		document.getElementById('allianceSelection').style.display = "block";
		document.getElementById('graphDisplay').style.display = "none";
        this.setState({open: false})
	},
	
	switchToGraphs: function(){
		document.getElementById('matchScoring').style.display = "none";
        document.getElementById('matchTable').style.display = "none";
		document.getElementById('analysisPreview').style.display = "none";
		document.getElementById('allianceSelection').style.display = "none";
		document.getElementById('graphDisplay').style.display = "block";
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
			theme: true
        }
    },
	handleTheme: function(){
		this.setState({theme: !this.state.theme});
	},
    render: function(){
      return (
          <div>
              <AppBar
                  title="Scouting App v1.0"
                  iconElementRight = {
					  <div style = {tabContainer}>
        				<Tabs style = {tabsStyle}>
        				    <Tab 
        				        label = "Team 1"
        				    />
        				    <Tab 
        				        label = "Team 2"
        				        // style = {tabStyle}
        				    />
        				    <Tab 
        				        label = "Team 3"
        				        // style = {tabStyle}
        				    />
        				   <Tab  style = {tab} label={<div>
								<Toggle style = {toggleStyle} onToggle = {this.handleTheme}/>					
							</div>}/>
        				    <Tab
        				        label = {<MatchSelect/>
								} 
        				    />
							<Save/>
        				</Tabs>
    				</div>}
                  onLeftIconButtonTouchTap = {this.toggle}
				  style = {navStyle}
				  iconStyleRight = {navMargin}
				  
              />
              <LeftNav
                  docked={false}
                  width={300}
                  open={this.state.open} 
                  onRequestChange={ this.toggle }>
                  <MenuItem onTouchTap = {this.switchToMatchScoring}>Home</MenuItem>
                  <MenuItem onTouchTap = {this.switchToMatchTable}>Match List</MenuItem>
                  <MenuItem onTouchTap = {this.switchToAnalysisPreview}>Team Archive</MenuItem>
				  <MenuItem onTouchTap = {this.switchToGraphs}>Stat Analytics</MenuItem>
                  <MenuItem onTouchTap = {this.switchToAllianceSelection}>Alliance Selection</MenuItem>
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

export default Navbar;
