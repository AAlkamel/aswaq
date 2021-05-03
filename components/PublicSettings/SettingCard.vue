<template>
  <div class="mCard">
      <div class="mCard-info">
      <h4>{{this.item.title}}</h4>
      <p>{{this.item.subTitle}}</p>
      </div>
          <img src="~/assets/images/setting.png" alt="offers" />
  </div>
</template>

<script>

export default {
  name: "SettingmCard",
  components: {

},
  props: [
      "item"
  ]
};
</script>

<style scoped>
.mCard {
     height: auto;
    border: 1px solid #4d0653;
    min-height: 180px;
    border-radius: 10px;
    position: relative;
}

img {
  transition: .3s all;
    position: absolute;
    width: 50px;
    height: 52px;
    right: 3%;
    top: 3%;
    border-radius: 50%;
}

img:hover {
    transform: scale(.9);
}

h4 {
  font-size: 20px;
  color: #4d0653;
      margin: 10px 0
}

p {
  background-color: transparent;
  margin: 10px;
  font-size: 17px;
  color: grey;
  line-height: 22px;
}

.mCard-info {
        display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}



     @media screen and (min-width: 1024px) {
      .mCard {
          min-height: 250px;
      }
     }

</style>
