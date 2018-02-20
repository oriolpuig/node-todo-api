/* eslint-disable import/no-extraneous-dependencies, comma-dangle, function-paren-newline */
import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

export default createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-H" changePositionKey="ctrl-Q" defaultIsVisible={true}>
    <LogMonitor />
  </DockMonitor>
);
