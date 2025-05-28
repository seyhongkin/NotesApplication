<script lang="ts" setup>
import { ref } from "vue";
import Header from "./components/Header.vue";
import NotePage from "./components/ui/NotePage.vue";
import type { User } from "./types";
import AuthPage from "./components/ui/AuthPage.vue";

const user = ref<User | undefined>(undefined);

function handleLogin(loginUser: User) {
  user.value = loginUser;
}

function handleLogout() {
  user.value = undefined;
}
</script>

<template>
  <div class="max-w-4xl mx-auto px-4">
    <Header :user @on-logout="handleLogout" />
    <NotePage v-if="user" />
    <AuthPage v-else @on-login="handleLogin" />
  </div>
</template>

<style scoped></style>
