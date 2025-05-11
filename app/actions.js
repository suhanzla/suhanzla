"use server"

// 이 함수는 실제로 노션 API와 연동하여 웨이팅 리스트에 사용자를 추가하는 역할을 합니다.
// 페이크 도어 테스트이므로 실제 구현은 하지 않고 예시만 제공합니다.
export async function addToWaitlist({ name, email }) {
  // 실제 구현에서는 노션 API를 호출하여 데이터베이스에 사용자 정보를 추가합니다.
  // 예시 코드:
  /*
  const response = await fetch('https://api.notion.com/v1/pages', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.NOTION_API_KEY}`,
      'Content-Type': 'application/json',
      'Notion-Version': '2022-06-28',
    },
    body: JSON.stringify({
      parent: { database_id: process.env.NOTION_DATABASE_ID },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Email: {
          email: email,
        },
        Date: {
          date: {
            start: new Date().toISOString(),
          },
        },
      },
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to add to waitlist');
  }

  return response.json();
  */

  // 페이크 도어 테스트를 위한 더미 응답
  return {
    success: true,
    message: "웨이팅 리스트에 성공적으로 등록되었습니다.",
  }
}
