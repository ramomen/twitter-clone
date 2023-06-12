import { getRefreshTokenByToken } from "../../db/refreshTokens.js";

export default defineEventHandler(async (event) => {
  const cookies = parseCookies(event);

  const refreshToken = cookies.refresh_token;

  if (!refreshToken) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Refresh Token is invalid",
      })
    );
  }

  const rToken = await getRefreshTokenByToken(refreshToken);

  return {
    hello: rToken,
  };
});
