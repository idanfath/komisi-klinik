<template>
    <q-footer v-model="footer" id="footer" class="bg-black font-inter">
        <div class="row q-py-xl q-px-xl">
            <div class="col-sm-4 col-lg-4 col-md-4 col-xl-4 col-xs-6 column justify-center">
                <div>
                    <img :src="require('@/assets/icon trim.png')" style="object-fit: cover" alt=""
                        class="f-icon non-selectable" />
                </div>
                <div class="f-text gt-sm q-mt-md" style="max-width: 350px">
                    {{ footerX.text }}
                </div>
                <div class="lt-sm q-mt-md row non-selectable" style="gap: 10px; font-size: 1.2rem">
                    <!-- social media logos -->
                    <a :href="link.instagram" target="_blank" class="no-dec"><i class="fab fa-instagram"></i></a>
                    <a :href="link.address" target="_blank" class="no-dec"><i class="fas fa-map-marker-alt "/></a>
                    

                </div>
            </div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xl-4 col-xs-6 column gt-xs">
                <div class="q-mb-md f-text-header">SOCIAL MEDIA</div>
                <div class="column" style="gap: 4px">
                    <a :href="link.instagram" target="_blank" class="no-dec">@skynclinic.mks</a>
                    <div class="no-dec text-black">VMXK WAS HERE!!!!!</div>
                </div>
            </div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xl-4 col-xs-6 column">
                <div class="q-mb-md f-text-header">CONTACT US</div>
                <div class="column" style="gap: 5px">
                    <a :href="link.instagram" target="_blank" class="no-dec">+62 853-9982-9982</a>
                    <a :href="link.instagram_2" target="_blank" class="no-dec">MANAGED BY @skynclinic.jkts</a>
                    <a :href="link.address" target="_blank" class="no-dec gt-xs">Ruko Jasper 3 , Jl. Pengayoman, Masale Kec. Panakkukang, Kota Makassar</a>
                </div>
            </div>
        </div>
        <div class="q-py-sm bg-grey-4 text-black text-center f-bottoms text-uppercase">
            Made By Stelk Group 5
        </div>
    </q-footer>
</template>

<script>
    export default {
        name: "FooterC",
        data() {
            return {
                footerX: {
                    text: "The first aesthetic gym studio in experience in Indonesia for your facial and body fitness.",
                },
                link: {
                    facebook: "https://www.facebook.com/",
                    twitter: "https://twitter.com/",
                    instagram: "https://www.instagram.com/",
                    instagram_2: "https://www.instagram.com/",
                    address: "https://goo.gl/maps/",
                    email: "mailto:" + "agus@testing.com"
                },
            };
        },
    };
</script>
<style>
    .f-icon {
        width: 100px;
    }

    .f-text {
        font-size: 0.9rem;
        font-weight: 300;
    }

    .f-text-header {
        font-size: 1rem;
        font-weight: 600;
    }

    .f-bottoms {
        font-size: 0.8rem;
        font-weight: 700;
    }
</style>
