import { TypographyVariant } from '@mui/material';
import React, { Component } from 'react';
import { withAppStore } from '../../store';
import { AppContextReturningType } from '../../store/AppStore';

interface Props {
  variant?: TypographyVariant;
  appStore: AppContextReturningType; // [state, dispatch]
}

interface State {
  darkMode: boolean;
}

/**
 * Renders Text for Logotype composition.
 * Actually it is just a sample of React Class Component that uses appStore global state.
 */
class LogoText extends Component<Props, State> {
  state = {
    darkMode: false,
  };

  render() {
    return <div>LogoText</div>;
  }
}

export default withAppStore(LogoText); // Take a look at withAppStore() HOC
