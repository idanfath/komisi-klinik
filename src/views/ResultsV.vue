<template>
    <div class="r-header-container"
        style="width: 100%;  background-color: #151515; display: flex; justify-content: center;">
        <img class="r-header-img" style="width: 100%; max-width: 1400px; max-height: 600px; object-fit: cover;"
            :src="require('@/assets/results/header.png')" alt="">
    </div>
    <div class="r-container"
        style="display: flex; align-items: center; flex-direction: column; padding: clamp(40px, 5vw, 70px);  background-color: #202020; z-index: 1; filter: drop-shadow(0px -20px 10px rgba(12, 12, 12, 0.4));">
        <div class="r-text-container" style="display: flex; justify-content: center;">
            <div class="r-text  animated" v-motion-fade-visible-once>
                RESULTS
            </div>
        </div>
        <q-separator color="grey-6" style="width: 90%; margin: clamp(40px, 5vw, 70px) 0;" />
        <div class="panimated-card r-card-container non-selectable">

            <div class="r-card" v-for="i in resultItems" :key="i" v-motion-fade-visible-once>
                <img :src="loadImage('main', i)" class="mc" />
            </div>

        </div>
    </div>
    <div class="r-container"
        style="display: flex; align-items: center; flex-direction: column; padding: clamp(40px, 5vw, 70px) 0; background-color: #202020; z-index: 2;">
        <div class="r-text-container" style="display: flex; align-items: center; flex-direction: column;">
            <div class="r-text  animated" v-motion-fade-visible-once>
                Customer Testimonial
            </div>
            <div class="r-sub-text animated" v-motion-fade-visible-once style="margin-top: 5px;">
                we care about our customers experience too
            </div>
        </div>
        <q-separator class="q-my-xl" color="grey-6" style="width: 90%; margin: clamp(40px, 5vw, 70px) 0;" />
        <div class="panimated-card r-card-container non-selectable" v-motion-fade-visible-once>

            <div class="r-card" v-motion-fade-visible-once v-for="(review, index) in reviews" :key="index">
                <q-card class="r-the-card bg-white flex justify-center full-height q-py-md animated">
                    <q-card-section class="r-review-text column">
                        <div>
                            {{ review.text }}
                        </div>
                        <div class="text-grey-8">
                            {{ review.by }}
                        </div>
                    </q-card-section>
                    <q-separator spaced inset color="grey-7" style="width: 80%;" />
                    <q-card-section>
                        <div class="q-px-md">
                            <q-rating v-model="review.rating" readonly aria-readonly="true" class="r-rating"
                                icon-half="star_half" :max="5" color="grey">
                            </q-rating>
                        </div>
                    </q-card-section>
                </q-card>
            </div>

        </div>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                resultOffset: 9,
                screenWidth: window.innerWidth,
                reviews: [
                    { text: "Delicious pizza, fast delivery!", by: "Sarah Jones", rating: 5 },
                    { text: "Great movie, kept me on the edge of my seat!", by: "Alex Li", rating: 4.5 },
                    { text: "Comfortable and stylish shoes, perfect for everyday wear.", by: "Michael Chen", rating: 4 },
                    { text: "Confusing instructions, product took longer to assemble than expected.", by: "Emily Garcia", rating: 3.5 },
                    { text: "Beautiful park with plenty of walking trails, highly recommend!", by: "David Kim", rating: 5 },
                    { text: "Book arrived damaged, disappointed with shipping quality.", by: "Daniel Brown", rating: 3 },
                    // { text: "Fun and engaging game, perfect for parties!", by: "Jessica Miller", rating: 4.5 },
                    // { text: "Haircut was uneven, stylist did not listen to my requests.", by: "Christopher Lee", rating: 2.5 },
                    // { text: "Excellent customer service, representative was very helpful.", by: "Amanda Lopez", rating: 5 },
                ]
            };
        },
        computed: {
            resultItems() {
                let length;
                if (this.screenWidth <= 1000) {
                    // Round down to the nearest even number
                    length = Math.floor(this.resultOffset / 2) * 2;
                } else {
                    // Round up to the nearest multiple of three
                    length = Math.ceil(this.resultOffset / 3) * 3;
                }
                return Array.from({ length }, (_, i) => i + 1);
            },
        },
        created() {
            window.addEventListener('resize', this.updateWidth);
        },
        beforeUnmount() {
            window.removeEventListener('resize', this.updateWidth);
        },
        methods: {
            updateWidth() {
                console.log(window.innerWidth)
                this.screenWidth = window.innerWidth;
            },
            loadImage(folder, i) {
                // THIS IS NOT OPTIMAL, BUT IT WORKS :D
                try {
                    return require(`@/assets/results/${folder}/${i}.png`);
                } catch (err) {
                    try {
                        return require(`@/assets/results/${folder}/${i}.jpg`);
                    } catch (err) {
                        try {
                            return require(`@/assets/results/${folder}/${i}.jpg`);
                        } catch (err) {
                            try {
                                return require(`@/assets/results/${folder}/${i}.webp`);
                            } catch (err) {
                                console.log(
                                    `Failed to load image ${i}.jpeg from folder ${folder}, returning default image`
                                );
                                return require("@/assets/service/default.png");
                            }
                        }
                    }
                }
            },
        },
    };
</script>
<style>
    .r-review-text> :first-child {
        text-align: center;
        font-size: clamp(1.1rem, 1.1vw, 1.5rem);
        /* first and end caracter is "" */

    }

    .r-review-text> :last-child {
        font-size: clamp(0.8rem, 1vw, 1.2rem);
        margin-top: 5px;
        text-align: center;
    }

    .r-the-card:hover {
        transform: scale(1.03);
    }
    .r-text-container {
        display: flex;
        justify-content: center;
        width: 80%;
    }

    .r-rating {
        font-size: 1.5rem
    }

    .r-text {
        color: white;
        font-size: clamp(1rem, 5vw, 3rem);
        line-height: 1;
        font-weight: 600;
        text-align: center;
        width: fit-content;
    }

    .r-sub-text {
        color: white;
        font-size: clamp(0.6rem, 5vw, 2rem);
        line-height: 1.1;
        font-weight: 500;
        text-align: center;
        width: fit-content;
    }

    .r-card-container {
        display: grid;
        grid-template-columns: repeat(3, minmax(200px, 1fr));
        width: 90%;
        gap: 20px;
        row-gap: 30px;
        max-width: 1400px;
    }

    .r-card {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .r-card img {
        width: 100%;
        height: auto;
        border-radius: 8px;
    }

    .r-card {
        transition: all 0.3s ease-in-out;
    }

    .r-card:hover {
        transform: scale(1.01);
    }

    .r-text:hover {
        letter-spacing: 2px;
    }

    @media screen and (max-width: 1000px) {
        .r-card-container {
            grid-template-columns: repeat(2, minmax(200px, 1fr));
        }
    }

    @media screen and (max-width: 500px) {
        .r-card-container {
            grid-template-columns: repeat(1, minmax(200px, 1fr));
        }

        .r-card img {
            width: 80%;
        }
    }
</style>