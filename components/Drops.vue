<script lang="ts" setup>

    defineProps<{
        image: string;
        loot: { loot: string; shiny?: string }[];
    }>();

</script>

<template>
    <div class="flex flex-row items-center gap-x-5">
        <NuxtImg :src="image" class="" />
        <div v-for="item in loot" :key="item.loot" class="flex flex-col gap-y-1">
            <NuxtImg :src="item.loot" class="w-10 h-10" />
            <NuxtImg v-if="item.shiny" :src="item.shiny" class="w-10 h-10" />
        </div>
    </div>
</template>