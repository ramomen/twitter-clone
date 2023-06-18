import UrlPattern from "url-pattern";
import { decodeAccessToken } from "../utils/jwt";
import { getUserById } from "../db/user.js";
export default defineEventHandler(async (event) => {
  const endpoints = [
    "/api/auth/user",
    "/api/user/tweets",
    "/api/tweets",
    "/api/tweets/:id",
  ];

  const isHandledByThisMiddleware = endpoints.some((endpoint) => {
    const pattern = new UrlPattern(endpoint);

    return pattern.match(event.node.req.url);
  });

  if (!isHandledByThisMiddleware) {
    return;
  }

  const token = event.node.req.headers["authorization"]?.split(" ")[1];

  const decoded = decodeAccessToken(token);

  // return sendError(
  //   event,
  //   createError({
  //     statusCode: 401,
  //     statusMessage: JSON.stringify(decoded),
  //   })
  // );

  if (!decoded) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Unauthorized",
      })
    );
  }

  try {
    const userId = decoded.userId;
    const user = await getUserById(userId);

    // return sendError(
    //   event,
    //   createError({
    //     statusCode: 401,
    //     statusMessage: user.id,
    //   })
    // );
    
    event.context.auth = { user };
  } catch (error) {
    return error;
  }
});
