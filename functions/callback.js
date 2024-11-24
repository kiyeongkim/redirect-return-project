exports.handler = async (event, context) => {
  const code = event.queryStringParameters.code;

  if (!code) {
    return {
      statusCode: 400,
      body: "No authorization code found.",
    };
  }

  // 여기서 인증 코드를 사용하여 액세스 토큰을 요청하는 로직을 추가할 수 있습니다.
  // 예를 들어, 액세스 토큰을 요청하는 API 호출을 추가합니다.

  return {
    statusCode: 200,
    body: `Authorization code: ${code}`,
  };
};
