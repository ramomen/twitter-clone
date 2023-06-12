<template>
  <div>
    <div class="pt-5 space-y-6">
      <UIInput
        label="Username"
        placeholder="@username"
        v-model="data.username"
      />
      <UIInput
        label="Password"
        placeholder="******"
        type="password"
        v-model="data.password"
      />
      <div>
        <button @click="handleLogin">Login</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { login } = useAuth();

const data = reactive({
  username: "",
  password: "",
  loading: false,
});

const handleLogin = () => {
  data.loading = true;
  try {
    login({
      username: data.username,
      password: data.password,
    });
  } catch (error) {
    console.log(error);
  } finally {
    data.loading = false;
  }
};
</script>
