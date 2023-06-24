<template>
  <div class="flex flex-col">
    <!--Search-->
    <div class="relative m-2">
      <div
        class="absolute flex items-center h-full pl-4 text-gray-600 cursor-pointer"
      >
        <div class="w-6 h-6">
          <SearchIcon @click="handleSearch" />
        </div>
      </div>

      <input
        v-model="search"
        class="flex items-center w-full pl-12 text-sm font-normal text-black bg-gray-200 border border-gray-200 rounded-full shadow dark:text-gray-100 dark:bg-dim-400 dark:border-dim-400 focus:bg-gray-100 dark:focus:bg-dim-900 focus:outline-none focus:border focus:border-blue-200 h-9"
        placeholder="Search tweet"
        type="text"
      />
    </div>

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
        <div class="flex flex-row items-center justify-between p-2">
          <div class="flex flex-row">
            <img
              class="w-10 h-10 rounded-full"
              :src="whoToFollow.image"
              :alt="whoToFollow.name"
            />

            <div class="flex flex-col ml-2">
              <h1 class="text-sm font-bold text-gray-900 dark:text-white">
                {{ whoToFollow.name }}
              </h1>
              <p class="text-xs text-gray-400">{{ whoToFollow.handle }}</p>
            </div>
          </div>
          <div class="flex h-full">
            <button
              class="px-4 py-2 text-xs font-bold text-white bg-black rounded-full dark:text-black dark:bg-white"
            >
              Follow
            </button>
          </div>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>

    <footer>
      <ul class="mx-2 my-4 text-xs text-gray-500">
        <li class="inline-block mx-2">
          <a class="hover:underline" href=""
          @click.prevent="handleToggleDarkMode"
          > Dark mode </a>
        </li>
        <li class="inline-block mx-2">
          <a class="hover:underline" href=""> Privacy policy </a>
        </li>
        <li class="inline-block mx-2">
          <a class="hover:underline" href=""> Cookie Policy </a>
        </li>
        <li class="inline-block mx-2">
          <a class="hover:underline" href=""> Accessibility </a>
        </li>
        <li class="inline-block mx-2">
          <a class="hover:underline" href=""> Ads info </a>
        </li>
        <li class="inline-block mx-2">
          <a class="hover:underline" href=""> More </a>
        </li>
        <li class="inline-block mx-2">
          Twitter Clone 
        </li>
      </ul>
    </footer>
  </div>
</template>
<script setup>
import { SearchIcon } from "@heroicons/vue/outline";

const emitter = useEmitter();

const search = ref("");

const handleSearch = () => {
  // useRouter().push({
  //   path: "/search",
  //   query: {
  //     q: search.value,
  //   },
  // });

  window.location.href = `/search?q=${search.value}`;
};

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

const handleToggleDarkMode = () => {
  emitter.$emit("toggleDarkMode");
};
</script>
