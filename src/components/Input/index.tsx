import React from 'react';
import styled from 'styled-components';

const InputBase = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: 0;
  margin-bottom: 25px;
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({ theme }) => theme.colors.contrastText}DD;
    opacity: 1; /* Firefox */
  }
`;

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  onChange, // eslint-disable-line react/prop-types
  placeholder, // eslint-disable-line react/prop-types
  ...rest
}) => (
  <div>
    <InputBase
      placeholder={placeholder}
      onChange={onChange}
      {...rest}
    />
  </div>
);
