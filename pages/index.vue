<template>
  <div>
    <MainSection title="Home" :loading="loading">
      <!-- {{ user }} -->
      <Head>
        <Title>Home / Twitter</Title>
      </Head>
      <div class="border-b" :class="twitterBorderColor">
        <TweetForm :user="user" />
      </div>

      <TweetListFeed :tweets="homeTweets" />
    </MainSection>
  </div>
</template>

<script setup>
const { twitterBorderColor } = useTailwindConfig();
const { getHomeTweets } = useTweet();
const loading = ref(false);

const { useAuthUser } = useAuth();
const homeTweets = ref([]);
const user = useAuthUser();

onBeforeMount(async () => {
  loading.value = true;
  try {
    const { tweets } = await getHomeTweets();
    homeTweets.value = tweets;
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
});
</script>
