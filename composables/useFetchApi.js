export default (url,options={}) => {
    const { useAuthToken } = useAuth();
    const authToken = useAuthToken();
    return $fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${authToken.value}`
        }
    });
};
