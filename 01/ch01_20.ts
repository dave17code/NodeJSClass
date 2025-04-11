// 1. Promise 기본
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// 실행 예시
console.log("=== Promise 기본 예제 ===");
console.log("시작");
delay(1000).then(() => console.log("1초 후 실행"));

// 2. Promise를 사용한 비동기 함수
function fetchUser(id: number): Promise<{ id: number; name: string }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: "홍길동" });
      } else {
        reject(new Error("유효하지 않은 ID"));
      }
    }, 1000);
  });
}

async function getUser(id: number): Promise<void> {
  try {
    console.log("사용자 정보를 가져오는 중...");
    const user = await fetchUser(id);
    console.log("사용자:", user);
  } catch (error) {
    console.error("에러:", error);
  }
}
