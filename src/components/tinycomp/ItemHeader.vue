<template>
    <q-item :active="this.$route.name === this.dest" @click="scrollTop()"  :to="{name:this.dest}" active-class="header-nav-a" class="mc" ripple="false" clickable>
        <q-item-section>
            {{title}}
        </q-item-section>
    </q-item>
</template>

<script>
export default {
    name: 'ItemHeader',
    props: {
        title: String,
        dest: String
    },
    methods: {
        scrollTop() {
            this.$route.name === this.dest ? window.scrollTo(0, 0) : 0;
        }
    }
}
</script>