<template>
  <div>
    <div v-if="isEmptyArray">
      <p class="text-center text-gray-500">No tweets yet.</p>
    </div>

    <div
      v-else
      class="pb-4 border-b hover:bg-gray-100 cursor-pointer dark:hover:bg-dim-300"
      :class="{ twitterBorderColor, defaultTransition }"
      v-for="tweet in props.tweets"
      :key="tweet.id"
      @click="redirect(tweet)"
    >
      <TweetItem :tweet="tweet" compact>
        {{ tweet.text }}
      </TweetItem>
    </div>
  </div>
</template>

<script setup>
const { twitterBorderColor, defaultTransition } = useTailwindConfig();

const props = defineProps({
  tweets: {
    type: Array,
    required: true,
  },
});

const isEmptyArray = computed(() => {
  return props.tweets.length === 0;
});

const redirect = (tweet) => {
  // navigateTo(`/status/${tweet.id}`);
  window.location.href = `/status/${tweet.id}`;
};
</script>
