let count = 0;

function increment() {
  count += 1;
  console.log(count);
}

document.getElementById("btn").addEventListener("click", increment);

function useState(initialValue) {
  let state = initialValue;

  function setState(newValue) {
    state = newValue;
    render(); // UI 업데이트 역할
  }

  return [() => state, setState];
}

// 상태 및 UI 업데이트 함수 만들기
const [getCount, setCount] = useState(0);

function render() {
  document.getElementById("count").innerText = getCount(); // 함수 결과 값
}

document.getElementById("btn").addEventListener("click", () => {
  setCount(getCount() + 1);
});

render(); // 초기 UI 렌더링

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// };

// const [state, dispatch] = useReducer(reducer, { count: 0 });

// dispatch({ type: "increment" });

// useEffect(() => {
//   fetchData();
// }, []); // 의존성 배열이 비어 있으면 마운트 시 1회 실행
