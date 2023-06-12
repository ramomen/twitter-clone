import jwt from "jsonwebtoken";

const generateAccessToken = (user) => {
  const config = useRuntimeConfig();

  return jwt.sign({ userId: user.id }, config.jwtAccessToken, {
    expiresIn: "15m",
  });
};

const generateRefreshToken = (user) => {
  const config = useRuntimeConfig();

  return jwt.sign({ userId: user.id }, config.jwtRefreshToken, {
    expiresIn: "7d",
  });
};

export const generateTokens = (user) => {
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  return {
    accessToken: accessToken,
    refreshToken: refreshToken,
  };
};

export const sendRefreshToken = (event, token) => {
  setCookie(event, "refresh_token", token, {
    httpOnly: true,
    path: "/api/auth/refresh-token",
  });
};
