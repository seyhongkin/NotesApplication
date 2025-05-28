<script setup lang="ts">
import type { User } from "@/types";
import LoginPage from "./LoginPage.vue";
import { ref } from "vue";
import SignupPage from "./SignupPage.vue";

const emit = defineEmits<{
  onLogin: [user: User];
}>();

const curentPage = ref<"login" | "signup">("login");

function handleLogin(user: User) {
  emit("onLogin", user);
}

function gotoSignup() {
  curentPage.value = "signup";
}

function gotoLogin() {
  curentPage.value = "login";
}
</script>

<template>
  <LoginPage v-if="curentPage === 'login'" @on-login="handleLogin" @goto-signup="gotoSignup" />
  <SignupPage v-else @goto-login="gotoLogin" @on-login="handleLogin" />
</template>
