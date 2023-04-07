import React, { FC, ReactNode } from 'react';
import Alert, { AlertProps } from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

interface FeedbackProps extends AlertProps {
  header?: string | ReactNode;
  message: string | ReactNode;
}

const Feedback: FC<FeedbackProps> = ({
  header,
  message,
  severity = 'error',
}) => (
  <Alert severity={severity}>
    {header && <AlertTitle>{header}</AlertTitle>}
    {message}
  </Alert>
);

export default Feedback;
