<template>
  <fragment>
    <div class="sec5">
      <div class="container">
        <div class="top-guid" style="margin-bottom: 15px;padding: 0;">
          <a href="./manage.html"><span>الرئيسية</span></a>
          <span class="ti-angle-left arow"></span>
          <span class="last">الطلبات</span>
        </div>
        <div class="row">
          <div class="col-sm-6 col-md-4 col-lg-3 sec5-move">
            <div class="item">
              <h5>الكل</h5>
              <strong>500</strong>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 sec5-move">
            <div class="item">
              <h5>جديد</h5>
              <strong>10</strong>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 sec5-move">
            <div class="item">
              <h5>جاري التنفيذ</h5>
              <strong>5</strong>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 sec5-move">
            <div class="item">
              <h5>تم التنفيذ</h5>
              <strong>100</strong>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 sec5-move">
            <div class="item">
              <h5>جاري التوصيل</h5>
              <strong>120</strong>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 sec5-move">
            <div class="item">
              <h5>مكتمل</h5>
              <strong>120</strong>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 sec5-move">
            <div class="item">
              <h5>ملغي</h5>
              <strong>8</strong>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 sec5-move">
            <div class="item">
              <h5>مسترجع</h5>
              <strong>13</strong>
            </div>
          </div>
          <div class="t-sec9 sec5-move text-left">
            <span class="btn1"
              ><a class="text-white" href="./talabRe.html"
                >اضافة مسترجع +</a
              ></span
            >
            <span class="btn1"
              ><a class="text-white" href="./talab new.html"
                >اضافة طلب جديد +</a
              ></span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="container"></div>
    <div class="sec2">
      <div class="hawy" style="position: relative;">
        <div class="r-filter-con v0" style="direction: rtl;">
          <div class="r-filter-pp0">
            <div class="input-daterange datepick v2" id="datepicker">
              <div class="set set1 ">
                <div class="b-d-1 b-d">
                  <span class="icon">
                    <i class="far fa-calendar-alt"></i> تاريخ الاحصائيات
                  </span>
                  <div class="sub-m sub-m-2" style="left: -71px;">
                    <ul>
                      <li><a class="to-day" href="#">اليوم</a></li>
                      <li><a class="y-day" href="#">الأمس</a></li>
                      <li><a class="l-w" href="#">الأسبوع الماضي</a></li>
                      <li><a class="l-m" href="#">الشهر الماضي</a></li>
                      <li><a class="t-m" href="#">هذا الشهر </a></li>
                      <li><a class="t-y" href="#">السنة الحالية</a></li>
                      <li><a class="l-y" href="#">السنة الماضية</a></li>
                      <li><a class="f-s" href="#">منذ البداية</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- <span class="icon"> <i class="far fa-calendar-alt"></i>  تاريخ الاحصائيات  </span> -->
              <div class="from-to">
                <span class="">من</span>
                <input
                  style="border-bottom: solid 1px;"
                  type="text"
                  class=""
                  name="start"
                  placeholder="اضغط هنا"
                  value=""
                />
                <span class="">إلى</span>
                <input
                  style="border-top: solid 1px;"
                  type="text"
                  class=""
                  name="end"
                  placeholder="اضغط هنا"
                  value=""
                />
              </div>
            </div>
            <div>
              <div class="text-right">
                <label for="">حالة الطلب</label>
              </div>
              <select class="w-100  form-select" name="" id="">
                <option value="0">الكل</option>
                <option value="1">جديد</option>
                <option value="2">جاري التنفيذ</option>
                <option value="3">تم التنفيذ</option>
                <option value="4">جاري التوصيل</option>
                <option value="5">مكتمل</option>
                <option value="6">ملغي</option>
                <option value="6">مسترجع</option>
              </select>
            </div>
            <div class="mostar v2">
              <div class="text-right">
                <label for="">العميل</label>
              </div>
              <select
                id="mySelect61"
                class="js-example-placeholder-single js-states form-control"
                style="width: 100% !important;"
              >
                <option value="-1"></option>
                <option value="pro0">العميل الأول</option>
                <option value="pro1"> العميل الثاني</option>
              </select>
            </div>
            <div class="mostar v2">
              <div class="text-right">
                <label for="">المنتجات</label>
              </div>
              <select
                id="mySelect62"
                class="js-example-placeholder-single js-states form-control"
                style="width: 100% !important;"
              >
                <option value="-1"></option>
                <option value="pro0">المنتج الأول</option>
                <option value="pro1"> المنتج الثاني</option>
              </select>
            </div>
            <div>
              <div class="text-right">
                <label for="">الدولة</label>
              </div>
              <select class="w-100  form-select" name="" id="">
                <option value="0">الكل</option>
                <option value="1">الدولة الأولى</option>
                <option value="2">الدولة الثانية</option>
              </select>
            </div>
            <div>
              <div class="text-right">
                <label for="">المدينة</label>
              </div>
              <select class="w-100 form-select" name="" id="">
                <option value="0">الكل</option>
                <option value="1">المدينة الأولى</option>
                <option value="2">المدينة الثانية</option>
              </select>
            </div>
            <div class="mt-4 text-center">
              <span class="btn1"> <i class="ti-search"></i> تصفية العرض</span>
            </div>
          </div>
        </div>
        <div class="c-p-p-s-con">
          <div class="container">
            <div
              style="position: relative ;z-index: 6;"
              class="t-sec2 sec2-move"
            >
              <div class="select sec2-move  " style="direction: rtl;">
                <span class=" c-ppp0-filter btn2"
                  ><i class="fas fa-filter"></i> تصفية</span
                >
                <span class="">قائمة الطلبات</span>
              </div>
              <div class="d-flex">
                <div class="sear">
                  <i class="ti-search"></i>
                  <input type="search" placeholder="اسم الطلب - وصف الطلب" />
                  <!-- <input type="search" placeholder="وصف المنتج"> -->
                </div>
                <div class="select m-viwe">
                  <div class="set set1">
                    <div class="b-d-1 b-d" style="position: absolute;left: 0;">
                      <span class="btn03 "><i class="ti-more-alt"></i></span>
                      <div class="sub-m sub-m-2" style="left: -71px;">
                        <ul>
                          <li>
                            <a class="" href="#"
                              ><i class="ti-arrow-down"></i>استيراد من إكسل</a
                            >
                          </li>
                          <li>
                            <a class="" href="#"
                              ><i class="ti-arrow-up"></i>تصدير إلى إكسل</a
                            >
                          </li>
                          <li>
                            <a class="" href="#"
                              ><i class="ti-trash"></i>حذف
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="set-sec2 khia d-viwe">
                <span class="btn2"
                  ><small>استيراد من إكسل</small> استيراد
                  <i class="ti-arrow-down"></i
                ></span>
                <span class="btn2"
                  ><small>تصدير إلى إكسل</small> تصدير
                  <i class="ti-arrow-up"></i
                ></span>
                <div class="set set1 set3  ">
                  <div class="b-d-1 b-d">
                    <span class="btn2 b101"
                      ><small>تعديل حالة أكثر من طلب</small> تعديل
                      <i class="ti-tag"></i
                    ></span>
                    <div class="sub-m sub-m-3">
                      <span>حالة الطلب</span>
                      <select
                        id="set1"
                        class="form-select form-select-lg "
                        aria-label=".form-select-sm "
                      >
                        <option selected value="0">جاري التنفيذ</option>
                        <option value="1">تم التنفيذ</option>
                        <option value="2">جاري التوصيل</option>
                        <option value="3">مكتمل</option>
                        <option value="4"> ملغي</option>
                        <option value="5"> مسترجع</option>
                      </select>
                      <br />
                      <br />
                      <span class="mt-2">إرسال التعديل للعميل</span>
                      <input class="mt-2" type="checkbox" />
                      <br />
                      <textarea name="" id="" placeholder="ملاحظات"></textarea>
                      <div class="text-left">
                        <span class="btn1 ml-2 text-light py-1 px-2">حفظ</span>
                      </div>
                    </div>
                  </div>
                </div>
                <span class="btn2">حذف <i class="ti-trash"></i></span>
                <div class="set set1 ">
                  <div class="b-d-1 b-d">
                    <span class="btn2 "
                      ><small>طباعة بوليصة الشحن</small>طباعة
                      <i class="ti-printer"></i
                    ></span>
                    <div class="sub-m sub-m-2">
                      <ul>
                        <li><a href="#">طباعة بوليصة الشحن عربي</a></li>
                        <li><a href="#">طباعة بوليصة الشحن انجليزي</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-w">
              <div class="w-1100">
                <div class="talab head sec2-move">
                  <div class="img">
                    <input type="checkbox" value="1" id="ch01" name="check" />
                  </div>
                  <div class="infor">
                    <span>الطلب</span>
                    <span>العميل</span>
                    <span class=""> التاريخ والوقت</span>
                    <span class="">الشحن</span>
                    <span class=" ">الدفع</span>
                    <span>حالة الطلب</span>
                    <span>الإجمالي</span>
                    <span></span>
                  </div>
                </div>
                <div
                  class="talab sec2-move"
                  style="position: relative;z-index: 5;"
                >
                  <div class="img">
                    <input type="checkbox" value="1" id="" name="check" />
                  </div>
                  <div class="infor">
                    <span>
                      <a href="#">حاسوب محمول</a>
                      <small>125489<i class="ti-ticket"></i></small>
                    </span>
                    <span>
                      <a href="#">محمد الشمري</a>
                      <small><i class="ti-location-pin"></i>الرياض</small>
                    </span>
                    <span class=" ">
                      1/3/2021
                      <small>2:15PM <i class="ti-time"></i></small>
                    </span>
                    <span class=" ">أرامكس</span>
                    <span class=" ">فيزا</span>
                    <span class="sa">جاري التنفيذ</span>
                    <span>
                      <a href="#"><strong>1000</strong> $</a>
                    </span>
                    <div class="select v0">
                      <div class="set set1">
                        <div
                          class="b-d-1 b-d"
                          style="position: absolute;left: 0;"
                        >
                          <span
                            style="position: absolute;left: 0;"
                            class="btn2 "
                            >إجراءات</span
                          >
                          <div class="sub-m sub-m-2" style="left: -73px;">
                            <ul>
                              <li>
                                <a class=" 0" href="./talab new.html"
                                  ><i class="ti-pencil-alt"></i>تعديل بيانات
                                  الطلب</a
                                >
                              </li>
                              <li>
                                <a class=" 1" href="./talab.html"
                                  ><i class="ti-receipt"></i>تفاصيل الطلب</a
                                >
                              </li>
                              <li>
                                <a class=" 2" href="#"
                                  ><i class="ti-trash"></i>حذف</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="talab sec2-move"
                  style="position: relative;z-index: 4;"
                >
                  <div class="img">
                    <input type="checkbox" value="1" id="" name="check" />
                  </div>
                  <div class="infor">
                    <span>
                      <a href="#">حاسوب محمول</a>
                      <small>125489<i class="ti-ticket"></i></small>
                    </span>
                    <span>
                      <a href="#">محمد الشمري</a>
                      <small><i class="ti-location-pin"></i>الرياض</small>
                    </span>
                    <span class=" ">
                      1/3/2021
                      <small>2:15PM <i class="ti-time"></i></small>
                    </span>
                    <span class=" ">أرامكس</span>
                    <span class=" ">فيزا</span>
                    <span class="sa">جاري التنفيذ</span>
                    <span>
                      <a href="#"><strong>1000</strong> $</a>
                    </span>
                    <div class="select v0">
                      <div class="set set1">
                        <div
                          class="b-d-1 b-d"
                          style="position: absolute;left: 0;"
                        >
                          <span
                            style="position: absolute;left: 0;"
                            class="btn2 "
                            >إجراءات</span
                          >
                          <div class="sub-m sub-m-2" style="left: -73px;">
                            <ul>
                              <li>
                                <a class=" 0" href="./talab new.html"
                                  ><i class="ti-pencil-alt"></i>تعديل بيانات
                                  الطلب</a
                                >
                              </li>
                              <li>
                                <a class=" 1" href="./talab.html"
                                  ><i class="ti-receipt"></i>تفاصيل الطلب</a
                                >
                              </li>
                              <li>
                                <a class=" 2" href="#"
                                  ><i class="ti-trash"></i>حذف</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="talab sec2-move"
                  style="position: relative;z-index: 3;"
                >
                  <div class="img">
                    <input type="checkbox" value="1" id="" name="check" />
                  </div>
                  <div class="infor">
                    <span>
                      <a href="#">حاسوب محمول</a>
                      <small>125489<i class="ti-ticket"></i></small>
                    </span>
                    <span>
                      <a href="#">محمد الشمري</a>
                      <small><i class="ti-location-pin"></i>الرياض</small>
                    </span>
                    <span class=" ">
                      1/3/2021
                      <small>2:15PM <i class="ti-time"></i></small>
                    </span>
                    <span class=" ">أرامكس</span>
                    <span class=" ">فيزا</span>
                    <span class="sa">جاري التنفيذ</span>
                    <span>
                      <a href="#"><strong>1000</strong> $</a>
                    </span>
                    <div class="select v0">
                      <div class="set set1">
                        <div
                          class="b-d-1 b-d"
                          style="position: absolute;left: 0;"
                        >
                          <span
                            style="position: absolute;left: 0;"
                            class="btn2 "
                            >إجراءات</span
                          >
                          <div class="sub-m sub-m-2" style="left: -73px;">
                            <ul>
                              <li>
                                <a class=" 0" href="./talab new.html"
                                  ><i class="ti-pencil-alt"></i>تعديل بيانات
                                  الطلب</a
                                >
                              </li>
                              <li>
                                <a class=" 1" href="./talab.html"
                                  ><i class="ti-receipt"></i>تفاصيل الطلب</a
                                >
                              </li>
                              <li>
                                <a class=" 2" href="#"
                                  ><i class="ti-trash"></i>حذف</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="talab sec2-move"
                  style="position: relative;z-index: 2;"
                >
                  <div class="img">
                    <input type="checkbox" value="1" id="" name="check" />
                  </div>
                  <div class="infor">
                    <span>
                      <a href="#">حاسوب محمول</a>
                      <small>125489<i class="ti-ticket"></i></small>
                    </span>
                    <span>
                      <a href="#">محمد الشمري</a>
                      <small><i class="ti-location-pin"></i>الرياض</small>
                    </span>
                    <span class=" ">
                      1/3/2021
                      <small>2:15PM <i class="ti-time"></i></small>
                    </span>
                    <span class=" ">أرامكس</span>
                    <span class=" ">فيزا</span>
                    <span class="sa">جاري التنفيذ</span>
                    <span>
                      <a href="#"><strong>1000</strong> $</a>
                    </span>
                    <div class="select v0">
                      <div class="set set1">
                        <div
                          class="b-d-1 b-d"
                          style="position: absolute;left: 0;"
                        >
                          <span
                            style="position: absolute;left: 0;"
                            class="btn2 "
                            >إجراءات</span
                          >
                          <div class="sub-m sub-m-2" style="left: -73px;">
                            <ul>
                              <li>
                                <a class=" 0" href="./talab new.html"
                                  ><i class="ti-pencil-alt"></i>تعديل بيانات
                                  الطلب</a
                                >
                              </li>
                              <li>
                                <a class=" 1" href="./talab.html"
                                  ><i class="ti-receipt"></i>تفاصيل الطلب</a
                                >
                              </li>
                              <li>
                                <a class=" 2" href="#"
                                  ><i class="ti-trash"></i>حذف</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="talab sec2-move"
                  style="position: relative;z-index: 1;"
                >
                  <div class="img">
                    <input type="checkbox" value="1" id="" name="check" />
                  </div>
                  <div class="infor">
                    <span>
                      <a href="#">حاسوب محمول</a>
                      <small>125489<i class="ti-ticket"></i></small>
                    </span>
                    <span>
                      <a href="#">محمد الشمري</a>
                      <small><i class="ti-location-pin"></i>الرياض</small>
                    </span>
                    <span class=" ">
                      1/3/2021
                      <small>2:15PM <i class="ti-time"></i></small>
                    </span>
                    <span class=" ">أرامكس</span>
                    <span class=" ">فيزا</span>
                    <span class="sa">جاري التنفيذ</span>
                    <span>
                      <a href="#"><strong>1000</strong> $</a>
                    </span>
                    <div class="select v0">
                      <div class="set set1">
                        <div
                          class="b-d-1 b-d"
                          style="position: absolute;left: 0;"
                        >
                          <span
                            style="position: absolute;left: 0;"
                            class="btn2 "
                            >إجراءات</span
                          >
                          <div class="sub-m sub-m-2" style="left: -73px;">
                            <ul>
                              <li>
                                <a class=" 0" href="./talab new.html"
                                  ><i class="ti-pencil-alt"></i>تعديل بيانات
                                  الطلب</a
                                >
                              </li>
                              <li>
                                <a class=" 1" href="./talab.html"
                                  ><i class="ti-receipt"></i>تفاصيل الطلب</a
                                >
                              </li>
                              <li>
                                <a class=" 2" href="#"
                                  ><i class="ti-trash"></i>حذف</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="sec2-move mt-2">
              <span class="btn2"
                ><i class="ti-angle-double-down"></i> المزيد</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </fragment>
</template>

<script>
export default {
    layout: "ManageGeneralLayout"
}
</script>
