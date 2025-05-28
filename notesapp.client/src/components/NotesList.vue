<script lang="ts" setup>
import { defineEmits } from "vue";
import type { Note } from "../types";
import { formatDate } from "@/lib/utils";
import DeleteNoteButton from "./DeleteNoteButton.vue";
import UpdateNoteButton from "./UpdateNoteButton.vue";

const props = defineProps<{
  notes: Note[];
}>();

const emit = defineEmits<{
  deleteById: [id: string];
  confirmUpdate: [id: string, title: string, content: string];
}>();

function handleDeleteNote(id: string) {
  emit("deleteById", id);
}

function handleUpdate(id: string, title: string, content: string) {
  emit("confirmUpdate", id, title, content);
}
</script>

<template>
  <div v-if="props.notes.length" class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
    <div
      v-for="note in props.notes"
      :key="note.id"
      class="relative rounded-lg p-4 bg-orange-100 min-h-60"
    >
      <h1 class="font-bold text-lg mb-2">{{ note.title }}</h1>
      <p v-if="!!note.content" class="wrap-break-word line-clamp-4">{{ note.content }}</p>
      <p v-else class="italic text-gray-500">No content</p>

      <p class="absolute bottom-3 text-gray-700">{{ formatDate(note.updatedAt) }}</p>

      <div class="absolute bottom-3 right-3 flex gap-1">
        <DeleteNoteButton :id="note.id" @delete="handleDeleteNote" />

        <UpdateNoteButton :id="note.id" :note @confirm-update="handleUpdate" />
      </div>
    </div>
  </div>
  <div v-else class="my-10">
    <p class="text-center text-gray-600 italic">Please create a note to get started.</p>
  </div>
</template>
