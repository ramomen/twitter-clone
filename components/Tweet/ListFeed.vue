<template>
  <div>
    <h1>list feed</h1>

    <ul>
      <TweetFormItem
        v-for="tweet in props.tweets"
        :tweet="tweet"
        :key="tweet.id"
      >
        {{ tweet.text }}
      </TweetFormItem>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  tweets: {
    type: Array,
    required: true,
  },
});
</script>
