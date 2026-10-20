<template>
    <button @click="submit">
        Go
    </button>
</template>

<script setup lang="ts">
async function loadData(): Promise<string> {
    return Promise.resolve('data');
}

function submit(): void {
    // @typescript-eslint/no-floating-promises, needs type information
    loadData();
}
</script>
