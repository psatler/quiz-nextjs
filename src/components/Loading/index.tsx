import React from 'react';

import { Container, LoaderIcon } from './styles';

interface LoaderProps {
  containerHeight: number;
  borderSize: number;
  borderColor: string; // #f3f3f3
  borderTopColor: string; // #f94d6a
  loaderSize: number;
  displayLoadingIcon: boolean;
  message?: string;
}

export const LoadingIcon: React.FC<LoaderProps> = ({
  containerHeight,
  borderSize,
  borderColor,
  borderTopColor,
  loaderSize,
  displayLoadingIcon,
  message,
}) => {
  if (displayLoadingIcon) {
    return (
      <Container containerHeight={containerHeight}>
        <LoaderIcon
          borderSize={borderSize}
          borderColor={borderColor}
          borderTopColor={borderTopColor}
          loaderSize={loaderSize}
        />
        {message && (
        <h3>
          {' '}
          {message}
          {' '}
        </h3>
        )}
      </Container>
    );
  }

  return null;
};
