<script lang="ts" setup>

    defineProps<{
        image: string;
        link: string;
    }>();

</script>

<template>
    <router-link :to="link">
        <img :src="image" class="w-40 h-40" />
    </router-link>
</template>