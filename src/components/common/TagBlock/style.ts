import styled from "styled-components";

export const TagBlock = styled.div<{selected: boolean}>`
  width: fit-content;
  padding: .5em .75em;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: .5em;

  border: 1px solid #eaeaea;
  border-radius: .5em;

  user-select: none;

  transition: all .15s cubic-bezier(0, 1, 1, 1);
  & * {
    transition: all .15s cubic-bezier(0, 1, 1, 1);
  }

  & span {
    font-size: 1em;
    font-weight: 500;
    white-space: nowrap;
  }
  
  ${({selected}) => 
    selected ? 
      `
        background-color: var(--service-color-H);
        color: var(--service-color-A);
      `: 
      `
        background-color: var(--service-color-A);
        color: var(--service-color-O);
      `
  }
`;