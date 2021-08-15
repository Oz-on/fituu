import React from "react";
import Select from "react-select";
import styled from "styled-components";

const Label = styled("label")`
  line-height: 1;
  font-size: 12px;
  width: fit-content;
  display: flex;
  padding: 3px;
  color: rgba(0, 0, 0, 0.54);
  background: #fff;
  z-index: 999;
  position: absolute;
  left: 10px;
  top: -8px;
`;
const Wrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-left: 8px;
  position: relative;
`;
type Option = {
  value: string | number;
  label: string | number;
};
type Props = {
  label: string;
  options: Option[];
  name: string;
  onChange: () => void;
  defaultValue?: Option[];
};

export default function CustomSelect({
  label,
  options,
  name,
  onChange,
  defaultValue,
}: Props) {
  const styles = {
    menu: (provided, state) => ({ ...provided, zIndex: "9990" }),
    input: (provided, state) => ({ ...provided, padding: "15px" }),
  };
  const handleChange = (options) =>
    //@ts-ignore
    onChange(options.map((option) => option.value));
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Select
        onChange={(options) => handleChange(options)}
        options={options}
        name={name}
        isMulti
        styles={styles}
        defaultValue={defaultValue}
        placeholder="Wybierz opcje..."
      />
    </Wrapper>
  );
}
