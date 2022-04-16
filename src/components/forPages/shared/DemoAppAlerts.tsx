import { Card, CardContent, CardHeader } from '@mui/material';
import React from 'react';
import { AppAlert } from 'src/components';

/**
 * Renders "Demo Section" for AppButton component
 * @component DemoAppButton
 */
const DemoAppButton = () => {
  return (
    <Card>
      <CardHeader title="AppAlert" subheader="Pre-configured Alert" />
      <CardContent sx={{ py: 0 }}>
        <AppAlert severity="info">AppAlert - Info</AppAlert>
        <AppAlert severity="success">AppAlert - Info</AppAlert>
        <AppAlert>AppAlert - Error (default)</AppAlert>
        <AppAlert severity="warning">AppAlert - Info</AppAlert>
      </CardContent>
    </Card>
  );
};

export default DemoAppButton;
