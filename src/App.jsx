/* eslint-disable*/ //워닝 메세지 없애는 법(초보 추천)
import { useState } from 'react';
import './App.css';

function App() {

// let post = '강남 우동 맛집'; 변수 선언법
  let [글제목,set글제목] = useState(['강남 우동 맛집','여자 코트 추천','아보카도 커피 맛집']);
  let [좋아요, set좋아요] = useState(0);
  function 붐따(){
    console.log(1)
  let [붐따,붐따변경] = useState(0);
  let [여자,여자변경] = useState(0);
  };
  //글제목, b는 각각 작명 가능
  return ( /* 주의: 리턴() 안에 병렬로 태그 2개 이상 기입 금지 */
     <>
      <div className="App">
        <div className="black-nav">
          <h4>블로그임</h4>
        </div>
        <button onClick={()=>{여자변경(console.log('여성 코트 추천'))}}>{여자}</button>
        <div className="list">
            <h4>{글제목[0]}<span> 좋아요👍</span> <span onClick={()=>{붐따변경(붐따+1)}}>{붐따}</span></h4>
            <p>2월 17일 발행</p>
        </div>
        <div className="list">
            <h4>{글제목[1]}</h4>
            <p>2월 17일 발행</p>
        </div>
        <div className="list">
            <h4>{글제목[2]}</h4>
            <p>2월 17일 발행</p>
        </div>
        <div className="modal">
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
      </div> 
       </>
  );
   
    
}


export default App;
/*Destructuring
let num = [1,2]  배열 선언
let [a,c] = [1,2] 배열 할당
onCLick 함수 방법2
: <div oncCLick ={ function() {}}>
{}에 function 박기

스테이트가 어레이/오브젝트 면 카피본 생성 후 수정해야
원본 수정 X
원본 있는 위치를 알려주는 화살표 수정을 해></div>*/