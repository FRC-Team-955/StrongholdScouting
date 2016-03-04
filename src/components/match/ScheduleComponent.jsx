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

var ScheduleComponent = require('../actions/ScheduleComponent');

require('styles//match/Schedule.css');

const style = {
    action: {
        marginTop: 250,
        marginLeft: 1275
    }
}

const ScheduleComponent = () => (
    <div className = "col-md-12 spacing">
    <Table selectable = {false}>
    <TableHeader displaySelectAll = {false}>
      <TableRow>
        <TableHeaderColumn>#</TableHeaderColumn>
        <TableHeaderColumn>Red 1</TableHeaderColumn>
        <TableHeaderColumn>Red 2</TableHeaderColumn>
        <TableHeaderColumn>Red 3</TableHeaderColumn>
        <TableHeaderColumn>Blue 1</TableHeaderColumn>
        <TableHeaderColumn>Blue 2</TableHeaderColumn>
        <TableHeaderColumn>Blue 3</TableHeaderColumn>
        <TableHeaderColumn>Red Score</TableHeaderColumn>
        <TableHeaderColumn>Blue Score</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox = {false}>
      <TableRow>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn><TextField/></TableRowColumn>
        <TableRowColumn><TextField/></TableRowColumn>
        <TableRowColumn><TextField/></TableRowColumn>
        <TableRowColumn><TextField/></TableRowColumn>
        <TableRowColumn><TextField/></TableRowColumn>
        <TableRowColumn><TextField/></TableRowColumn>
        <TableRowColumn>100</TableRowColumn>
        <TableRowColumn>100</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn><TextField/></TableRowColumn>
        <TableRowColumn><TextField/></TableRowColumn>
        <TableRowColumn><TextField/></TableRowColumn>
        <TableRowColumn><TextField/></TableRowColumn>
        <TableRowColumn><TextField/></TableRowColumn>
        <TableRowColumn><TextField/></TableRowColumn>
        <TableRowColumn>100</TableRowColumn>
        <TableRowColumn>100</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>3</TableRowColumn>
        <TableRowColumn><TextField/></TableRowColumn>
        <TableRowColumn><TextField/></TableRowColumn>
        <TableRowColumn><TextField/></TableRowColumn>
        <TableRowColumn><TextField/></TableRowColumn>
        <TableRowColumn><TextField/></TableRowColumn>
        <TableRowColumn><TextField/></TableRowColumn>
        <TableRowColumn>100</TableRowColumn>
        <TableRowColumn>100</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>4</TableRowColumn>
        <TableRowColumn><TextField/></TableRowColumn>
        <TableRowColumn><TextField/></TableRowColumn>
        <TableRowColumn><TextField/></TableRowColumn>
        <TableRowColumn><TextField/></TableRowColumn>
        <TableRowColumn><TextField/></TableRowColumn>
        <TableRowColumn><TextField/></TableRowColumn>
        <TableRowColumn>100</TableRowColumn>
        <TableRowColumn>100</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
  <FloatingActionButton style = {style.action} onTouchEnd = {ScheduleComponent.updateSchedule}>
    <ContentAdd/>
    </FloatingActionButton>
    </div>
)

export default ScheduleComponent;