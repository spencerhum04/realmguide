<script lang="ts" setup>
    import { ref, watchEffect } from 'vue';

    interface BlogData {
        img1?: string;
        img2?: string;
        img3?: string;
        h21: string;
        h22: string;
        h23: string;
        p1: string;
        p2: string;
        p3: string;
        time1: string;
        time2: string;
        time3: string;
        a1?: string;
        a2?: string;
        a3?: string;
    }

    const data = ref<BlogData | null>(null);
    const error = ref<string | null>(null);

    try {
        const response = await fetch('/api/blog');
        if (!response.ok) throw new Error('Failed to fetch blog data');
        data.value = await response.json();
    } catch (err) {
        error.value = (err as Error).message;
    }

    const blogs = ref<{ image: string; title: string; date: string; body: string; link: string }[]>([]);

    watchEffect(() => {
        if (data.value) {
            blogs.value = [
                { image: data.value.img1 ?? '', title: data.value.h21, date: data.value.time1 ?? '', body: data.value.p1, link: data.value.a1 ?? '' },
                { image: data.value.img2 ?? '', title: data.value.h22, date: data.value.time2 ?? '', body: data.value.p2, link: data.value.a2 ?? '' },
                { image: data.value.img3 ?? '', title: data.value.h23, date: data.value.time3 ?? '', body: data.value.p3, link: data.value.a3 ?? '' },
            ];
        }
    });

    const dungeons = [
        { image: "/dungeon-oryxs-sanctuary.png", name: "Oryx's Sanctuary", link: "/oryxs-sanctuary" },
        { image: "/dungeon-moonlight-village.png", name: "Moonlight Village", link: "/moonlight-village" },
        { image: "/dungeon-the-shatters.png", name: "The Shatters", link: "/the-shatters" },
    ];

    const exalts = [
        { potion: "/potion-attack.png", dungeon1: "/dungeon-spectral-penitentiary.png", boss1: "/enemy-soulwarden-murcian.png", dungeon2: "/dungeon-moonlight-village.png", boss2: "/enemy-dancer-miko.png", dungeon3: "/dungeon-the-shatters.png", boss3: "/enemy-twilight-archmage.png" },
        { potion: "/potion-defense.png", dungeon1: "/dungeon-lost-halls.png", boss1: "/enemy-marble-colossus.png", dungeon2: "/dungeon-the-shatters.png", boss2: "/enemy-the-forgotten-king.png" },
        { potion: "/potion-speed.png", dungeon1: "/dungeon-cultist-hideout.png", boss1: "/enemy-malus.png" },
        { potion: "/potion-dexterity.png", dungeon1: "/dungeon-the-nest.png", boss1: "/enemy-killer-bee-queen.png", dungeon2: "/dungeon-the-advanced-nest.png", boss2: "/enemy-killer-bee-queen.png" },
        { potion: "/potion-vitality.png", dungeon1: "/dungeon-kogbold-steamworks.png", boss1: "/enemy-factory-control-core.png", dungeon2: "/dungeon-advanced-kogbold-steamworks.png", boss2: "/enemy-factory-control-core.png" },
        { potion: "/potion-wisdom.png", dungeon1: "/dungeon-fungal-cavern.png", boss1: "/enemy-crystal-worm-mother.png", dungeon2: "/dungeon-crystal-cavern.png", boss2: "/enemy-crystal-entity.png" },
        { potion: "/potion-life.png", dungeon1: "/dungeon-oryxs-sanctuary.png", boss1: "/enemy-oryx-3.png", dungeon2: "/dungeon-moonlight-village.png", boss2: "/enemy-sage-genji.png", dungeon3: "/dungeon-the-shatters.png", boss3: "/enemy-the-forgotten-king.png", },
        { potion: "/potion-mana.png", dungeon1: "/dungeon-the-void.png", boss1: "/enemy-void-entity.png", dungeon2: "/dungeon-moonlight-village.png", boss2: "/enemy-drummer-kaguya.png" },
    ]
</script>


<template>
    <div className="flex flex-col gap-y-20 bg-light-sand">

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
            <div class="flex flex-col items-center border rounded-3xl w-full bg-exalt-gray gap-y-2.5 px-10 py-10">
                <img src="/pet-oryx-exalted.png" />
                <div class="text-5xl font-semibold text-white">Stat Exaltations</div>
                <div class="text-xl font-bold text-blood-red mb-2.5">*must be using an 8/8 character to receive exaltations</div>
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
                <NuxtLink
                    v-for="(blog) in blogs"
                    :href="blog.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bg-white p-2.5 rounded-2xl w-[22rem] h-[29rem] flex flex-col"
                >
                    <NuxtImg :src="blog.image" class="rounded-lg bg-slate-300 w-[22rem] h-40" />
                    <div class="flex flex-col px-4 justify-between h-full">
                        <div class="flex flex-col">
                            <div class="flex flex-row items-center justify-between text-sm font-semibold text-slate-700 py-4">
                                <div>Blog</div>
                                <div>{{ blog.date }}</div>
                            </div>
                            <div class="text-xl font-semibold pb-2.5">{{ blog.title }}</div>
                            <div class="text-sm text-slate-700 pb-4">{{ blog.body }}</div>
                        </div>
                        <div class="font-medium underline pb-5">Read Blog</div>
                    </div>
                </NuxtLink>
            </div>
            <NuxtLink
                :href="'https://remaster.realmofthemadgod.com/?page_id=15'"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blood-red font-medium hover:underline cursor-pointer">View more resources</NuxtLink>
        </div>
        
    </div>
</template>