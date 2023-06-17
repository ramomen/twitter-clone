import { getUserByUsername } from "../../db/user.js";
import bycrypt from "bcrypt";
import { generateTokens, sendRefreshToken } from "../../utils/jwt.js";
import { userTransformer } from "../../db/transformers/user.js";
import { createRefreshToken } from "../../db/refreshTokens.js";




export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { username, password } = body;

  if (!username || !password) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Invalid params" })
    );
  }

  // is the user registered?
  const user = await getUserByUsername(username);

  if (!user) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Invalid username or password",
      })
    );
  }
  //compare the passwords

  const doesPasswordMatch = bycrypt.compare(password, user.password);

  if (!doesPasswordMatch) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Invalid username or password",
      })
    );
  }

  // generate a token

  //access token
  //refresh token
  const { accessToken, refreshToken } = generateTokens(user);

  // save it in the database

  await createRefreshToken({ token: refreshToken, userId: user.id });

  // add http only cookie

  sendRefreshToken(event, refreshToken);

  return {
    access_token: accessToken,
    user: userTransformer(user),
    refresh_token: refreshToken,
  };
});
