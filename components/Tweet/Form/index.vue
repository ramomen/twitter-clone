<template>
  <div>
    <div v-if="loading" class="flex items-center justify-center py-6">
      <UISpinner />
    </div>

    <TweetFormInput v-else :user="props.user" @on-submit="handleFormSubmit" />
  </div>
</template>

<script setup>
const loading = ref(false);

const { postTweet } = useTweet();

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});

const handleFormSubmit = async (event) => {
  loading.value = true;
  console.log(event);
  try {
    const response = await postTweet({
      text: event.text,
      mediaFiles: event.mediaFiles,
    });
    alert(JSON.stringify(response));
    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};
</script>
