import { build } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/supabase'
    ],
    css: [
        '@/assets/css/font.css',
        '@/assets/css/tailwind.css'
    ]
})
