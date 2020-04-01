import React from 'react';
import { Icon } from '../Icon/Icon';

// Ignoring because I couldn't get @types/react-select work wih Torkel's fork
// @ts-ignore
import { components } from '@torkelo/react-select';

export const IndicatorsContainer = (props: any) => {
  const isOpen = props.selectProps.menuIsOpen;
  return (
    <components.IndicatorsContainer {...props}>
      <Icon name={isOpen ? 'angle-up' : 'angle-down'} className="gf-form-select-box__indicators" />
    </components.IndicatorsContainer>
  );
};

export default IndicatorsContainer;
