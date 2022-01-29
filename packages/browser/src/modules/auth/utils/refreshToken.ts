const refreshToken = (): Promise<Response> =>
  fetch('/api/auth/refresh-token', {
    credentials: 'include',
    method: 'POST',
  });

export default refreshToken;
