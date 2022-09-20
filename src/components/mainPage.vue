<template>
  <div>
    <div class="container containerHeight">
      <div class="row h-100">
        <div class="col-9 h-100 row pt-4 text-white overflow-auto">
          <div class="col-xl-4 col-md-6 col-12" v-for="item in info.court">
            <img
              class="img-fluid courtImg pb-4"
              :src="`/src/assets/court${item}.png`"
            />
            <!-- <img class="img-fluid courtImg pb-4" src="../assets/court0.png" /> -->
            <!-- <div>{{ getImgUrl(item) }}</div> -->
          </div>
          <div>
            <div class="fs-2 px-5">
              <img src="../assets/unusing.png" /> 正在使用
            </div>
            <div class="fs-2 px-5">
              <img src="../assets/using.png" /> 無人使用
            </div>
          </div>
        </div>
        <div
          class="col-3 h-100 d-flex flex-column px-auto"
          style="min-width: 100px; max-width: 200px"
        >
          <div class="text-white mt-5 mb-4">
            <div class="fs-1">{{ info.headcount }}</div>
            <div class="fs-5 fs-md-2 w-100">人數</div>
          </div>
          <div class="text-white mb-4">
            <div class="fs-1">{{ temperature }}</div>
            <div class="fs-5 w-100">溫度</div>
          </div>
          <div class="text-white">
            <div class="fs-1">{{ humidity }}</div>
            <div class="fs-5 w-100">濕度</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.containerHeight {
  height: 90vh;
}
.courtImg {
  padding: 0px 30px;
}
</style>

<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      info: [],
      temperature: '',
      humidity: '',
    };
  },
  methods: {},
  mounted() {
    axios
      .get(
        'https://efe4d2ef-6a48-46da-be42-b013d33b4cfe.mock.pstmn.io//getCourt'
      )
      .then((res) => {
        console.log(res.data);
        this.info = res.data;
        console.log(this.info.court);
        this.temperature = this.info.enviroment.temperature;
        this.humidity = this.info.enviroment.humidity;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
