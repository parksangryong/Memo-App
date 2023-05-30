import {FC} from 'react';
import styled from 'styled-components';

//type 설정
type Props = {
    memos : string[];
    onClickDelete : (index: number) => void;
}

//위에 설정한 type을 넣고 props 받아오기
export const MemoList : FC<Props> = (props) => {
    const {memos, onClickDelete} = props;

    //App.tsx에 메모 영역 가져오기
    return(
        <SContainer>
        <SP>메모 목록</SP>
        <ul>
          {memos.map((memo, index) => (
            <li key={memo}>
              <SMemoWrapper>
                <p>{memo}</p><SButton onClick={() => onClickDelete(index)}>삭제</SButton>
              </SMemoWrapper>
            </li>
          ))}
        </ul>
      </SContainer>
    )
}

const SContainer = styled.div`
  border: solid 1px #ccc;
  width: 600px;
  padding: 16px 0;
  margin-top: 10px;
  background-color: white;
`;

const SButton = styled.button`
  margin : 0 16px;
  color : white;
  background-color: gray;
  border: 1px solid white;
  width: 50px;
  :hover{
    color: red;
    font-weight: bold;
  }
`;

const SMemoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SP = styled.p`
  text-align: center;
  color: gray;
`