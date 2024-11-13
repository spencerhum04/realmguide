<script lang="ts" setup>
    let dungeons = [
        { image: "/dungeon-oryxs-sanctuary.png", name: "Oryx's Sanctuary", link: "/oryxs-sanctuary" },
        { image: "/dungeon-moonlight-village.png", name: "Moonlight Village", link: "/moonlight-village" },
        { image: "/dungeon-the-shatters.png", name: "The Shatters", link: "/the-shatters" },
    ]
</script>

<template>
    <div class="flex flex-col items-center justify-center min-h-screen gap-y-2.5 text-center">
        <div class="text-5xl font-bold text-blood-red">Realm<span class="text-stone-gray">Guide</span></div>
        <div class="text-2xl font-medium">Learning Exalt Dungeons for New Players</div>
        <div class="flex flex-wrap gap-4 items-center mt-4">
            <router-link
                v-for="(dungeon) in dungeons"
                :to="dungeon.link"
                class="border p-4"
            >
                <img :src="dungeon.image" class="h-14 w-14" />
            </router-link>
        </div>
    </div>
</template>