<script lang="ts" setup>
    import Bosses from '~/components/Bosses.vue';
    import Drops from '~/components/Drops.vue';

    let bosses = [
        { image: "/enemy-the-bridge-sentinel.png", link: "/the-shatters/the-bridge-sentinel" },
        { image: "/enemy-twilight-archmage.png", link: "/the-shatters/twilight-archmage" },
        { image: "/enemy-the-forgotten-king.png", link: "/the-shatters/the-forgotten-king" },
    ];

    let lootBosses = [
        { key: "bridge", image: "/enemy-the-bridge-sentinel.png" },
        { key: "archmage", image: "/enemy-twilight-archmage.png" },
        { key: "king", image: "/enemy-the-forgotten-king.png" },
        { key: "general", image: "/dungeon-the-shatters.png" },
    ];

let lootMap = {
    "bridge": [
        { loot: "/item-valor.png" },
        { loot: "/item-vanguards-visage.png", shiny: "/item-shiny-vanguards-visage.png" },
        { loot: "/item-sentinels-sidearm.png", shiny: "/item-shiny-sentinels-sidearm.png" },
        { loot: "/item-bracer-of-the-guardian.png" }
    ],
    "archmage": [
        { loot: "/item-dusky-catalyst.png" },
        { loot: "/item-primal-arcana.png", shiny: "/item-shiny-primal-arcana.png" },
        { loot: "/item-polarity-poison.png", shiny: "/item-shiny-polarity-poison.png" },
        { loot: "/item-the-twilight-gemstone.png", shiny: "/item-shiny-the-twilight-gemstone.png" }
    ],
    "king": [
        { loot: "/item-warmonger.png", shiny: "/item-shiny-warmonger.png" },
        { loot: "/item-peacekeeper.png", shiny: "/item-shiny-peacekeeper.png" },
        { loot: "/item-noble-mandolin.png" },
        { loot: "/item-the-forgotten-crown.png" }
    ],
    "general": [
        { loot: "/item-royal-guards-cuirass.png" },
        { loot: "/item-vest-of-abandoned-shadows.png" },
        { loot: "/item-mantle-of-the-monarchy.png" },
    ],
};

</script>

<template>
    <div class="flex flex-col items-center gap-y-20 p-20 text-center">
        <div class="flex flex-row gap-x-5">
            <div class="text-5xl font-bold">The Shatters</div>
            <router-link :to="'/'" class="border px-5 hover:bg-red-600">
                <NuxtImg :src="'/item-chrysalis-of-eternity.png'" class="w-12 h-12" />
            </router-link>
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
