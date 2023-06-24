<template>
  <div>
    <MainSection title="Home" :loading="loading">
      <!-- {{ user }} -->
      <Head>
        <Title>Home / Twitter</Title>
      </Head>
      <div class="border-b" :class="twitterBorderColor">
        <TweetForm :user="user" @on-success="handleFormSubmit" />
      </div>

      <TweetListFeed :tweets="homeTweets" />
    </MainSection>
  </div>
</template>

<script setup>
const { twitterBorderColor } = useTailwindConfig();
const { getTweets } = useTweet();
const loading = ref(false);

const { useAuthUser } = useAuth();
const homeTweets = ref([]);
const user = useAuthUser();

onBeforeMount(async () => {
  handleFormSubmit();
});
const handleFormSubmit = async () => {
  loading.value = true;
  try {
    const { tweets } = await getTweets();
    homeTweets.value = tweets;
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
}
</script>
