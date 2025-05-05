/* eslint-disable */
//워닝 메세지 없애는 법(초보 추천)
import { act, useState } from "react";
import "./App.css";

function App() {
  // let post = '강남 우동 맛집'; 변수 선언법
  let [글제목, set글제목] = useState([
    "강남 우동 맛집     ",
    "남자 코트 추천     ",
    "아보카도 커피 맛집     ",
  ]);
  let [붐따, 붐따변경] = useState([0, 0, 0]); //배열로 선언하는이유 : 각 게시글별 좋아요수치 저장. 그래야 [붐따[0] 할수있다
  let [modal, setmodal] = useState(false); // 펑션함수 안에 위치
  let [title, settitle] = useState(0);//타이틀을 숫자로 선언. 밑에 버튼에서 글제목의 배열 인덱스 지정에 사용됨.

  //글제목, b는 각각 작명 가능

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4 onClick={(e)=>{setmodal(true); settitle(i);}}> 
              {/* settitle : useState로 정의된 title상태 변경 함수
                  변수 i : 글제목 배열을 돌면서 각 요소 나타냄
                  settitle(i) 실행 시, title 상태가 i로 업데이트 됨
                  title 바뀌면 모달창에서 props.글제목[title]을 통해 
                  그 인덱스에 해당하는 글제목 출력됨
                  */}
            {a}
              <span
                onClick={(e) => {
                  e.stopPropagation();//이벤트 버블링 방지
                  let copy =[...붐따];
                  copy[i]= copy[i] + 1;
                  붐따변경(copy);//꼭 set변수이름 
                }}
              >
               좋아요👍{붐따[i]}{" "}
              </span>
            </h4>
            <p>2월 17일 발행</p>
          </div>

          
        )
    } 
          
        )
      }
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

      <button onClick={()=>{settitle(0)}}>글제목0</button> 
      <button onClick={()=>{settitle(1)}}>글제목1</button>
      <button onClick={()=>{settitle(2)}}>글제목2</button>

      {
      modal === true ? <Modal set글제목={set글제목} title={title} 글제목={글제목} color={'skyblue'} /> : null
      }
    </div>
  );
}

  function Modal(props) {
    return (
      <div className="modal" style={{background : props.color}}>
        <h4>{props.글제목[props.title]}</h4>
        <p>상세페이지 내용</p>
        <button onClick={()=>{ props.set글제목(['아기 코트 추천','아기 코트 추천','아기 코트 추천'])
        }}>글수정</button>
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


export default App; //이 파일(App.jsx)에서 App이라는 컴포넌트를 기본(default)으로 외부에 내보냄. 이라는 뜻
