<template>
    <div class="flex flex-col items-start w-3/4 md:&w-1/2">
        <h1 class="font-bold text-3xl md:text-4xl bg-red-300">Todo List.</h1>
        <div class="w-full mt-2">
            <form class="flex gap-4" @submit.prevent="handleSubmit">
                <input class="w-5/6 p-3 border-2 rounded-lg border-red-300" type="text" placeholder="Add a task..." v-model="todo" />
                <button class="W-1/6 py-3 px-6 rounded-lg ease-in transition-all bg-red-300 hover:bg-red-400 text-zinc-50">Add</button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
const todo = ref('')

const handleSubmit = (event: Event): Event => {
    todo.value = ''

    return event;
}
</script>

<style scoped>

</style>