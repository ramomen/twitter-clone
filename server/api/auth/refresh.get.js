import { getRefreshTokenByToken } from "../../db/refreshTokens.js";
import { decodeRefreshToken, generateTokens } from "../../utils/jwt.js";
import { getUserById } from "../../db/user.js";
export default defineEventHandler(async (event) => {
  //get the refresh token from the cookie

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
  if (!rToken) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Refresh Token is invalid2",
      })
    );
  }

  const token = decodeRefreshToken(refreshToken);

  try {
    const user = await getUserById(token.userId);

    const { accessToken } = generateTokens(user);

    return {
      access_token: accessToken,
    };
  } catch (error) {
    return sendError(
      event,
      createError({
        statusCode: 500,
        statusMessage: "Something went wrong",
      })
    );
  }

});
