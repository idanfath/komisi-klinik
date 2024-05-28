<template>
    <q-footer v-model="footer">
        <q-toolbar class="bg-black text-white q-px-lg">
            <q-space />
            <div class="flex p-header-nav p-no-dec gt-sm panimated non-selectable">
                <ItemFooter v-for="link in links" :key="link.title" :title="link.title" :dest="link.dest" />
            </div>
            <div class="lt-md">
                <q-btn flat dense icon="menu" class="text-white
                " :ripple="false"></q-btn>
            </div>
        </q-toolbar>
    </q-footer>
        

</template>