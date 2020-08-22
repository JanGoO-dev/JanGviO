<template>
  <div>
    <b-modal
      id="searchBtn"
      size="lg"
      hide-header="true"
      hide-footer="true"
      modal-class="my-class"
      body-bg-variant="transparent"
      content-class="custom-shadow border-0"
      dialog-class="bg-transparent"
    >
      <div class="input-group my-5 bg-transparent shadow-lg">
        <input
          type="text"
          class="form-control px-5 padding-top-bottom bg-white border-0"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <div class="input-group-append bg-transparent">
          <button
            :style="{ backgroundImage: 'url(' + require('@/assets/' + searchImg) + ')' }"
            class="btn btn-light border-0 px-5 padding-top-bottom"
            type="button"
            id="button-addon2"
          ></button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchImg: "search.svg"
    };
  }
};
</script>

<style scoped>
/deep/ .my-class {
  -webkit-backdrop-filter: saturate(180%) blur(1px);
  backdrop-filter: saturate(180%) blur(1px);
  background-color: rgba(98, 148, 255, 0.158);
}
/deep/ .custom-shadow {
  border-radius: 0;
  /* box-shadow: 0px 0px 2px 40px rgba(250, 250, 250, 0.125); */
}
/deep/ .modal-content {
  background: transparent;
}
.rouded-search {
  border-radius: 10px;
}
input {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
button {
  width: 90px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 30%;
}
.padding-top-bottom {
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
