import styled from 'styled-components';
import React from 'react';
import { styles } from './DropDown.styles';
import { DownOutlined } from '@ant-design/icons';

const DropdownContainer = styled.div`
  ${styles.inputWrapper}
`;

const DropdownSelect = styled.select`
  ${styles.select}
`;

const DropdownOption = styled.option``;

const IconWrapper = styled.div`
  ${styles.iconWrapper}
`;
interface DropdownProps {
  options: { label: string; value: string }[];
  selectedValue: string;
  onValueChange: (value: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({ options, selectedValue, onValueChange }) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onValueChange(event.target.value);
  };

  return (
    <DropdownContainer>
      <DropdownSelect value={selectedValue} onChange={handleSelectChange}>
        {options.map(({ value }) => (
          <DropdownOption key={value} value={value}>
            {value}
          </DropdownOption>
        ))}
      </DropdownSelect>
      <IconWrapper>
        <DownOutlined />
      </IconWrapper>
    </DropdownContainer>
  );
};
