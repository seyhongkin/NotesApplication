<script lang="ts" setup>
import type { User } from "@/types";
import { ref } from "vue";

const emit = defineEmits<{
  onLogin: [user: User];
  gotoLogin: [];
}>();

const username = ref("");
const password = ref("");

function handleRegister() {
  if (!username.value.trim()) {
    return;
  }

  if (!password.value.trim()) {
    return;
  }

  const user: User = {
    id: crypto.randomUUID(),
    username: username.value,
  };

  emit("onLogin", user);
}
</script>

<template>
  <form @submit.prevent="handleRegister" class="max-w-sm mx-auto mt-16">
    <h1 class="mb-4 text-2xl font-bold">Sign up</h1>
    <div class="mb-3">
      <label for="username" class="block mb-2 text-sm font-medium text-gray-900">Username</label>
      <input
        v-model="username"
        type="text"
        id="username"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
        placeholder="username"
        required
      />
    </div>
    <div class="mb-3">
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
      <input
        v-model="password"
        type="password"
        id="password"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
        placeholder="********"
        required
      />
    </div>
    <div class="flex justify-between items-center">
      <p>
        Already have an account.
        <span @click="emit('gotoLogin')" class="hover:underline cursor-pointer text-orange-500"
          >login</span
        >
      </p>
      <button
        type="submit"
        class="cursor-pointer text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Register
      </button>
    </div>
  </form>
</template>
