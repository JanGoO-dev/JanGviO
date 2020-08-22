<template>
  <div class="mt-1 mb-5 mx-4">
    <VueSlickCarousel :style="varColor" v-bind="settings">
      <div v-for="(tag, index) in 23" :key="index" class="text-center py-2">
        <span
          class="bg-white text-secondary px-4 py-2 mx-2 rounded-tip"
          :class="{ 'primary-hover': !premium, 'premium-hover': premium }"
        >span</span>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  props: ["premium"],
  name: "MyComponent",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        slidesToShow: 12,
        slidesToScroll: 6,
        variableWidth: true,
        focusOnSelect: true,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      },
      variableColor: "#007bff"
    };
  },
  computed: {
    varColor() {
      return {
        "--var-color": this.variableColor
      };
    }
  },
  mounted() {
    if (this.premium) {
      this.variableColor = "gold";
    }
  }
};
</script>

<style>
.primary-hover:hover {
  color: #fff !important;
  background: #007bff !important;
  cursor: pointer;
}
.premium-hover:hover {
  color: #fff !important;
  background: gold !important;
  cursor: pointer;
}
.rounded-tip {
  border-radius: 30px !important;
}
.slick-slide div {
  outline: none;
}
.slick-prev:before {
  color: var(--var-color);
}
.slick-next:before {
  color: var(--var-color);
}
.slick-current {
  color: var(--var-color);
}
</style>
