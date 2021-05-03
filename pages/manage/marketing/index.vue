<template>
  <div class="container">
        <h1>التسويق</h1>
        <div class="all-cards">
        <MarketingCard :key="item.title" v-for="item in cardsData" :item="item"/>      
  </div>
  </div>
</template>

<script>
import MarketingCard from '../../../components/Marketing/MarketingCard.vue'
export default {
  components: { MarketingCard },
  layout: 'ManageGeneralLayout',
  data: () => {
    return {
      cardsData: [
        {
          title: "العروض الخاصة",
          subTitle: "عرض وإنشاء وتخصيص العروض الخاصة",
          url: ""
        },
        {
          title: "كوبونات الخصم",
          subTitle: "عرض وإنشاء كوبونات الخصم",
          url: ""
        },
        {
          title: "السلات المتروكة",
          subTitle: "عرض وإعدادات خصومات وتنبيهات السلات المتروكة",
          url: ""
        },
        {
          showIcons: true,
          title: "الحملات التسويقية",
          subTitle: "إنشاء حملات تسويق موجهة والربط مع أدوات التسويق الإلكتروني",
          url: ""
        },
        {
          title: "التسويق عبر صفحة المتجر",
          subTitle: "إنشاء وإعداد الإعلانات والعروض عبر النوافذ المنبثقة أو البانرات في صفحة المتجر",
          url: ""
        },
        {
          title: "محركات البحث SEO",
          subTitle: "إعدادت تحسين فرص ظهور صفحة المتجر في محركات البحث",
          url: ""
        },
        {
          title: "روابط التسويق",
          subTitle: "إنشاء وإعدادات روابط التسويق عبر العملاء لنمو العملاء والمبيعات",
          url: ""
        },
        {
          title: "برنامج نقاط المكافآت",
          subTitle: "إعدادات نقاط المكافآت لزيادة ولاء العملاء وأيضًا نمو المبيعات",
          url: ""
        }
      ]
    }
  }
  }
</script>

<style scoped>
.container {
  margin: 0 20px;
  min-height: 100vh;
  text-align: center;
}

h1 {
  margin: 50px 0;
    font-size: 40px;
}  

.all-cards {
    display: grid;
        grid-gap: 20px;
    grid-template-rows: repeat(8, 1fr);
    }

    @media screen and (min-width: 786px) {
    .all-cards {
      grid-template-columns: 47.5% 47.5%;
      grid-template-rows: repeat(4, 1fr);
      padding-bottom: 50px;
    }

     @media screen and (min-width: 1024px) {
       .container {
         width: 75%;
         margin: auto;
       }

     }

}

</style>
