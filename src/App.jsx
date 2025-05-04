/* eslint-disable */
//워닝 메세지 없애는 법(초보 추천)
import { act, useState } from "react";
import "./App.css";

function App() {
  // let post = '강남 우동 맛집'; 변수 선언법
  let [글제목, set글제목] = useState([
    "강남 우동 맛집",
    "남자 코트 추천",
    "아보카도 커피 맛집",
  ]);
  let [붐따, 붐따변경] = useState([0, 0, 0]); //배열로 선언하는이유 : 각 게시글별 좋아요수치 저장. 그래야 [붐따[0] 할수있다
  let [modal, setmodal] = useState(false); // 펑션함수 안에 위치
  let [title, settitle] = useState(0);

  //글제목, b는 각각 작명 가능

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4 onClick={()=>{setmodal(true); settitle(i);}}>
              <span
                onClick={(e) => {
                  붐따(붐따변경[i] + 1);
                }}
              >
                좋아요👍{붐따[i]}{" "}
              </span>
            
            </h4>
            <p>2월 17일 발행</p>
          </div>
          
        );
      })}
      <button
        onClick={() => {
          //글수정 버튼 copy 생성해서 오류 잡기
          let copy = [...글제목];
          copy[1] = "여자 코트 추천";
          set글제목(copy);
        }}
      >
        수정버튼
      </button>
      {modal === true ? <Modal title={title} 글제목={글제목} /> : null}
    </div>
  );

  function Modal(props) {
    return (
      <div className="modal">
        <h4>{props.글제목[props.title]}</h4>
        <p>상세페이지 내용</p>
      </div>
    );

    /* 주의 . 주석은 epoert defult App 뒤에 쓰면 오류남
Destructuring
let num = [1,2]  배열 선언
let [a,c] = [1,2] 배열 할당
onCLick 함수 방법2
: <div oncCLick ={ function() {}}>
{}에 function 박기

스테이트가 어레이/오브젝트 면 카피본 생성 후 수정해야
원본 수정 X
원본 있는 위치를 알려주는 화살표 수정을 해*/
  }
}

export default App; //이 파일(App.jsx)에서 App이라는 컴포넌트를 기본(default)으로 외부에 내보냄. 이라는 뜻
