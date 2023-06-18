<template>
  <div class="flex flex-col h-screen">
    <div
      class="p-2 my-2 rounded-full hover:bg-blue-50 w-min dark:hover:bg-dim-200 dark:text-white"
      :class="defaultTransaction"
    >
      <nuxt-link to="/">
        <div class="w-8 h-8">
          <LogosTwitter />
        </div>
      </nuxt-link>
    </div>

    <div class="mt-2 space-y-8">
      <SidebarTab active>
        <template #icon>
          <HomeIcon />
        </template>
        <template #name> Home </template>
      </SidebarTab>
      <SidebarTab>
        <template #icon>
          <HashtagIcon />
        </template>
        <template #name> Explore </template>
      </SidebarTab>
      <SidebarTab>
        <template #icon>
          <BellIcon />
        </template>
        <template #name> Notifications </template>
      </SidebarTab>
      <SidebarTab>
        <template #icon>
          <InboxIcon />
        </template>
        <template #name> Messages </template>
      </SidebarTab>
      <SidebarTab>
        <template #icon>
          <BookmarkIcon />
        </template>
        <template #name> Bookmarks </template>
      </SidebarTab>
      <SidebarTab>
        <template #icon>
          <DocumentIcon />
        </template>
        <template #name> Lists </template>
      </SidebarTab>
      <SidebarTab>
        <template #icon>
          <UserIcon />
        </template>
        <template #name> Profile </template>
      </SidebarTab>
      <SidebarTab>
        <template #icon>
          <DotsCircleHorizontalIcon />
        </template>
        <template #name> More </template>
      </SidebarTab>
      <div class="hidden xl:block">
        <UIButton liquid size="lg">
          <span class="font-bold"> Tweet </span>
        </UIButton>
      </div>
      <div class="block xl:hidden">
        <UIButton>
          <div class="w-6 h-6 font-bold">
            <PencilIcon />
          </div>
        </UIButton>
      </div>
    </div>
  </div>
</template>
<script setup>
import { HomeIcon } from "@heroicons/vue/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  DocumentIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  PencilIcon
} from "@heroicons/vue/outline";
const { defaultTransaction } = useTailwindConfig();
</script>
