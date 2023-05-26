import styled from 'styled-components';
import {ChangeEvent, useState} from 'react';
import { Footer } from './components/footer';

export const App = () => {
  //텍스트 박스 state
  const [text, setText] = useState<string>("");
  //메모 목록 state
  const [memos, setMemos] = useState<string[]>([]);

  //추가 버튼
  const onClickAdd = () => {
    //state 정상적 감지위한 새 배열 생성
    const newMemos = [...memos];
    newMemos.push(text);
    //입력 text를 넣은 배열을 memos안에 넣기
    setMemos(newMemos);
    //input 비우기
    setText("");
  }

  //삭제 버튼
  const onClickDelete = (index: number) => {
    //state 정상적 감지위한 새 배열 생성
    const newMemos = [...memos];
    newMemos.splice(index,1);
    //index 값 삭제한 배열을 memos안에 넣기
    setMemos(newMemos);
  }

  //텍스트 박스 내용 state에 설정
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) =>  setText(e.target.value);


  return (
    <div style={{width: "600px", margin: "0 50px"}}>
      <SH1>간단 메모 애플리케이션</SH1>
      <SInput type='text' value={text} onChange={onChangeText} />
      <SButton onClick={onClickAdd}>추가</SButton>

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
      <Footer/>
    </div>
  );
}

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

const SContainer = styled.div`
  border: solid 1px #ccc;
  width: 600px;
  padding: 16px 0;
  margin-top: 10px;
  background-color: white;
`;

const SMemoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SInput = styled.input`
  width: 510px;
`;

const SH1 = styled.h1`
  text-align: center;
  line-height: 32px;
  padding: 30px;
`;

const SP = styled.p`
  text-align: center;
  color: gray;
`