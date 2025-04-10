// try {
//   const arr = new Array(-1);
// } catch (e) {
//   console.log(e);
// }
// console.log("after error");

// try {
//   console.log(x);
// } catch (e) {
//   console.log(`err msg: ${e}`);
// } finally {
//   console.log("반드시 실행");
// }

// // 예외 던지기
// try {
//   const err = new Error("에러");
//   throw err;
// } catch (e) {
//   console.log(`custom error => ${e}`);
// }

// try {
//   const result = 10 / 0;
//   if (!isFinite(result)) {
//     throw new Error("0으로 나눌 수 없습니다.");
//   }
// } catch (e) {
//   console.log(`error ${e.message}`);
// }

// // 문제1: const val1 = Number("hello") -> NaN 발생
// // NaN 발생시 "숫자만 입력하세요" 에러를 던지고 catch로 잡아서 console.log
// try {
//   const val1 = Number("hello");
//   if (isNaN(val1)) {
//     throw new Error("숫자만 입력하세요");
//   }
// } catch (e) {
//   console.log(`error ${e.message}`);
// }

// // 문제2: 문자열이 비어있으면 예외를 발생시키고 catch문에서 "빈 문자열입니다"를 출력
// try {
//   const str1 = "";
//   if (str1 === "") {
//     throw new Error("빈 문자열입니다.");
//   }
// } catch (e) {
//   console.log(`error ${e.message}`);
// }

// function fetchData(callback) {
//   setTimeout(() => {
//     const data = "서버에서 받은 데이터";
//     callback(data);
//   }, 2000);
// }

// fetchData((data) => {
//   console.log(`데이터를 받아서 처리합니다. ${data}`);
// });

// // 문제3: 데이터를 2초 후에 받아오는 작업
// // 콜백 함수로 데이터를 출력
// // 서버 응답 데이터는 "로그인 데이터 입니다."
// function fetchData2(callback) {
//   setTimeout(() => {
//     const data = "로그인 데이터";
//     callback(data);
//   }, 2000);
// }
// fetchData2((data) => {
//   console.log(`데이터를 받아서 처리합니다. ${data}`);
// });

// 1. 첫 번째 작업: 데이터를 가져온다.
// 2. 두 번째 작업: 가져온 데이터를 처리한다.
// 3. 세 번째 작업: 처리 완료 후에 메시지를 출력한다.
// const fetchData1 = (cb) => {
//   setTimeout(() => {
//     const data = "서버에서 받은 데이터";
//     cb(data);
//   }, 1000);
// };

// const handleData2 = (data, cb) => {
//   setTimeout(() => {
//     const result = `${data} 가공 완료`;
//     cb(result);
//   }, 1000);
// };

// const showResult3 = (result) => {
//   console.log(`최종 결과: ${result}`);
// };

// fetchData1((data) => {
//   handleData2(data, (result) => {
//     showResult3(result);
//   });
// });

// const fetchDataPromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = true;
//       const data = "서버 데이터";
//       if (success) {
//         resolve(data);
//       } else {
//         reject("에러 메시지: 데이터 요청 실패");
//       }
//     }, 2000);
//   });
// };

// fetchDataPromise()
//   .then((data) => {
//     console.log(`Promise로부터 받은 ${data}`);
//   })
//   .catch((e) => {
//     console.log(`에러 ${e}`);
//   });

const p = new Promise(() => {
  console.log("Promise는 바로 실행");
});

const fetch1 = () => {
  return new Promise(() => {
    console.log("호출해야 실행되는 프로미스");
  });
};

fetch1();

const p2 = new Promise((resolve, reject) => {
  console.log("프로미스 시작");
  // resolve("끝");
  reject("에러");
});

p2.then((data) => {
  console.log("then 실행", data);
}).catch((e) => {
  console.error(e);
});

// 문제: 다운로드 파일을 받는 작업을 프로미스로 해결
// 파일 다운로드 시간은 3초
// 다운로드 완료 후에 완료 메시지 출력
const downloadFile = (filename) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${filename} 다운로드 완료`);
      resolve();
    }, 3000);
  });
};

downloadFile("test.pdf").then(() => {
  console.log("다운로드 후에 처리 작업 수행");
});

const fetchData4 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "서버에서 받은 데이터";
      resolve(data);
    }, 1000);
  });
};

const handleData5 = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = `${data} 가공 완료`;
      resolve(result);
    }, 1000);
  });
};

const showResult6 = (result) => {
  return new Promise((resolve, reject) => {
    console.log(`최종 결과: ${result}`);
  });
};

fetchData4()
  .then(handleData5)
  .then(showResult6)
  .catch((err) => {
    console.log("에러 발생", err);
  });

async function processData() {
  try {
    const data = await fetchData4();
    const result = await handleData5(data);
    showResult6(result);
  } catch (e) {
    console.log(e);
  }
}
processData();
