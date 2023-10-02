import styled from 'styled-components';


export const TransactionHistoryTable = styled.table`
  width: 700px;
  margin: 60px auto;
  
  border-collapse: collapse;

  -webkit-box-shadow: 6px 21px 23px 4px rgba(0,0,0,0.46);
  -moz-box-shadow: 6px 21px 23px 4px rgba(0,0,0,0.46);
  box-shadow: 6px 21px 23px 4px rgba(0,0,0,0.46);

   & th,
   & td {
    padding: 10px;
    text-align: center;
    border: 1px solid lightgray;
  }
  
  & tr {
    color:#A9A9A9;
  }

   & th {
    background-color: #87CEFA;
    font-weight: bold;
    color: #FFF;
  }

  & tr:nth-child(2n) {
    background-color: #F5F5F5;
  }

   & tr:hover,
  & td:hover{
    background-color: #A9A9A9;
    color: #FFFFFF;
  }
`