<template>
    <div class="flex flex-col justify-center">
        <h1 class="font-bold text-3xl md:text-4xl">Welcome to Nuxt-Todo</h1>
        <button @click="handleLogin" class="bg-red-300 py-4 px-8 rounded-lg text-zinc-50 hover:bg-red-400 ease-out transition-all mt-4">
            Login
        </button>
        <h1>{{ username }}</h1>
    </div>
</template>

<script setup>
const supabase = useSupabaseClient();

const isUserLogged = ref(false)

supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN') {
        isUserLogged.value = true
    } else if (event === 'SIGNED_OUT') {
        isUserLogged.value = false
    }
} ) 

const handleLogin = async () => {
    try {
        const { error } = await supabase.auth.signIn({ provider: 'google' })
        if (error) { throw error }
    } catch(err) {
        console.error(err)
    }
}

const handleLogout = async () => {
    try {
        const { error } = await supabase.auth.signOut()
        if (error) { throw error }
    } catch(err) {
        console.error(err)
    }
}

</script>

<style scoped>

</style>