<template>
  <div>
    <MainSection title="Tweet" :loading="loading">
      <!-- {{ user }} -->
      <Head>
        <Title>Home / Twitter</Title>
      </Head>

      <TweetDetails :tweet="tweet" :user="user" />
    </MainSection>
  </div>
</template>
<script setup>
import useTweet from "@/composables/useTweet";
const tweet = ref(null);
const loading = ref(false);

const { getTweetById } = useTweet();

const { useAuthUser } = useAuth();
const user = useAuthUser();

const getTweetIdFromRoute = () => {
  return useRoute().params.id;
};

watch(
  () => useRoute().fullPath,
  () => getTweet()
);

const getTweet = async () => {
  loading.value = true;
  try {
    const response = await getTweetById(getTweetIdFromRoute());
    tweet.value = response.tweet;
    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

onBeforeMount(() => {
  getTweet();
});
</script>
