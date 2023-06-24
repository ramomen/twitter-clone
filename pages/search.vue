<template>
    <div>
      <MainSection title="Search" :loading="loading">
        <!-- {{ user }} -->
        <Head>
          <Title>Search</Title>
        </Head>

  
        <TweetListFeed :tweets="homeTweets" />
      </MainSection>
    </div>
  </template>
  
  <script setup>
  const { getTweets:getTweetComposable } = useTweet();
  const loading = ref(false);
  const homeTweets = ref([]);
  const searchQuery = ref(useRoute().query.q)

  watch(
  () => useRoute().fullPath,
  () => getTweet()
);

const getTweet = async () => {
    loading.value = true;
    try {
      const { tweets } = await getTweetComposable({
        query:searchQuery.value
      });
      homeTweets.value = tweets;
    } catch (error) {
      console.error(error);
    } finally {
      loading.value = false;
    }
  }
  
  onBeforeMount(async () => {
    getTweet();
  });


  </script>
  