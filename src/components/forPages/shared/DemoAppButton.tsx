import { Card, CardContent, CardHeader } from '@mui/material';
import React from 'react';
import { AppButton } from 'src/components';

/**
 * Renders "Demo Section" for AppButton component
 * @component DemoAppButton
 */
const DemoAppButton = () => {
  return (
    <Card>
      <CardHeader
        title="AppButton"
        subheader="Pre-configured Button with lots of improvements, SVG icons specified by name, internal and external links, custom colors, etc."
      />
      <CardContent sx={{ px: 1, py: 0 }}>
        <AppButton color="primary">primary</AppButton>
        <AppButton color="secondary">secondary</AppButton>
        <AppButton color="success">success</AppButton>
        <AppButton color="error">error</AppButton>
        <AppButton color="info">info</AppButton>
        <AppButton color="warning">warning</AppButton>
        <AppButton color="red" endIcon="close">
          Red
        </AppButton>
        <AppButton color="green" startIcon="menu">
          Green
        </AppButton>
        <AppButton color="blue" startIcon="menu" endIcon="close">
          Blue
        </AppButton>
        <AppButton color="#f0f" to="/">
          #f0f
        </AppButton>
        <AppButton color="rgba(255, 0, 255, 0.5)" to="/">
          rgba(255, 0, 255, 0.5)
        </AppButton>
      </CardContent>
    </Card>
  );
};

export default DemoAppButton;
