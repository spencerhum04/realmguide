<script lang="ts" setup>

    defineProps<{
        image: string;
        title: string;
        date: string;
        body: string;
        link: string;
    }>()

</script>

<template>
    <NuxtLink
        :href="link"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-white p-2.5 rounded-2xl w-[22rem] h-[29rem] flex flex-col"
    >
        <NuxtImg :src="image" class="rounded-lg bg-slate-300 w-[22rem] h-40" />
        <div class="flex flex-col px-4 justify-between h-full">
            <div class="flex flex-col">
                <div class="flex flex-row items-center justify-between text-sm font-semibold text-slate-700 py-4">
                    <div>Blog</div>
                    <div>{{ date }}</div>
                </div>
                <div class="text-xl font-semibold pb-2.5">{{ title }}</div>
                <div class="text-sm text-slate-700 pb-4">{{ body }}</div>
            </div>
            <div class="font-medium underline pb-5">Read Blog</div>
        </div>
    </NuxtLink>
</template>