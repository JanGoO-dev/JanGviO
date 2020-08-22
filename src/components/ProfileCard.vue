<template>
  <div class="card border-0 rounded-all bg-white text-center" :style="'width: ' + cardWidth + ';'">
    <img
      style="max-height: 20rem; max-width: 18rem;"
      class="card-img-top rounded-full bg-transparent p-5 mx-auto"
      src="@/assets/avatar.png"
      alt="Profile Picture"
    />
    <div class="card-body bg-transparent">
      <h5 class="card-title bg-transparent">Card title</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Cras justo odio</li>
      <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item">Vestibulum at eros</li>
    </ul>
    <div class="card-body bg-transparent">
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cardWidth"]
};
</script>