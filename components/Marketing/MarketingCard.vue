<template>
<div class="mCard">
    <div class="mCard-info">
      <h4>{{this.item.title}}</h4>
      <p>{{this.item.subTitle}}</p>
      <MediaIcons v-if="item.showIcons" />
      <button type="button">تفاصيل</button>
    </div>
    <img src="~/assets/images/sales.jpg" alt="offers" />
</div>
</template>

<script>
import MediaIcons from './MediaIcons'

export default {
  name: "MarketingmCard",
  components: {
    MediaIcons
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
    display: grid;
    grid-template-columns: 70% 27.5%;
    grid-gap: 2.5%;
    min-height: 250px;
    border-radius: 10px;
}

img {
  width: 100%;
  height: 100%;
  transition: .3s all;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

img:hover {
    transform: scale(.9);
}

h4 {
  font-size: 20px;
  color: #4d0653;
}

 p {
  background-color: transparent;
  margin: 10px 0;
  font-size: 17px;
  color: grey;
}

button {
  font-size: 17px;
  padding: 7px 15px;
  border-radius: 5px;
  background-color: #4d0653;
  color: white;
  border: none;
  max-width: 60%;
}

.mCard-info {
     padding: 1em;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

     @media screen and (min-width: 786px) {
       .mCard {
             grid-template-columns: 65% 32.5%;

       }
     }

</style>
