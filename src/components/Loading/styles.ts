import styled from 'styled-components';

interface ContainerProps {
  containerHeight: number;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 100%; */
  /* height: 100%; */
  height: ${(props) => `${props.containerHeight}px`};
  /* background: rgba(0, 0, 0, 0.7); */
  h3 {
    margin-top: 5px;
    color: #fff;
  }
`;

interface LoaderProps {
  borderSize: number;
  borderColor: string; // #f3f3f3
  borderTopColor: string; // #f94d6a
  loaderSize: number;
}

export const LoaderIcon = styled.div<LoaderProps>`
  /* margin: 0 auto; */
  border-width: ${(props) => props.borderSize};
  border-style: solid;
  border-color: ${(props) => props.borderColor};
  border-top-width: ${(props) => props.borderSize};
  border-top-style: solid;
  border-top-color: ${(props) => props.borderTopColor};
  border-radius: 50%;
  width: ${(props) => `${props.loaderSize}px`};
  height: ${(props) => `${props.loaderSize}px`};
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
