import { useCallback, useState } from "react";

export const useMemoList = () => {
  //메모 목록 state
  const [memos, setMemos] = useState<string[]>([]);

  //메모 추가 로직
  const addTodo = useCallback((text: string) => {
    //state 변경 감지 위해 새 배열 생성
    const newMemos = [...memos];
    //텍스트 박스 입력 내용 newMemos에 추가
    newMemos.push(text);
    //newMemos 내용을 memos로
    setMemos(newMemos);
  }, [memos]);

  //메모 삭제 로직
  const deleteTodo = useCallback((index: number) => {
    //state 변경 감지 위해 새 배열 생성
    const newMemos = [...memos];
    // newMemos에 에서 index 번 삭제
    newMemos.splice(index, 1);
    //newMemos 내용을 memos로
    setMemos(newMemos);
  }, [memos]);

  //사용자 정의 훅 사용할 수 있게 반환하기
  return {memos, addTodo, deleteTodo};
}