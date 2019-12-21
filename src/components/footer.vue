<template>
<div class="footer">
  <b-container>
    <!-- FOOTER CONTENT -->
    <b-row class="justify-content-center">
      <b-col xl="6" lg="7" md="8" cols="12">
        <div class="footer__li">
          <div class="footer__li-i"><i class="far fa-envelope"></i></div>
          <div class="footer__li-text">metald847@gmail.com</div>
        </div>
        <div class="footer__li">
          <div class="footer__li-i"><i class="fab fa-vk"></i></div>
          <div class="footer__li-text">vk.com/id337997317</div>
        </div>
        <div class="footer__li">
          <div class="footer__li-i"><i class="fab fa-linkedin-in"></i></div>
          <div class="footer__li-text">linkedin.com/in/timur-ismailov-641563194</div>
        </div>
        <div class="footer__li">
          <div class="footer__li-i"><i class="fas fa-mobile-alt"></i></div>
          <div class="footer__li-text">+998(91)466-86-41</div>
        </div>
      </b-col>
      <b-col xl="2" lg="2" md="3" cols="12" class="text-center">
        <button class="footer__icon" @click="topFunction"><i class="fas fa-angle-double-up"></i></button>
      </b-col>
      <b-col cols="12" class="text-center footer__rights">DESIGNED AND DEVELOPED BY TIMUR</b-col>
      <b-col cols="12" class="text-center footer__rights">2019 <i class="far fa-copyright"></i> ALL RIGHTS NOT RESERVED</b-col>
    </b-row>
  </b-container>
</div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    topFunction() {
      // BUTTON TO SCROLL TO TOP OF PAGE
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  }
}
</script>

<style>
.footer {
  background: #222;
  padding: 50px 0;
  border-top: 1px solid #444;
  margin-top: 25px;
}
.footer__li {
  display: flex;
  align-items: center;
}
.footer__li-i {
  width: 50px;
  font-size: 30px;
  text-align: center;
}
.footer__li-text {
  margin-left: 20px;
}
.footer__icon {
  font-size: 150px;
  color: #f00;
  background: #222;
  border: none;
  padding: 0;
  transition: 0.3s;
}
.footer__icon:focus {
  outline: none;
}
.footer__rights {
  color: #999;
  font-size: 12px;
}
</style>