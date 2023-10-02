import styled from 'styled-components';


export const ProfileWrap = styled.div`
width: 340px;
    margin: 0 auto;
    padding: 70px 50px;
    border-radius: 10px;
    background-color: #bcdee6;
     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Description = styled.div`
    width: 240px;
  height: 230px;
  margin: 0 auto;
  padding: 30px;
  background-color: #ffffff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Avatar = styled.img`
    width: 110px;
    display: block;
    margin: 0 auto 20px;
    border-radius: 50%;
`;

export const Name = styled.p`
    text-align: center;
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 15px;
`;

export const Tag = styled.p`
    text-align: center;
    font-size: 16px;
    color: grey;
    margin-bottom: 15px;
`

export const Location = styled.p`
    text-align: center;
    font-size: 16px;
    color: grey;
`

export const Stats = styled.ul`
    width: 300px;
    height: 100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    background-color:#D3D3D3;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    list-style-type: none;
`

export const LisItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    text-align: center;
    
    &:not(:last-child) {
    border-right: 1px solid gray;
  }
`
export const Label = styled.span`
    color: gray;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`

export const Quantity = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 18px;
`