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
    render(); // UI를 업데이트하는 역할
  }

  return [() => state, setState];
}

// 상태 및 UI 업데이트 함수 만들기기
const [getCount, setCount] = useState(0);

function render() {
  document.getElementById("count").innerText = getCount();
}

document.getElementById("btn").addEventListener("click", () => {
  setCount(getCount() + 1);
});

render(); // 초기 UI 렌더링
