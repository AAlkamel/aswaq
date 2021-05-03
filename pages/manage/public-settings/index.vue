<template>
  <div class="container">
        <h1>الإعدادات العامة</h1>
        <div class="all-cards">
        <SettingCard :key="item.title" v-for="item in settingsData" :item="item"/>      
  </div>
  </div>
</template>

<script>
import SettingCard from '../../../components/PublicSettings/SettingCard.vue'
export default {
  components: { SettingCard },
  layout: 'ManageGeneralLayout',
  data: () => {
    return {
      settingsData: [
        {
          title: "إعدادات الدومين",
          subTitle: "التحكم في دومين المتجر",
          url: ""
        },
          {
          title: "طرق الدفع",
          subTitle: "تفعيل وتخصيص طرق الدفع",
          url: ""
        },
           {
          title: "طرق الشحن والتوصيل",
          subTitle: "الربط مع شركات الشحن والتوصيل",
          url: ""
        },
              {
          title: "الإعدادات الأساسية",
          subTitle: "الاسم - الشعار - معلومات الإتصال - تفاصيل النشاط",
          url: ""
        },
          {
          title: "إعدادت حالة المتجر",
          subTitle: "التحكم في حالة المتجر",
          url: ""
        },
           {
          title: "إعدادات الضرائب",
          subTitle: "إدارة الضرائب وتخصيصها",
          url: ""
        },
          {
          title: "إعدادات اللغة والفروع",
          subTitle: "تحديد اللغات وإدارة الفروع",
          url: ""
        },
         {
          title: "عملات المتجر",
          subTitle: "تحديد العملات المتاحة",
          url: ""
        },
          {
          title: "إعدادات المتجر العامة",
          subTitle: "التحكم بخيارات عرض صفحة المتجر",
          url: ""
        },
            {
          title: "إعدادات العلامات التجارية",
          subTitle: "إعدادات العلامات التجارية وخيارات العرض",
          url: ""
        },
            {
          title: "إعدادات المنتجات",
          subTitle: "إعدادات المنتجات وخيارات العرض",
          url: ""
        },
            {
          title: "إعدادات الطلبات",
          subTitle: "إعدادات حالات الطلبات والفوترة",
          url: ""
        },
            {
          title: "المحذوفات",
          subTitle: "عرض المحذوفات وإستعادتها",
          url: ""
        },
            {
          title: "عمليات الدفع والشحن",
          subTitle: "عرض عمليات الدفع والشحن السابقة",
          url: ""
        },
            {
          title: "تخصيص شركات الشحن",
          subTitle: "تخصيص وتحديد إختيار شركات الشحن",
          url: ""
        }
      ]
    }
  }
  }
</script>

<style scoped>
.container {
  min-height: 100vh;
    text-align: center;
    width: 75%;
    margin: auto;
    direction: rtl;
    padding-bottom: 50px
}

h1 {
  margin: 50px 0;
    font-size: 40px;
}  

.all-cards {
    display: grid;
        grid-gap: 20px;
    grid-template-rows: repeat(15, 1fr);
    justify-content: center;
    }

    @media screen and (min-width: 786px) {
    .all-cards {
      grid-template-columns: 47.5% 47.5%;
      grid-template-rows: repeat(4, 1fr);
    }

     @media screen and (min-width: 1024px) {
       .container {
         width: 85%;
         margin: auto;
       }

       .all-cards {
         grid-template-columns: repeat(4, 1fr);
         grid-gap: 20px;
       }

     }

}
</style>
