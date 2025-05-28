<script setup lang="ts">
import SearchForm from "../SearchForm.vue";
import NotesList from "../NotesList.vue";
import AddButton from "../AddButton.vue";
import { computed, ref } from "vue";
import type { Note } from "../../types";

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
        return b.updatedAt.getTime() - a.updatedAt.getTime();
      case false:
        return a.updatedAt.getTime() - b.updatedAt.getTime();
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
  const index = notes.value.findIndex((note) => note.id === id);

  if (index !== -1) {
    const oldNote = notes.value[index];

    notes.value[index] = {
      ...oldNote,
      title,
      content,
      updatedAt: new Date(),
    };
  }
}
</script>

<template>
  <SearchForm @on-search="handleSearch" @on-sort="handleSort" />

  <AddButton @saved="handleSaveNote" />
  <NotesList :notes="filterNotes" @delete-by-id="deleteById" @confirm-update="handleUpdate" />
</template>
