<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
      md="4"
    >
    <v-dialog
        ref="dialog" 
        :return-value.sync="dates"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <div class="input-daterange datepick sec1-move mb-3" id="datepicker" style="position: relative;z-index: 1;">
						<div class="set set1 ">
							<div class="b-d-1 b-d">
								<span v-click-outside="onClickOutside" @click="dropDownMethode()"  class="icon v1" style="width: 100%;"> <i class="far fa-calendar-alt"></i>  تاريخ الاحصائيات  </span>
								<div :class="{'sub-m':true, 'sub-m-2':true ,'show':dropDown   }">
									<ul>
										<li><a @click="thisDay()" class="to-day" href="#">اليوم</a></li>
										<li><a @click="ysterDay()" class="y-day" href="#">الأمس</a></li>
										<li><a @click="lastWeek()" class="l-w" href="#">الأسبوع الماضي</a></li>
										<li><a @click="lastMonth()" class="l-m" href="#">الشهر الماضي</a></li>
										<li><a @click="thisMonth()" class="t-m" href="#">هذا الشهر </a></li>
										<li><a @click="thisYear()" class="t-y" href="#">السنة الحالية</a></li>
										<li><a @click="lastYear()" class="l-y" href="#">السنة الماضية</a></li>
										<li><a @click="fromStart()" class="f-s" href="#">منذ البداية</a></li>
									</ul>
								</div>
							</div>
						</div>
						<!-- <span class="icon"> <i class="far fa-calendar-alt"></i>  تاريخ الاحصائيات  </span> -->
						<div class="from-to">
							<span style="margin:0;" class="">من</span>
              <v-text-field
            v-model="dates[0]"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
							<!-- <input  v-model="dates[0]" style="border-bottom: solid 1px;" type="text" class="" name="start" placeholder="اضغط هنا" value="" /> -->
							<span style="margin:0;" class="">إلى</span>
              <v-text-field
            v-model="dates[1]"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
							<!-- <input v-model="dates[1]" style="border-top: solid 1px;" type="text" class="" name="end" placeholder="اضغط هنا"  value=""/> -->
						</div>
					</div>
        </template>
        <v-date-picker
          v-model="dates"
          range
          scrollable
          style="direction: ltr;"
        >
          <v-btn
            text
            color="#fff"
            @click="$refs.dialog.save(dates)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-dialog>
    </v-col>
  </v-row>
</template>
<script>
   export default {
    data: () => ({
      startDate:'2020-1-8',
      dropDown: false,
      dates: ['2021-09-10', '2021-09-20'],
      menu: false,
    }),
    methods: {
      thisDay:function(){
        var d = new Date();
        var month = d.getMonth()+1;
        var day = d.getDate();
        var year = d.getFullYear();
        this.dates=[`${year}-${month}-${day}`,`${year}-${month}-${day}`]
      },
      ysterDay: function(){
        var oneDay=1000*60*60*24;
        var time = new Date().getTime();
        time-=oneDay;
        var d = new Date(time);
        var month = d.getMonth()+1;
        var day = d.getDate();
        var year = d.getFullYear();
        this.dates=[`${year}-${month}-${day}`,`${year}-${month}-${day}`]
      },
      lastWeek:function(){
        var oneDay=1000*60*60*24,
            oneWeak=oneDay*7;
        var time = new Date().getTime();
        var time0=time-oneWeak;
        var d = new Date(time);
        var month = d.getMonth()+1;
        var day = d.getDate();
        var year = d.getFullYear();
        var d0 = new Date(time0);
        var month0 = d0.getMonth()+1;
        var day0 = d0.getDate();
        var year0 = d0.getFullYear();
        this.dates=[`${year0}-${month0}-${day0}`,`${year}-${month}-${day}`]
      },
      lastMonth:function(){
        var d = new Date();
        var month = d.getMonth();
        var year = d.getFullYear();
        var time0 = new Date(year,month,1);
        var day0 = time0.getDate();
        var month0 = time0.getMonth();
        var year0 = time0.getFullYear();
        var time1 = new Date(year,month+1,0);
        var day1 = time1.getDate();
        var month1 = time1.getMonth();
        var year1 = time1.getFullYear();
        this.dates=[`${year0}-${month0}-${day0}`,`${year1}-${month1}-${day1}`]
      },
      thisMonth:function(){
        var d = new Date();
        var month = d.getMonth();
        var year = d.getFullYear();
        var time0 = new Date(year,month+1,1);
        var day0 = time0.getDate()
        var month0 = time0.getMonth()
        var year0 = time0.getFullYear()
        var time1 = new Date(year,month+2,0);
        var day1 = time1.getDate()
        var month1 = time1.getMonth()
        var year1 = time1.getFullYear()
        this.dates=[`${year0}-${month0}-${day0}`,`${year1}-${month1}-${day1}`]
      },
      thisYear:function(){
        var d = new Date();
        var month = d.getMonth();
        var year = d.getFullYear();
        var time0 = new Date(year,1,1);
        var day0 = time0.getDate()
        var month0 = time0.getMonth()
        var year0 = time0.getFullYear()
        var time1 = new Date(year+1,0,0);
        var day1 = time1.getDate()
        var month1 = time1.getMonth()
        var year1 = time1.getFullYear()
        this.dates=[`${year0}-${month0}-${day0}`,`${year1}-${month1+1}-${day1}`]
      },
      lastYear:function(){
        var d = new Date();
        var month = d.getMonth();
        var year = d.getFullYear();
        var time0 = new Date(year-1,1,1);
        var day0 = time0.getDate();
        var month0 = time0.getMonth();
        var year0 = time0.getFullYear();
        var time1 = new Date(year,0,0);
        var day1 = time1.getDate();
        var month1 = time1.getMonth();
        var year1 = time1.getFullYear();
        this.dates=[`${year0}-${month0}-${day0}`,`${year1}-${month1+1}-${day1}`]
      },
      fromStart:function(){
        var d = new Date();
        var month = d.getMonth()+1;
        var day = d.getDate();
        var year = d.getFullYear();
        this.dates=[`${year}-${month}-${day}`,this.startDate]
      },
      dropDownMethode:function(){
          this.dropDown=!this.dropDown;
      },
			onClickOutside: function() {
				this.dropDown = false
			},
    },
  }
</script>
<style scoped>
  .v-picker__title{
      display: none;
  }
</style>