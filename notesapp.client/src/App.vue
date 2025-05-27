<script setup lang="ts">
import Header from "./components/Header.vue";
import SearchForm from "./components/SearchForm.vue";
import NotesList from "./components/NotesList.vue";
import AddButton from "./components/AddButton.vue";
</script>

<template>
  <div class="max-w-4xl mx-auto px-4">
    <Header username="seyhong" />
    <SearchForm />

    <AddButton />
    <NotesList />
  </div>
</template>

<style scoped></style>
