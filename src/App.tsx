import styled from 'styled-components';
import {ChangeEvent, useCallback, useState} from 'react';
import { Footer } from './components/footer';
import { MemoList } from './components/MemoList';
import { useMemoList } from './hooks/useMemoList';

export const App = () => {
  //사용자 정의 훅 얻기
  const {memos, addTodo, deleteTodo} = useMemoList();

  //텍스트 박스 state
  const [text, setText] = useState<string>("");

  //추가 버튼
  const onClickAdd = () => {
   //사용자 정의 훅 사용
   addTodo(text);
   //텍스트 박스 빈칸 만들기
   setText("");
  }

  //삭제 버튼, 삭제 함수 사용하면 렌더링
  const onClickDelete = useCallback((index: number) => {
    //사용자 정의 훅 사용
    deleteTodo(index);
  }, [deleteTodo]);

  //텍스트 박스 내용 state에 설정
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) =>  setText(e.target.value);


  return (
    <div style={{width: "600px", margin: "0 50px"}}>
      <SH1>간단한 메모장</SH1>
      <SInput type='text' value={text} onChange={onChangeText} />
      <SButton onClick={onClickAdd}>추가</SButton>

      <MemoList memos={memos} onClickDelete={onClickDelete} />

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

const SInput = styled.input`
  width: 510px;
`;

const SH1 = styled.h1`
  text-align: center;
  line-height: 32px;
  padding: 30px;
`;