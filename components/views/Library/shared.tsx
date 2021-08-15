import styled from "styled-components";

export const TitleRow = styled.div<{ margin?: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
  margin: ${({ margin }) => margin && margin};
  h2 {
    font-size: 26px;
    font-weight: 500;
    margin: 0;
  }
  .buttons {
    display: flex;
    flex-direction: row;
  }

  .buttons button {
    margin-right: 20px;
  }
`;

export const Paper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Table = styled.div`
  display: block;
  margin: 2em auto;
  width: 100%;

  .flex-table {
    display: flex;
    flex-flow: row wrap;
    /* border: solid 1px ${({ theme }) => theme.colors.fontPrimary}; */
    transition: 0.5s;

    &:first-of-type .flex-row {
      background: ${({ theme }) => theme.colors.chipPrimary};
      cursor: default;
    }
    &.row:nth-child(odd) .flex-row {
      background: ${({ theme }) => theme.colors.primary};
    }
    &:hover {
      background: #f5f5f5;
      transition: 500ms;
    }
  }

  .flex-row {
    width: calc(100% / 4);
    text-align: center;
    padding: 10px;
    cursor: pointer;
  }

  .rowspan {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: center;
  }

  .column {
    display: flex;
    flex-flow: column wrap;
    width: 75%;
    padding: 0;
    .flex-row {
      display: flex;
      flex-flow: row wrap;
      width: 100%;
      padding: 0;
      border: 0;
      border-bottom: solid 1px $table-border;
      &:hover {
        background: #f5f5f5;
        transition: 500ms;
      }
    }
  }

  .flex-cell {
    width: calc(100% / 3); //1px = border right
    text-align: center;
    padding: 0.5em 0.5em;
    border-right: solid 1px $table-border;
    //flex: 1 1 33.3%;
    &:last-child {
      // border-right: 0;
    }
  }
  @media all and (max-width: 430px) {
    .flex-table {
      .flex-row {
        border-bottom: 0;
      }
      .flex-row:last-of-type {
        border-bottom: solid 1px $table-border;
      }
    }

    .header {
      .flex-row {
        border-bottom: solid 1px;
      }
    }

    .flex-row {
      width: 100%; //1px = border right

      &.first {
        width: 100%;
        border-bottom: solid 1px $table-border;
      }
    }

    .column {
      width: 100%;
      .flex-row {
        border-bottom: solid 1px $table-border;
      }
    }

    .flex-cell {
      width: 100%; //1px = border right
    }
  }
`;

export const ErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
