<script setup lang="ts">
import Header from "./components/Header.vue";
import SearchForm from "./components/SearchForm.vue";
import NotesList from "./components/NotesList.vue";
import AddButton from "./components/AddButton.vue";
import { computed, ref } from "vue";
import type { Note } from "./types";

const notes = ref<Note[]>([]);
const searchFilter = ref("");
const isDescFilter = ref(true);

const filterNotes = computed(() => {
  let filterNotes = notes.value;

  const keyword = searchFilter.value.trim().toLowerCase();

  if (keyword) {
    filterNotes = notes.value.filter((note) => note.title.toLowerCase().includes(keyword));
  }

  filterNotes.sort((a, b) => {
    switch (isDescFilter.value) {
      case true:
        return b.createdAt.getTime() - a.createdAt.getTime();
      case false:
        return a.createdAt.getTime() - b.createdAt.getTime();
    }
  });
  return filterNotes;
});

function handleSaveNote(title: string, content: string) {
  notes.value.push({
    id: crypto.randomUUID(),
    title,
    content,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}

function deleteById(id: string) {
  const noteIdx = notes.value.findIndex((note) => note.id === id);
  if (noteIdx !== -1) {
    notes.value.splice(noteIdx, 1);
  }
}

function handleSearch(search: string) {
  searchFilter.value = search;
}

function handleSort(isDesc: boolean) {
  isDescFilter.value = isDesc;
}

function handleUpdate(id: string, title: string, content: string) {
  const note = notes.value.find((note) => note.id === id);
  if (note) {
    note.title = title;
    note.content = content;
    note.updatedAt = new Date();
  }
}
</script>

<template>
  <div class="max-w-4xl mx-auto px-4">
    <Header username="seyhong" />
    <SearchForm @on-search="handleSearch" @on-sort="handleSort" />

    <AddButton @saved="handleSaveNote" />
    <NotesList :notes="filterNotes" @delete-by-id="deleteById" @confirm-update="handleUpdate" />
  </div>
</template>

<style scoped></style>
