import formidable from "formidable";
import { createTweet } from "../../../db/tweets";
import { tweetTransformer } from "../../../db/transformers/tweet";
import { createMediaFile } from "../../../db/mediaFiles";
import { uploadToCloudinary } from "../../../utils/cloudinary";
export default defineEventHandler(async (event) => {
  const form = formidable({});

  const response = await new Promise((resolve, reject) => {
    form.parse(event.node.req, (err, fields, files) => {
      if (err) {
        reject(err);
      }
      resolve({ fields, files });
    });
  });

  const { fields, files } = response;

  const userId = event.context?.auth?.user?.id;

  const tweetData = {
    authorId: userId,
    text: fields.text[0],
  };
  const tweet = await createTweet(tweetData);

  // const filePromises = Object.keys(files).map(async (key) => {
  //   const file = files[key];
  //   const resource = await uploadToCloudinary(file.filepath);

  // });

  const filePromises = Object.keys(files).map(async (key) => {
    const file = files[key];
    const filepath = file[0].filepath;

    const resource = await uploadToCloudinary(filepath);

    return createMediaFile({
      url: resource.secure_url,
      providerPublicId: resource.public_id,
      userId: userId,
      tweetId: tweet.id,
    });
  });

  await Promise.all(filePromises);

  return {
    tweet: tweetTransformer(tweet),
  };
});
