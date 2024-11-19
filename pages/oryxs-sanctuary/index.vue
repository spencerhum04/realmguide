<script lang="ts" setup>
    import Bosses from '~/components/Bosses.vue';
    import Drops from '~/components/Drops.vue';


    let bosses = [
        { image: "/enemy-chancellor-dammah.png", link: "/oryxs-sanctuary/chancellor-dammah" },
        { image: "/enemy-treasurer-gemsbok.png", link: "/oryxs-sanctuary/treasurer-gemsbok" },
        { image: "/enemy-archbishop-leucoryx.png", link: "/oryxs-sanctuary/archbishop-leucoryx" },
        { image: "/enemy-chief-beisa.png", link: "/oryxs-sanctuary/chief-beisa" },
        { image: "/enemy-oryx-the-mad-god-3.png", link: "/oryxs-sanctuary/oryx-the-mad-god-3" },
    ];

    let lootBosses = [
        { key: "dammah", image: "/enemy-chancellor-dammah.png" },
        { key: "gemsbok", image: "/enemy-treasurer-gemsbok.png" },
        { key: "leucoryx", image: "/enemy-archbishop-leucoryx.png" },
        { key: "beisa", image: "/enemy-chief-beisa.png" },
        { key: "oryx", image: "/enemy-oryx-the-mad-god-3.png" },
    ];

let lootMap = {
    "dammah": [
        { loot: "/item-superior.png", shiny: "/item-shiny-superior.png" },
        { loot: "/item-genesis-spell.png" },
        { loot: "/item-diplomatic-robe.png", shiny: "/item-shiny-diplomatic-robe.png" },
        { loot: "/item-chancellors-cranium.png" },
    ],
    "gemsbok": [
        { loot: "/item-avarice.png", shiny: "/item-shiny-avarice.png" },
        { loot: "/item-gamblers-fate.png" },
        { loot: "/item-turncoat-cape.png", shiny: "/item-shiny-turncoat-cape.png" },
        { loot: "/item-collectors-monocle.png" },
    ],
    "leucoryx": [
        { loot: "/item-lumiaire.png", shiny: "/item-shiny-lumiaire.png" },
        { loot: "/item-chaotic-scripture.png" },
        { loot: "/item-vesture-of-duality.png", shiny: "/item-shiny-vesture-of-duality.png" },
        { loot: "/item-divine-coronation.png" },
    ],
    "beisa": [
        { loot: "/item-enforcer.png", shiny: "/item-shiny-enforcer.png" },
        { loot: "/item-ballistic-star.png" },
        { loot: "/item-centaurs-shielding.png", shiny: "/item-shiny-centaurs-shielding.png" },
        { loot: "/item-battalion-banner.png" },
    ],
    "oryx": [
        { loot: "/item-divinity.png", shiny: "/item-shiny-divinity.png" },
        { loot: "/item-oryxs-escutcheon.png" },
        { loot: "/item-gladiator-guard.png", shiny: "/item-shiny-gladiator-guard.png" },
        { loot: "/item-exalted-gods-horn.png" },
    ],
};

</script>

<template>
    <div class="flex flex-col items-center gap-y-20 p-20 text-center">
        <div class="flex flex-row gap-x-5">
            <div class="text-5xl font-bold">Oryx's Sanctuary</div>
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
