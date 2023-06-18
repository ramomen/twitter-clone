export default () => {
  const postTweet = (formData) => {
    const form = new FormData();

    form.append("text", formData.text);
    formData.mediaFiles.forEach((mediaFile, index) => {
      form.append("media_file_" + index, mediaFile);
    });

    return useFetchApi("/api/user/tweets", {
      method: "POST",
      body: form,
    });
  };

  const getHomeTweets = () => {
    return new Promise((resolve, reject) => {
      try {
        const response = useFetchApi("/api/tweets", {
          method: "GET",
        });

        console.log(response);
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  };

  return {
    postTweet,
    getHomeTweets,
  };
};
