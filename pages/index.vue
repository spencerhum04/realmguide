<script lang="ts" setup>
    let dungeons = [
        { image: "/dungeon-oryxs-sanctuary.png", name: "Oryx's Sanctuary", link: "/oryxs-sanctuary" },
        { image: "/dungeon-moonlight-village.png", name: "Moonlight Village", link: "/moonlight-village" },
        { image: "/dungeon-the-shatters.png", name: "The Shatters", link: "/the-shatters" },
    ]
    
    let blogs = [
        { image: "/blog-1.png", date: "November 5, 2024", name: "Update: 5.3.0.0 - Aliens and QoL", body: "The Halloween Event has come to an end, and it’s time to jump in the second part of Season 17. The second part of the battlepass is going live today, together with a new batch of missions to help you completing it.", link: "https://remaster.realmofthemadgod.com/?p=4309" },
        { image: "/blog-2.png", date: "November 1, 2024", name: "Public Testing: QoL Changes", body: "We hope you haven’t been eating too much Halloween Candy because it’s time for another PT to get an early look at some things to come for Season 18! For this holiday season, one of our core aims is to give ourselves the proper time to add a lot of well-needed Quality of Life to improve different areas of the game.", link: "https://remaster.realmofthemadgod.com/?p=4305" },
        { image: "/blog-3.png", date: "October 25, 2024", name: "Public Testing: Thanksgiving and more!", body: "The Weekend is just around the corner and that means it’s time for another testing session! Come join us in trying out some new features, have a first look at upcoming Events, and check out all the changes to the Spectral Penitentiary.", link: "https://remaster.realmofthemadgod.com/?p=4303" },
    ]

    let exalts = [
        { potion: "/potion-attack.png", dungeon1: "/dungeon-spectral-penitentiary.png", boss1: "/enemy-soulwarden-murcian.png", dungeon2: "/dungeon-moonlight-village.png", boss2: "/enemy-dancer-miko.png", dungeon3: "/dungeon-the-shatters.png", boss3: "/enemy-twilight-archmage.png" },
        { potion: "/potion-defense.png", dungeon1: "/dungeon-lost-halls.png", boss1: "/enemy-marble-colossus.png" },
        { potion: "/potion-speed.png", dungeon1: "/dungeon-cultist-hideout.png", boss1: "/enemy-malus.png" },
        { potion: "/potion-dexterity.png", dungeon1: "/dungeon-the-nest.png", boss1: "/enemy-killer-bee-queen.png", dungeon2: "/dungeon-the-advanced-nest.png", boss2: "/enemy-killer-bee-queen.png" },
        { potion: "/potion-vitality.png", dungeon1: "/dungeon-kogbold-steamworks.png", boss1: "/enemy-factory-control-core.png", dungeon2: "/dungeon-advanced-kogbold-steamworks.png", boss2: "/enemy-factory-control-core.png" },
        { potion: "/potion-wisdom.png", dungeon1: "/dungeon-fungal-cavern.png", boss1: "/enemy-crystal-worm-mother.png", dungeon2: "/dungeon-crystal-cavern.png", boss2: "/enemy-crystal-entity.png" },
        { potion: "/potion-life.png", dungeon1: "/dungeon-oryxs-sanctuary.png", boss1: "/enemy-oryx-3.png", dungeon2: "/dungeon-moonlight-village.png", boss2: "/enemy-sage-genji.png", dungeon3: "/dungeon-the-shatters.png", boss3: "/enemy-the-forgotten-king.png", },
        { potion: "/potion-mana.png", dungeon1: "/dungeon-the-void.png", boss1: "/enemy-void-entity.png", dungeon2: "/dungeon-moonlight-village.png", boss2: "/enemy-drummer-kaguya.png", dungeon3: "/dungeon-the-shatters.png", boss3: "/enemy-the-forgotten-king.png" },
    ]
</script>

<template>
    <div className="flex flex-col gap-y-20">

        <div class="flex flex-col items-center justify-center min-h-screen gap-y-2.5 text-center py-10">
            <div class="text-2xl font-bold text-blood-red uppercase">Realm<span class="text-stone-gray">Guide</span></div>
            <div class="text-4xl font-semibold">The Path to Exaltation</div>
            <div class="flex flex-wrap gap-4 items-center pt-4">
                <router-link
                    v-for="(dungeon) in dungeons"
                    :to="dungeon.link"
                    class="border p-4"
                >
                    <img :src="dungeon.image" class="h-14 w-14" />
                </router-link>
            </div>
        </div>

        <div class="flex flex-col items-center bg-light-sand w-full min-h-screen justify-center px-10 py-10">
            <div class="flex flex-col items-center border rounded-3xl bg-black w-full gap-y-2.5 px-10 py-10">
                <img src="/pet-oryx-exalted.png" />
                <div class="text-5xl font-semibold text-white">Stat Exaltations</div>
                <div class="text-xl font-semibold text-blood-red mb-2.5">*must be 8/8 to receive exaltations</div>
                <div
                    v-for="(exalt, index) in exalts"
                    :key="index"
                    class="rounded-2xl bg-exalt-blue flex flex-row gap-x-20 p-2.5"
                >
                    <img :src="exalt.potion" class="h-14" />
                    <div class="flex flex-row gap-x-2.5 w-40">
                        <img :src="exalt.dungeon1" class="h-14" />
                        <img :src="exalt.boss1" class="h-14" />
                    </div>
                    <div class="flex flex-row gap-x-2.5 w-40">
                        <img v-if="exalt.dungeon2" :src="exalt.dungeon2" class="h-14" />
                        <img v-if="exalt.boss2" :src="exalt.boss2" class="h-14" />
                    </div>
                    <div class="flex flex-row gap-x-2.5 w-40">
                        <img v-if="exalt.dungeon3" :src="exalt.dungeon3" class="h-14" />
                        <img v-if="exalt.boss3" :src="exalt.boss3" class="h-14" />
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col items-center gap-y-16 bg-light-sand w-full min-h-screen justify-center py-10">
            <div class="text-5xl font-semibold">Discover What's New</div>
            <div class="flex flex-wrap gap-6 pt-4">
                <a
                    v-for="(blog) in blogs"
                    :href="blog.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bg-white p-2.5 rounded-2xl w-[22rem] h-[29rem] flex flex-col"
                >
                    <img :src="blog.image" class="rounded-lg bg-slate-300 w-[22rem] h-40" />
                    <div class="flex flex-col px-4 justify-between h-full">
                        <div class="flex flex-col">
                            <div class="flex flex-row items-center justify-between text-sm font-semibold text-slate-700 py-4">
                                <div>Blog</div>
                                <div>{{ blog.date }}</div>
                            </div>
                            <div class="text-xl font-semibold pb-2.5">{{ blog.name }}</div>
                            <div class="text-sm text-slate-700 pb-4">{{ blog.body }}</div>
                        </div>
                        <div class="font-medium underline pb-5">Read Blog</div>
                    </div>
                </a>
            </div>
            <a
                :href="'https://remaster.realmofthemadgod.com/?page_id=15'"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blood-red font-medium hover:underline cursor-pointer">View more resources</a>
        </div>
        
    </div>
</template>