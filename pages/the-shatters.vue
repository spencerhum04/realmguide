<script lang="ts" setup>
import { ref } from 'vue';

let bosses = [
    { image: "/enemy-the-bridge-sentinel.png", name: "Oryx's Sanctuary", refName: "bridgeSentinel" },
    { image: "/enemy-twilight-archmage.png", name: "Moonlight Village", refName: "twilightArchmage" },
    { image: "/enemy-the-forgotten-king.png", name: "The Shatters", refName: "forgottenKing" },
];

const bridgeSentinel = ref<HTMLElement | null>(null);
const twilightArchmage = ref<HTMLElement | null>(null);
const forgottenKing = ref<HTMLElement | null>(null);

const scrollToSection = (sectionRef: HTMLElement | null) => {
    if (sectionRef) {
        sectionRef.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};
</script>

<template>
    <div class="flex flex-col items-center gap-y-20 p-20 text-center">
        <div class="flex flex-row gap-x-5">
            <div class="text-5xl font-bold">The Shatters</div>
            <router-link :to="'/'" class="border px-5 hover:bg-red-600">
                <img :src="'/item-chrysalis-of-eternity.png'" class="w-12 h-12" />
            </router-link>
        </div>
        <div class="flex flex-wrap gap-10 items-center">
            <div 
                v-for="(boss) in bosses"
                @click="scrollToSection($refs[boss.refName])"
            >
                <img :src="boss.image" class="w-60 h-60" />
            </div>
        </div>

        <div ref="bridgeSentinel" class="flex flex-col items-center gap-y-5 pt-10">
            <div class="text-2xl font-bold">The Bridge Sentinel</div>
            <div>Note: Obelisks become vulnerable at 80% HP, 60% HP, 40% HP, 20%HP. They will turn purple upon death and summon Blobombs.</div>
            <div class="flex flex-wrap gap-5">
                <div class="border w-96 h-56">Slashes</div>
                <div class="border w-96 h-56">Jumps</div>
            </div>
            <div class="flex flex-wrap gap-5">
                <div class="border w-96 h-56">Fast DVDs</div>
                <div class="border w-96 h-56">Pencils</div>
            </div>
            <div class="flex flex-wrap gap-5">
                <div class="border w-96 h-56">Swords</div>
                <div class="border w-96 h-56">Pinwheels</div>
            </div>
            <div class="border w-96 h-56">Rage</div>
        </div>

        <div ref="twilightArchmage" class="flex flex-col items-center gap-y-5 pt-10">
            <div class="text-2xl font-bold">Twilight Archmage</div>
            <div>Note: There are three generators that can be either ice or fire; killing a generator locks its element until the end of the fight.</div>
            <div class="flex flex-wrap gap-5">
                <div class="border w-96 h-56">Three-Ice: Name?</div>
                <div class="border w-96 h-56">Three Ice: Name?</div>
            </div>
            <div class="flex flex-wrap gap-5">
                <div class="border w-96 h-56">Three-Fire: Name?</div>
                <div class="border w-96 h-56">Three Fire: Name?</div>
            </div>
            <div class="flex flex-wrap gap-5">
                <div class="border w-96 h-56">Two-Fire, One-Ice: Name?</div>
                <div class="border w-96 h-56">Two-Ice, One-Fire: Name?</div>
            </div>
            <div class="flex flex-wrap gap-5">
                <div class="border w-96 h-56">Ice Finale</div>
                <div class="border w-96 h-56">Fire Finale</div>
            </div>
        </div>

        <div ref="forgottenKing" class="flex flex-col items-center gap-y-5 pt-10">
            <div class="text-2xl font-bold">The Forgotten King</div>
            <div class="flex flex-wrap gap-5">
                <div class="border w-96 h-56">No Crystal: Name?</div>
                <div class="border w-96 h-56">No Crystal: Name?</div>
            </div>
            <div class="flex flex-wrap gap-5">
                <div class="border w-96 h-56">Red Crystal: Name?</div>
                <div class="border w-96 h-56">Red Crystal: Name?</div>
            </div>
            <div class="flex flex-wrap gap-5">
                <div class="border w-96 h-56">Blue Crystal: Name?</div>
                <div class="border w-96 h-56">Blue Crystal: Name?</div>
            </div>
            <div class="flex flex-wrap gap-5">
                <div class="border w-96 h-56">Skull</div>
                <div class="border w-96 h-56">Patience</div>
            </div>
        </div>
    </div>
</template>
