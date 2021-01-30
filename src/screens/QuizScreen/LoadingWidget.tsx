import React from 'react';
import { Widget } from 'src/components';
import { Lottie } from '@crello/react-lottie';
import loadingAnimation from './animations/loading.json';

export function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content style={{ display: 'flex', justifyContent: 'center' }}>

        <Lottie
          width="200px"
          height="200px"
          className="lottie-container basic"
          config={{
            animationData: loadingAnimation,
            loop: true,
            autoplay: true,
          }}
        />
        {/* <LoadingIcon
          borderColor="#29b6f6"
          borderTopColor="#FFFFFF"
          borderSize={4}
          containerHeight={60}
          loaderSize={30}
          message="Carregando perguntas"
          displayLoadingIcon
        /> */}
      </Widget.Content>
    </Widget>
  );
}
