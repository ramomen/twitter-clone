<template>
  <div class="flex flex-col">
    <!-- Whats Happening-->
    <SidebarRightPreviewCard title="Whats Happening">
      <SidebarRightPreviewCardItem
        v-for="whatsHappening in whatsHappeningsItems"
      >
        <h2 class="font-bold text-gray-900 text-md dark:text-white">
          {{ whatsHappening.title }}
        </h2>

        <p class="text-sm text-gray-400">
          {{ whatsHappening.count }}
        </p>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
    <!-- Who to follow -->
    <SidebarRightPreviewCard title="Who to follow">
      <SidebarRightPreviewCardItem v-for="whoToFollow in whoToFollowItems">
        <div class="flex flex-row justify-between p-2">
          <div class="flex-flex-row">
            <img
              :src="whoToFollow.image"
              :alt="whoToFollow.name"
              class="w-10 h-10 rounded-full"
            />

            <div class="flex flex-row ml-2">
              <h1
                class="text-sm font-bold text-gray-900 dark:text-white"
              >{{ whoToFollow.name }}</h1>
              <p
                class="text-xs text-gray-400"
              >{{ whoToFollow.handle }}</p>
            </div>
          </div>

          <div
          class="flex items-center h-full"
          >
            <button
              class="px-4 py-2 font-bold text-xs text-white dark:text-black bg-black dark:bg-white rounded-full"
            >
              Follow
            </button>
          </div>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
  </div>
</template>
<script setup>
const whatsHappeningsItems = ref([
  {
    title: "Trending in Canada",
    count: "1,234 Tweets",
  },
  {
    title: "Trending in Canada",
    count: "1,234 Tweets",
  },
  {
    title: "Trending in Canada",
    count: "1,234 Tweets",
  },
]);

const whoToFollowItems = ref([
  {
    name: "Elon Musk",
    handle: "@elonmusk",
    image: "https://picsum.photos/200/200",
  },
  {
    name: "Elon Musk",
    handle: "@elonmusk",
    image: "https://picsum.photos/200/200",
  },
  {
    name: "Elon Musk",
    handle: "@elonmusk",
    image: "https://picsum.photos/200/200",
  },
]);
</script>
