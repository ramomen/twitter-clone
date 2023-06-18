import { tweetTransformer } from "../../db/transformers/tweet";
import { getTweetById } from "../../db/tweets";
export default defineEventHandler(async (event) => {
  const { id } = event.context.params;

  const tweet = await getTweetById(id, {
    include: {
      author: true,
      mediaFiles: true,
      replyTo: {
        include: {
          author: true,
        },
      },
      replies: {
        include: {
          mediaFiles: true,
          author: true,
          replyTo: {
            include: {
              author: true,
            },
          },
        },
      },
    },
  });

  return {
    tweet: tweetTransformer(tweet),
  };
});
