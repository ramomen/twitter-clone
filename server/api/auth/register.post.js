import { sendError } from "h3";
import { createUser } from "../../db/user.js";
import { userTransformer } from "../../db/transformers/user.js";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { username, password, email, repeatPassword, name } = body;

  if (!username || !password || !email || !repeatPassword || !name) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Invalid params" })
    );
  }

  if (password !== repeatPassword) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Passwords do not match" })
    );
  }

  const userData = {
    username,
    password,
    email,
    name,
    profileImage: "https://picsum.photos/200/200",
  };

  const user = await createUser(userData);

  return {
    body: userTransformer(user),
  };
});
