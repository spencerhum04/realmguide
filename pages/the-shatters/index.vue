<script lang="ts" setup>

let bosses = [
    { image: "/enemy-the-bridge-sentinel.png", link: "/the-shatters/the-bridge-sentinel" },
    { image: "/enemy-twilight-archmage.png", link: "/the-shatters/twilight-archmage" },
    { image: "/enemy-the-forgotten-king.png", link: "/the-shatters/the-forgotten-king" },
];

let loot = [
    { image: "/enemy-the-bridge-sentinel.png" },
    { image: "/enemy-twilight-archmage.png.png" },
    { image: "/enemy-the-forgotten-king" },
    { image: "/dungeon-the-shatters" },
]

let bridgeLoot = [
    { loot: "/item-valor.png" },
    { loot: "/item-vanguards-visage.png", shiny: "/item-shiny-vanguards-visage.png" },
    { loot: "/item-sentinels-sidearm.png", shiny: "/item-shiny-sentinels-sidearm.png" },
    { loot: "/item-bracer-of-the-guardian.png" },
]

let archLoot = [
    { loot: "/item-dusky-catalyst.png" },
    { loot: "/item-primal-arcana.png", shiny: "/item-shiny-primal-arcana.png" },
    { loot: "/item-polarity-poison.png", shiny: "/item-shiny-polarity-poison.png" },
    { loot: "/item-the-twilight-gemstone.png", shiny: "/item-shiny-the-twilight-gemstone.png" },
]

let kingLoot = [
    { loot: "/item-warmonger.png", shiny: "/item-shiny-warmonger.png" },
    { loot: "/item-peacekeeper.png", shiny: "/item-shiny-peacekeeper.png" },
    { loot: "/item-noble-mandolin.png" },
    { loot: "/item-the-forgotten-crown.png" },
]

let shattsLoot = [
    { loot: "/item-royal-guards-cuirass.png" },
    { loot: "/item-vest-of-abandoned-shadows.png" },
    { loot: "/item-mantle-of-the-monarchy.png" },
]

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
            <div 
                v-for="(boss) in bosses"
            >
                <img :src="boss.image" class="w-40 h-40" />
            </div>
        </div>
        <div class="flex flex-row gap-x-5">
            <div class="text-5xl font-bold">Drops</div>
            <NuxtImg :src="'/bag-white.png'" class="w-12 h-12" />
        </div>
        <div class="flex flex-col gap-10 items-center">
            <div v-for="(boss, index) in bosses" :key="boss.link">
                <div class="flex flex-row items-center gap-x-5">
                    <NuxtImg :src="boss.image" class="w-21 h-21" />
                    <div v-if="index === 0" class="flex flex-row gap-x-1">
                        <div v-for="loot in bridgeLoot" class="flex flex-col gap-y-1">
                            <NuxtImg :src="loot.loot" class="w-10 h-10" />
                            <NuxtImg v-if="loot.shiny" :src="loot.shiny" class="w-10 h-10" />
                        </div>
                    </div>
                    <div v-if="index === 1" class="flex flex-row gap-x-1">
                        <div v-for="loot in archLoot" class="flex flex-col gap-y-1">
                            <NuxtImg :src="loot.loot" class="w-10 h-10" />
                            <NuxtImg v-if="loot.shiny" :src="loot.shiny" class="w-10 h-10" />
                        </div>
                    </div>
                    <div v-if="index === 2" class="flex flex-row gap-x-1">
                        <div v-for="loot in kingLoot" class="flex flex-col gap-y-1">
                            <NuxtImg :src="loot.loot" class="w-10 h-10" />
                            <NuxtImg v-if="loot.shiny" :src="loot.shiny" class="w-10 h-10" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
