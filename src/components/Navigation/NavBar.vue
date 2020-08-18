<template>
  <div>
    <header
      id="main"
      class="navbar navbar-expand-lg navbar-light bg-white fixed-top ml-5"
    >
      <div class="d-flex flex-column align-items-left ml-5" href="#">
        <span class="bg-white h5 mb-0">JanGvio</span>
        <small class="bg-white text-muted">Lorem Ipsem Maseep!</small>
      </div>
    </header>
    <header
      id="aside"
      class="navbar navbar-light bg-white flex-column fixed-bottom h-100"
    >
      <a href="#" class="bg-white p-1">
        <img
          class="bg-white"
          src="@/assets/logo.png"
          width="35"
          height="35"
          alt="JanGvio Logo"
        />
      </a>
      <div class="avatar mb-auto mt-5">
        <img
          src="@/assets/avatar.png"
          width="30"
          height="30"
          alt="Profile Avatar"
          class="avatar bg-white"
        />
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#main {
  height: 60px !important;
}
#aside {
  width: 70px !important;
}
.avatar {
  border-radius: 100%;
}
</style>
