<template>
  <div class="flex items-center justify-around w-full">
    <TweetFormActionsIcons color="blue" :size="size">
      <template v-slot:icon="{ classes }">
        <ChatIcon :class="`${classes}`" />
      </template>
      <template v-if="showStats" v-slot:default>
        {{ props.tweet.repliesCount }}
      </template>
    </TweetFormActionsIcons>

    <TweetFormActionsIcons color="green" :size="size">
      <template v-slot:icon="{ classes }">
        <RefreshIcon :class="`${classes}`" />
      </template>
      <template v-if="showStats" v-slot:default>
        {{ generateRandomNumber() }}
      </template>
    </TweetFormActionsIcons>

    <TweetFormActionsIcons color="red" :size="size">
      <template v-slot:icon="{ classes }">
        <HeartIcon :class="`${classes}`" />
      </template>
      <template v-if="showStats" v-slot:default>
        {{ generateRandomNumber() }}
      </template>
    </TweetFormActionsIcons>
    <TweetFormActionsIcons color="blue" :size="size">
      <template v-slot:icon="{ classes }">
        <UploadIcon :class="`${classes}`" />
      </template>
      <template v-if="showStats" v-slot:default>
        <span>
          {{ generateRandomNumber() }}
        </span>
      </template>
    </TweetFormActionsIcons>
  </div>
</template>
<script setup>
import {
  ChatIcon,
  HeartIcon,
  RefreshIcon,
  UploadIcon,
} from "@heroicons/vue/outline";

const props = defineProps({
  tweet: {
    type: Object,
    required: true,
  },
  compact: {
    type: Boolean,
    default: false,
  },
});

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100);
};

const showStats = computed(() => props.compact);
const size = computed(() => (props.compact ? 5 : 8));
</script>
