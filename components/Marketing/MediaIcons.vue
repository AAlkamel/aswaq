<template>
  <div class="icons">
    <div class="icon">
      <i class="fas fa-braille"></i>
    </div>
    <div class="icon">
      <i class="fab fa-tiktok"></i>
    </div>
    <div class="icon">
      <i class="fab fa-google"></i>
    </div>
    <div class="icon">
      <i class="fab fa-facebook-f"></i>
    </div>
    <div class="icon">
      <i class="fab fa-twitter"></i>
    </div>
    <div class="icon">
      <i class="fab fa-snapchat-ghost"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "MediaIcons"
};
</script>
<style scoped>
.icons {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 10px 0;
}

.icon {
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4d0653;
  border-radius: 50%;
  margin: 5px;
}

i {
  font-size: 18px;
  color: white;
}
</style>
