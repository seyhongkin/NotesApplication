<script lang="ts" setup>
import type { User } from "@/types";
import Book from "../assets/icons/Book.vue";
import Power from "../assets/icons/Power.vue";

const props = defineProps<{
  user?: User;
}>();

const emit = defineEmits<{
  onLogout: [];
}>();
</script>

<template>
  <header class="my-4 flex justify-between items-center">
    <h1 class="font-bold text-xl flex gap-2 items-center text-orange-500">
      <Book />
      NoteApp
    </h1>

    <div v-if="props.user" class="flex gap-2">
      <p class="italic">
        Welcome, <span class="underline">{{ props.user.username }}</span>
      </p>

      <div @click="emit('onLogout')" class="text-red-500 hover:text-red-700 cursor-pointer">
        <Power />
      </div>
    </div>
  </header>
</template>
