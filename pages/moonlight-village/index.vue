<script lang="ts" setup>
    import Bosses from '~/components/Bosses.vue';
    import Drops from '~/components/Drops.vue';


    let bosses = [
        { image: "/enemy-sage-genji.png", link: "/moonlight-village/sage-genji" },
        { image: "/enemy-drummer-kaguya.png", link: "/moonlight-village/drummer-kaguya" },
        { image: "/enemy-dancer-miko.png", link: "/moonlight-village/dancer-miko" },
    ];

    let lootBosses = [
        { key: "genji", image: "/enemy-sage-genji.png" },
        { key: "kaguya", image: "/enemy-drummer-kaguya.png" },
        { key: "miko", image: "/enemy-dancer-miko.png" },
        { key: "girl", image: "/enemy-village-girl-umi.png" },
    ];

let lootMap = {
    "genji": [
        { loot: "/item-rain-maker.png" },
        { loot: "/item-taiko-drums.png" },
        { loot: "/item-elegant-parasol.png" },
        { loot: "/item-sages-wakibiki.png" },
        { loot: "/item-ethereal-happi.png" },
        { loot: "/item-flowering-kimono.png" },
    ],
    "kaguya": [
        { loot: "/item-rain-maker.png" },
        { loot: "/item-taiko-drums.png" },
        { loot: "/item-elegant-parasol.png" },
        { loot: "/item-sages-wakibiki.png" },
        { loot: "/item-ethereal-happi.png" },
        { loot: "/item-flowering-kimono.png" },
    ],
    "miko": [
        { loot: "/item-rain-maker.png" },
        { loot: "/item-taiko-drums.png" },
        { loot: "/item-elegant-parasol.png" },
        { loot: "/item-sages-wakibiki.png" },
        { loot: "/item-ethereal-happi.png" },
        { loot: "/item-flowering-kimono.png" },
    ],
    "girl": [
    { loot: "/item-rain-maker.png" },
        { loot: "/item-taiko-drums.png" },
        { loot: "/item-elegant-parasol.png" },
        { loot: "/item-sages-wakibiki.png" },
        { loot: "/item-ethereal-happi.png" },
        { loot: "/item-flowering-kimono.png" },
        { loot: "/item-master-fishing-rod.png", shiny: "/item-shiny-master-fishing-rod.png" },
    ],
};

</script>

<template>
    <div class="flex flex-col items-center gap-y-20 p-20 text-center">
        <div class="flex flex-row gap-x-5">
            <div class="text-5xl font-bold">Moonlight Village</div>
        </div>
        <div class="flex flex-wrap gap-10 items-center">
            <Bosses
                v-for="boss in bosses"
                :image="boss.image"
                :link="boss.link"
            />
        </div>
        <div class="flex flex-row gap-x-5">
            <div class="text-5xl font-bold">Drops</div>
            <NuxtImg :src="'/bag-white.png'" class="w-12 h-12" />
        </div>
        <div class="flex flex-col gap-10 items-center">
            <Drops
                v-for="boss in lootBosses"
                :key="boss.key"
                :image="boss.image"
                :loot="lootMap[boss.key]"
            />
        </div>
    </div>
</template>
