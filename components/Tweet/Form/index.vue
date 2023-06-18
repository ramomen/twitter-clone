<template>
  <div>
    <div v-if="loading" class="flex items-center justify-center py-6">
      <UISpinner />
    </div>
    <TweetFormInput
      v-else
      :user="props.user"
      @on-submit="handleFormSubmit"
      :placeholder="props.placeholder"
    />
  </div>
</template>

<script setup>
const loading = ref(false);

const { postTweet } = useTweet();

const emits = defineEmits(["onSuccess"]);
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
  placeholder: {
    type: String,
    required: false,
    default: "What's happening?",
  },
  replyTo: {
    type: Object,
    required: false,
    default: null,
  },
});

const handleFormSubmit = async (event) => {
  loading.value = true;
  console.log(event);
  try {
    const response = await postTweet({
      text: event.text,
      mediaFiles: event.mediaFiles,
      replyTo: props.replyTo?.id,
    });
    emits("onSuccess", response.tweet);
    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};
</script>
