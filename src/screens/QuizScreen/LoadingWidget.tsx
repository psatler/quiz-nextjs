import React from 'react';
import { Widget, LoadingIcon } from 'src/components';

export function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        <LoadingIcon
          borderColor="#29b6f6"
          borderTopColor="#FFFFFF"
          borderSize={4}
          containerHeight={60}
          loaderSize={30}
          message="Carregando perguntas"
          displayLoadingIcon
        />
      </Widget.Content>
    </Widget>
  );
}
