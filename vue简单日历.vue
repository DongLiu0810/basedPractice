<template>
<div class="body">
  <h2>日历</h2>
  <table>
     <tr id="title">
       <td>周一</td>
       <td>周二</td>
       <td>周三</td>
       <td>周四</td>
       <td>周五</td>
       <td>周六</td>
       <td>周日</td>
     </tr>
  <tr>
    <td v-for="item in dates" :key="item" v-on:click="changec(item)" v-bind:class="{active:item==number,active2:today==item} ">{{item}}</td>
  </tr>
  </table>
  <button v-on:click="befor" >上周</button>
  <button v-on:click="after" >下周</button>
   </div>
</template>
<script>
/* eslint-disable */
var Dates = new Date().getDate();
var Days = new Date().getDay();
var weekend = 0;
export default {
  data() {
    return {
      dates: [],
      number: -1,
      today: false,
      today: new Date().getDate()
    };
  },
  created() {
    this.Change(weekend);
  },
  methods: {
    changec(num) {
      this.today = 0;
      this.number = num;
    },
    after() {
      weekend = weekend + 7;
      this.Change(weekend);
      this.today = new Date().getDate();
    },
    befor() {
      weekend = weekend - 7;
      this.Change(weekend);
      this.today = new Date().getDate();
    },
    Change(weekend) {
      let count = 1 - Days + weekend;
      let i = 0;

      while (i < 7) {
        var d = new Date();
        var m = d.setDate(d.getDate() + i + count);
        let n = new Date(m).getDate();
        this.dates.splice(i, 1, n);
        i++;
      }
    }
  }
};
</script>
<style>
.body {
  background: greenyellow;
  height: 300px;
  text-align: center;
}
table {
  margin: 50px auto;
  background: greenyellow;
  display: table;
}
td {
  width: 100px;
  height: 50px;
  text-align: center;
  border-radius: 15%;
}
#title {
  background-color: pink;
}
.active {
  background: gray;
}
.active2 {
  background: rgb(16, 196, 187);
}
button {
  width: 66px;
  height: 33px;
  color: aquamarine;
  border-radius: 20%;
}
</style>
