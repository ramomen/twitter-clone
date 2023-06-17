<template>
  <div :class="{ dark: isDark }">
    <div class="bg-white dark:bg-dim-900 dark:text-white">
      <!-- App -->

      <LoadingPage v-if="isAuthLoading" />

      <div v-else-if="user" class="min-h-full">
        <div
          class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5"
        >
          <!-- Left Sidebar -->
          <div class="hidden md:block xs-col-span-1 xl:col-span-2">
            <div class="sticky top-0">
              <SidebarLeft />
            </div>
          </div>

          <!-- Main Content -->
          <main class="col-span-12 md:col-span-8 xl:col-span-6">
            <RouterView />
          </main>
          <!-- Right Sidebar -->

          <div
            class="hidden col-span-12 md:block xs-col-span-1 xl:col-span-4 md:col-span-3"
          >
            <div class="sticky top-0">
              <SidebarRight />
            </div>
          </div>
        </div>
      </div>

      <AuthPage v-else />
    </div>
  </div>
</template>

<script setup>
const isDark = ref(false);

const { useAuthUser, initAuth, useAuthLoading } = useAuth();

const isAuthLoading = useAuthLoading();

const user = useAuthUser();

// it's important to call initAuth before mounting the app
onBeforeMount(() => {
  initAuth();
});
</script>
