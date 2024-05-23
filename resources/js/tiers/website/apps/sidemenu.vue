<script setup lang="ts">
import { language, translate } from '@/lib/metadata';
import Offcanvas from '@/modules/bootstrap/components/Offcanvas.vue';
import ToggleButton from '@/modules/bootstrap/components/ToggleButton.vue';
import { defineProps, ref } from 'vue';
import { Icon } from '@iconify/vue';

interface Item {
    label: string,
    url: string,
    options: {
        class?: string;
    };
}

type Props = {
    list: Item[]
    externals: Item[],
    // donationLink: string,
};
const handleLinkClick = () => {
    offcanvasElt.value.close();
}

const isCurrentPage = (url) => {
    return window.location.pathname === url;
}

const { list, externals } = defineProps<Props>();
const offcanvasElt = ref<any>(null)
const scrollTo = (id) => {
    const section = document.getElementById(id);
    console.log('id', id);

    console.log('target', section);

    offcanvasElt.value.close()
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        })
    }
}

// const offcanvas = ref<any>(null)
const canvasEl = (el: any, element: any) => {
    element(el)
    offcanvasElt.value = el;
}

</script>
<template>
    <ToggleButton class="btn-side">
        <web-icon path="mdiMenu" id="menu-icon" class="menu-hamburger"
            style="height: 100%;width: 30px; color: #3e3e3e;"></web-icon>
        <template #content="{ element, closed }">
            <Offcanvas backdrop :ref="(el) => { canvasEl(el, element) }" :placement="'end'" @closed="closed">
                <ul class="nav-menu">
                    <li v-for="(item, i) in list" :key="i">
                        <a :href="item.url" :class="{ 'active': isCurrentPage(item.url) }" @click="handleLinkClick">{{
                            item.label }}</a>
                    </li>
                    <div class="d-flex gap-3 pt-5" style="margin-left:-4px;position:relative;top:30px;">
                        <a target="_blank" :href="externals[0].url">
                            <icon icon="jam:facebook" color="#3e3e3e" class="icon d-flex" style="font-size: 25px;" />
                        </a>
                        <a target="_blank" :href="externals[1].url">
                            <icon icon="fa6-brands:instagram" color="#3e3e3e" class="icon d-flex"
                                style="font-size: 25px;" />
                        </a>
                        <a target="_blank" :href="externals[2].url">
                            <icon icon="formkit:linkedin" color="#3e3e3e" class="icon d-flex" style="font-size: 25px;" />
                        </a>
                    </div>
                </ul>
            </Offcanvas>
        </template>
    </ToggleButton>
</template>

<style>
.active {
    color: #21417e;
}
</style>