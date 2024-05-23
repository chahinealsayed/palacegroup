<script setup lang="ts">
import { nextTick, onMounted } from "vue";
import { api } from "@/lib/api";
import { ref } from "vue";
import $ from "jquery";

const projects = ref<any>([]);

const init = () => {
    const items = document.querySelectorAll('.category-link');
    items.forEach((item: any) => {
        item.addEventListener('click', (e: any) => {
            e.preventDefault();
            items.forEach((ele: any) => {
                if (ele.classList.contains('active')) {
                    ele.classList.remove('active')
                }
            })
            item.classList.add('active')
            const cid = item.dataset.cid;
            loadProjects(cid);
        })
    })
    items.item(0)?.click()
}

const init1 = () => {
    const selectElement = document.getElementById('category-select');
    selectElement.addEventListener('change', (e) => {
        const selectedOption = selectElement?.options[selectElement.selectedIndex];
        const cid = selectedOption.getAttribute('data-cid'); // Get the data-cid attribute value
        console.log(cid);

        loadProjects(cid);

    });
}

const loadProjects = (cid = '') => {
    api().get(`/projects?expand=local,categories,categories.local&sort=position,local.title&cid=${cid}`).then(({ data }: any) => {
        $('.project-item').fadeOut(200, function () {
            projects.value = data
            nextTick(() => {
                $('.project-item').fadeIn(200);
            })
        })
    })
}
onMounted(() => {
    init();
    init1();
})
</script>
<template>
    <div>
        <section class="project-section">
            <section class="project-item">
                <div class="row">
                    <div v-for="content in projects" :key="content.id" class="col-md-3">
                        <div class="img-stuff" :title="content.categories.at(0).local.title">
                            <a :href="content.url">
                                <div class="overlay"></div>
                                <div class="img">
                                    <img class="project-image" :src="content.attrs?.image?.url" />
                                </div>
                                <div class="cat-title">{{ content.categories.at(0).local.title }}</div>
                                <div class="project-title">
                                    <a href="">{{ content.local.title }} </a>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </div>
</template>
