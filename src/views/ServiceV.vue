<script setup>
  import { ref } from "vue";
  let tabnav = ref(null);
  </script>
  
  <template>
    <main class="service-container">
      <div
        class="service-title-container"
        style="display: flex; width: 90%;">
        <div class="service-text panimated" v-motion-fade-visible-once>
          <div>OUR SERVICE</div>
        </div>
      </div>
      <div class="flex justify-center">
        <div style="max-width: 100vw" class="flex justify-center">
          <q-tabs
            v-model="currentTab"
            ref="tabnav"
            class="service-tabs-p text-grey full-width bg-grey-10"
            active-color="black"
            active-bg-color="white"
            :class="getWidth >= max ? 'rad-top' : ''"
            :style="
              getWidth >= max
                ? { 'max-width': max + 'px' }
                : { 'max-width': '100%' }
            "
            style="z-index: 2"
          >
            <q-tab
              v-for="tab in tabs"
              :key="tab.name"
              :name="tab.name"
              class="service-tab mc"
              :ripple="false"
            >
              <div
                style="
                  white-space: normal;
                  min-width: 90px;
                  max-width: 135px;
                  padding: 5px 0;
                  line-height: 1;
                  font-size: clamp(0.7rem, 2vw, 1rem);
                "
              >
                {{ tab.label }}
              </div>
            </q-tab>
          </q-tabs>
        </div>
      </div>
      <div
        class="tab-container full-width flex justify-center"
        :class="getWidth >= max ? 'rad-top' : ''"
      >
        <q-tab-panels
          class="tab-panels bg-transparent"
          v-model="currentTab"
          :class="getWidth >= max ? 'rad-top' : ''"
          :style="
            getWidth >= max ? { 'min-width': max + 20 + 'px' } : { width: '100%' }
          "
        >
          <q-tab-panel name="nwa">
            <div
              class="img-container service-images"
              :style="{ 'max-width': max + 'px' }"
            >
              <img
                v-for="i in Array.from(
                  { length: imgSrc.nwaLen },
                  (v, i) => i + 1
                )"
                :key="i"
                :src="loadImage('nwa', i)"
                :alt="`service-nwa-${i}`"
                class="home-hero-img non-selectable cursor-pointer"
              />
            </div>
          </q-tab-panel>
          <q-tab-panel name="csm">
            <div
              class="img-container service-images"
              :style="{ 'max-width': max + 'px' }"
            >
              <img
                v-for="i in Array.from(
                  { length: imgSrc.csmLen },
                  (v, i) => i + 1
                )"
                :key="i"
                :src="loadImage('csm', i)"
                :alt="`service-csm-${i}`"
                class="home-hero-img non-selectable cursor-pointer"
              />
            </div>
          </q-tab-panel>
          <q-tab-panel name="ae">
            <div
              class="img-container service-images"
              :style="{ 'max-width': max + 'px' }"
            >
              <img
                v-for="i in Array.from({ length: imgSrc.aeLen }, (v, i) => i + 1)"
                :key="i"
                :src="loadImage('ae', i)"
                :alt="`service-ae-${i}`"
                class="home-hero-img non-selectable cursor-pointer"
              />
            </div>
          </q-tab-panel>
          <q-tab-panel name="bfr">
            <div
              class="img-container service-images"
              :style="{ 'max-width': max + 'px' }"
            >
              <img
                v-for="i in Array.from(
                  { length: imgSrc.bfrLen },
                  (v, i) => i + 1
                )"
                :key="i"
                :src="loadImage('bfr', i)"
                :alt="`service-bfr-${i}`"
                class="home-hero-img non-selectable cursor-pointer"
              />
            </div>
          </q-tab-panel>
          <q-tab-panel name="fa">
            <div
              class="img-container service-images"
              :style="{ 'max-width': max + 'px' }"
            >
              <img
                v-for="i in Array.from({ length: imgSrc.faLen }, (v, i) => i + 1)"
                :key="i"
                :src="loadImage('fa', i)"
                :alt="`service-fa-${i}`"
                class="home-hero-img non-selectable cursor-pointer"
              />
            </div>
          </q-tab-panel>
          <q-tab-panel name="fw">
            <div
              class="img-container service-images"
              :style="{ 'max-width': max + 'px' }"
            >
              <img
                v-for="i in Array.from({ length: imgSrc.fwLen }, (v, i) => i + 1)"
                :key="i"
                :src="loadImage('fw', i)"
                :alt="`service-fw-${i}`"
                class="home-hero-img non-selectable cursor-pointer"
              />
            </div>
          </q-tab-panel>
          <q-tab-panel name="bw">
            <div
              class="img-container service-images"
              :style="{ 'max-width': max + 'px' }"
            >
              <img
                v-for="i in Array.from({ length: imgSrc.bwLen }, (v, i) => i + 1)"
                :key="i"
                :src="loadImage('bw', i)"
                :alt="`service-bw-${i}`"
                class="home-hero-img non-selectable cursor-pointer"
              />
            </div>
          </q-tab-panel>
          <q-tab-panel name="vi">
            <div
              class="img-container service-images"
              :style="{ 'max-width': max + 'px' }"
            >
              <img
                v-for="i in Array.from({ length: imgSrc.viLen }, (v, i) => i + 1)"
                :key="i"
                :src="loadImage('vi', i)"
                :alt="`service-vi-${i}`"
                class="home-hero-img non-selectable cursor-pointer"
              />
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </main>
  </template>
  
  <style>
  /* .service-tabs-p {
      box-shadow: inset -20px 0 10px -10px rgba(117, 117, 117, 0.2), inset 20px 0 10px -10px rgba(117, 117, 117, 0.2);
    } */
  .rad-top {
    border-top-left-radius: 10px !important;
    border-top-right-radius: 10px !important;
  }
  
  .q-tabs__arrow {
    display: flex;
    height: 100%;
  }
  
  .tab-panels {
    filter: drop-shadow(0px 0 10px rgba(0, 12, 12, 0.6)) !important;
  }
  
  .q-tab-panel {
    padding: 0px !important;
  }
  </style>
  
  <script>
  export default {
    components: {},
    methods: {
      loadImage(folder, i) {
        // THIS IS NOT OPTIMAL, BUT IT WORKS :D
        try {
          return require(`@/assets/service/${folder}/${i}.png`);
        } catch (err) {
          try {
            return require(`@/assets/service/${folder}/${i}.jpg`);
          } catch (err) {
            try {
              return require(`@/assets/service/${folder}/${i}.jpg`);
            } catch (err) {
              try {
                return require(`@/assets/service/${folder}/${i}.webp`);
              } catch (err) {
                
                return require("@/assets/service/default.png");
              }
            }
          }
        }
      },
      scrollTo(id) {
        let el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      },
      updateWindowWidth() {
        this.windowWidth = window.innerWidth;
      },
    },
    computed: {
      getWidth() {
        return this.$q.screen.width;
      },
      mobileCheck() {
        return this.$q.screen.width < this.max ? 1 : 0;
      },
    },
    data() {
      return {
        max: 1400,
        imgSrc: {
          // specify the number of images to be displayed
          nwaLen: 3,
          csmLen: 2,
          aeLen: 3,
          bfrLen: 2,
          faLen: 6,
          fwLen: 2,
          bwLen: 2,
          viLen: 1,
        },
        currentTab: "nwa",
        tabs: [
          { name: "nwa", label: "NUTRITION & WEIGHT MANAGEMENT" },
          { name: "csm", label: "CELLULITE & STRETCH MARK" },
          { name: "ae", label: "ACNE EXIT" },
          { name: "bfr", label: "BODY FAT REDUCTION" },
          { name: "fa", label: "FACE AESTHETICS" },
          { name: "fw", label: "FACE WORKOUT" },
          { name: "bw", label: "BODY WORKOUT" },
          { name: "vi", label: "VITAMIN INFUSIONS" },
        ],
      };
    },
    mounted() {},
  };
  </script>
  