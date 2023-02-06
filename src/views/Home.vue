<template>
       <div class="background">
        <span class="bg1"><img src="../assets/SvgHero1.svg" /></span>
        <span class="bg2"><img src="../assets/SvgHero3.svg" /></span>
      <div class="container">
        <div class="header">
          <nav class="navbar navbar-expand-lg navbar-dark ml-auto">
            <router-link to="/">  <img class="navbar-brand" id="headerLogo" src="../assets/HeaderLogo.svg" /></router-link>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse justify-content-end p-3" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">HOME <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#abousUs">ABOUT US</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#whyUs">WHY US</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#contactUs">CONTACT US</a>
      </li>
      <li class="nav-item">
          <a class="nav-link" href="/#/login">LOGIN</a>
      </li>
    </ul>
  </div>
</nav>
        </div>
        <div class="Hero1">
          <h1><strong>CryptoHex:</strong></h1>
          <h2><strong>Your best one-stop solution for all of your cryptocurrency needs and plans</strong></h2>
          <h4>Experience the freedom of decentralized finance in your hands</h4>
          <div class="line-1"></div>
          <router-link to="/login">
            <div class="startButton">
            <img href="/#/login" src="../assets/ButtonOpacity.svg" />
          </div>
          </router-link>
          <div class="line-2"></div>
        </div>
        <div class="Hero2" id="abousUs">
            <div class="Hero2Upper">
            <div class="HeroLogo2">
            <img class="Hero2Logo1" src="../assets/HeaderLogo.svg" />
            <span> <img class="Hero2LogoBg" src="../assets/SvgHero2.svg" /></span>
            </div>
            <div class="Whoweare">
            <div class="Hero2Title"><span class="roundTitle"></span>WHO WE ARE <span class="roundTitle"></span></div>
            <h1>Securely Store,</h1>
            <h1>manage,</h1>
            <h1>and transact with us.</h1>
          </div>
          </div>
          <div class="Hero2Bot">
            <div class="Hero2Desc">
              <p>CryptoHex is a cryptocurrency wallet that allows you to store, manage, and trade various digital assets and cryptocurrencies. It provides you with a secure and convenient way to access and manage your digital assets, including Bitcoin, Ethereum, and other popular cryptocurrencies. With CryptoHex, you can easily send and receive payments, check your transaction history, and track your balance. 
</p>
            </div>
            <div class="Hero2Bgpic">
              <img src="../assets/Hero2BG.svg" />
            </div>
          </div>
          </div>
        <div class="WhyUs" id="whyUs">
          <div class="WhyChooseUs">
            <div class="Hero2Title"><span class="roundTitle"></span>WHY CHOOSE US <span class="roundTitle"></span>
            </div>
            <div class="WhyUsCard">
              <div class="cardOuter">
                <div class="logo">
                  <img src="../assets/ikon1.svg" />
                </div>
                <div class="cardTitle">
                  <h6><strong>Security & control over money</strong></h6>
                </div>
                <div class="cardDesc"><p>CryptoHex provides top-of-the-line security measures to give you peace of mind and complete control over you digital assets</p>
                </div>
              </div>
              <div class="cardOuter">
                <div class="logo">
                  <img src="../assets/ikon2.svg" />
                </div>
                <div class="cardTitle">
                  <h6><strong>Protect the identity</strong></h6>
                </div>
                <div class="cardDesc"><p>CryptoHex is committed to protecting your identity by ensuring that your personal information is kept private and secure at all times.s</p>
                </div>
              </div>
              <div class="cardOuter">
                <div class="logo">
                  <img src="../assets/ikon3.svg" />
                </div>
                <div class="cardTitle">
                  <h6><strong>Payment make easy</strong></h6>
                </div>
                <div class="cardDesc"><p>CryptoHex makes it easy for you to make secure payments, ensuring a hassle-free transaction experience.</p>
                </div>
              </div>
              <div class="cardOuter">
                <div class="logo">
                  <img src="../assets/ikon4.svg" />
                </div>
                <div class="cardTitle">
                  <h6><strong>life time free transaction</strong></h6>
                </div>
                <div class="cardDesc"><p>CryptoHex offers life-time free transactions, allowing you to make as many purchases as you want without incurring any additional fees.</p>
                </div>
              </div>
            </div>
            <div class="WhyUsCard">
              <div class="cardOuter">
                <div class="logo">
                  <img src="../assets/ikon5.svg" />
                </div>
                <div class="cardTitle">
                  <h6><strong>Ease of use</strong></h6>
                </div>
                <div class="cardDesc"><p>CryptoHex is designed with a user-friendly interface, making it easy for even novice users to navigate and make transactions.</p>
                </div>
              </div>
              <div class="cardOuter">
                <div class="logo">
                  <img src="../assets/ikon6.svg" />
                </div>
                <div class="cardTitle">
                  <h6><strong>Wide range of coins and tokens supported</strong></h6>
                </div>
                <div class="cardDesc"><p>CryptoHex support a variety of different cryptocurrencies, giving users the ability to store and manage multiple assets in one place.</p>
                </div>
              </div>
              <div class="cardOuter">
                <div class="logo">
                  <img src="../assets/icon7-8.svg" />
                </div>
                <div class="cardTitle">
                  <h6><strong>Integration with other platforms</strong></h6>
                </div>
                <div class="cardDesc"><p>CryptoHex offer integration with other platforms or services, making it easier to manage cryptocurrency assets and make transactions.</p>
                </div>
              </div>
              <div class="cardOuter">
                <div class="logo">
                  <img src="../assets/ikon7.svg" />
                </div>
                <div class="cardTitle">
                  <h6><strong>Customer support</strong></h6>
                </div>
                <div class="cardDesc"><p>CryptoHex offer excellent customer support, with knowledgeable staff available to assist users with any questions or issues they may have.</p>
                </div>
              </div>
            </div>
        </div>
    </div>
    <div class="cryptoPrice">
      <div class="headTable">
        <div class="cryptoTitle"><span class="roundTitle"></span>CURRENT PRICE <span class="roundTitle"></span>
            </div>
            <div class="headRow">
                <div class="headNum"><h4>#</h4></div>
                <div class="headCoin"><h4>COIN</h4></div>
                <div class="headPrice"><h4>PRICE</h4></div>
                <div class="headHour"><h4>1h%</h4></div>
                <div class="headDay"><h4>24h%</h4></div>
                <div class="headWeek"><h4>7d%</h4></div>
                <div class="headMarket"><h4>MARKET CAP</h4></div>
            </div>
        </div>
        <div v-bind:key="data.id" v-for="data in apiData">
              <div>
                <div class="dataTable">
                    <div class="coinInfo">
                        <div class="rank">{{ data.market_cap_rank }}</div>
                        <img class="coinLogo" :src="data.image" />
                        <div class="coinName"><h6>{{ data.name }}({{ data.symbol }})</h6></div>
                    </div>
                    <div class="coinPrice">
                        <h5>${{ data.current_price }}</h5>
                    </div>
                    <div class="oneHour">
                        <h5>{{ data.atl_change_percentage }}%</h5>
                    </div>
                    <div class="dayHour">
                        <h5>{{ data.price_change_percentage_24h}}%</h5>
                    </div>
                    <div class="weekHour">
                        <h5>{{ data.atl }}%</h5>
                    </div>
                    <div class="marketCap">
                        <h5>${{ data.market_cap }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="chartCrypto">
      <div> <img src="../assets/Component 1.svg"/></div>
    </div>
    <div class="ContactUs" id="contactUs">
        <div class="Hero4Title"><span class="roundTitle"></span>CONTACT US <span class="roundTitle"></span>
            </div>
        <div class="contactWrap">
        <div class="contactIcon">
            <div class="gmailIcon">
                <img src="../assets/gmailLogo.svg" />
            </div>
            <div class="line-3"></div>
            <div class="callIcon">
                <img src="../assets/callLogo.svg" />
            </div>
            <div class="line-3"></div>
            <div class="locIcon">
                <img src="../assets/locLogo.svg" />
            </div>
        </div>
        <div class="contactInfo">
            <div class="gmailInfo">
                <h3>company@gmail.com</h3>
                <h3>company@gmail.com</h3>
            </div>
            <div class="callInfo">
                <h3>+62**********</h3>
                <h3>+62**********</h3>
            </div>
            <div class="locInfo">
                <h3>city/province/area</h3>
            </div>
        </div>
        </div>
    </div>
    <div class="Footer">
        <div class="footerUp">
            <div class="logoFooter">
                <img class="navbar-brand" id="headerLogo" src="../assets/HeaderLogo.svg" />
            </div>
            <div class="footerHeadline1">
                <h3>USEFUL LINK</h3>
            </div>
            <div class="footerHeadline">
                <h3>COMMUNITY</h3>
            </div>
            <div class="footerHeadline1">
                <h4>SUBSCRIBE NEWSLETTER</h4>
            </div>
        </div>
        <div class="footerDown">
            <div class="bottom1">
                <h5>A new way to make payment easy, reliable and 100% secure</h5>
                <div class="sosmedIcon">
                    <img src="../assets/SocMedIcon.svg" />
                </div>
            </div>
            <div class="buttom2">
                <h5><a href="#">Contact Us</a></h5>
                <h5><a href="#">How It Works</a></h5>
                <h5><a href="#">Create</a></h5>
                <h5><a href="#">Explore</a></h5>
                <h5><a href="#">Terms&Services</a></h5>
            </div>
            <div class="buttom2">
                <h5><a href="#">Help Center</a></h5>
                <h5><a href="#">Partners</a></h5>
                <h5><a href="#">Suggestions</a></h5>
                <h5><a href="#">Blog</a></h5>
                <h5><a href="#">Newsletters</a></h5>
            </div>
            <div class="buttom3">
                <input type="text" placeholder="Email Adress" />
                <button class="footerSubmit">SUBMIT</button>
            </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { nextTick } from 'vue';
export default {
    name: 'HomePage',
    component: {
    },
    data() {
        return {
            apiData: []
        }
    },
    mounted() {
      this.cryptoPrice();
      setInterval(() => {
        this.cryptoPrice()
      }, 5000);
      console.log(this.apiData)
    },
    methods: {
      async cryptoPrice() {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
        this.apiData = response.data
      },
    },
    }
</script>

<style scoped>

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Quantico', sans-serif, serif;
  scroll-behavior: smooth;
}
.background {
  position: relative;
  overflow: auto;
  color: white;
  width: 100%;
  height: 100vh;
  background: var(--backgroundColor);
}

#headerLogo {
  width: 261px;
  height: 107px;
}
#navbarSupportedContent {
  font-size: 22px;
}

.navbar-nav {
  z-index: 1;
}
.nav-item a{
  font-family: 'recons';
  color: white;
}
.nav-item.active a{
  color: #E7BDFB;
}


.Hero1 {
  position: relative;
  padding: 5%;
}
.Hero1 h1 {
  font-size: 54px;
}

.startButton {
  margin-left: 60%;
}

.line-1 {
  position: relative;
  width: 180px;
  right: 8.5%;
  border-top: 1px solid white;
  transform: rotate(90deg);
}
.line-2 {
  position: relative;
  border-top: 1px solid white;
  margin-top: -6.8%;
  z-index: 0;
  width: 60%;
}

.Hero2 {
  position: relative;
  padding: 5%;
  margin-top: 10%;
  
}
.Hero2Upper {
  position: relative;
  display: flex;
  justify-content:space-evenly;
}
.HeroLogo2 {
  margin-left: 5%;
}

.Hero2LogoBg {
  position: relative;
  z-index: 0;
  right: 10%;
  bottom: 40%;
  width: 60%;
}
.Hero2Logo1 {
  position: relative;
  top: 10%;
  width: 50%;
}

.Whoweare {
  font-size: 50px;
  position: relative;
  left: -8%;
}
.Hero2Title {
  font-family: 'recons';
  display: flex;
  align-items: center;
}
.roundTitle {
  position: relative;
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
}

.Hero2Bot {
  position: relative;
  bottom: 200px;
  display: flex;
  font-size: 28px;
}
.Hero2Desc {
  padding: 2%;
}

.Hero2Bgpic {
  width: 50%;
  display: flex;
}


.WhyChooseUs {
  font-size: 50px;
  position: relative;
  justify-content: center;
}

.Hero2Title {
  display: flex;
  justify-content: center;
}
.WhyUsCard {
  display: flex;
  box-sizing: content-box;
  gap: 5%;
  justify-content: space-evenly;
  margin-bottom: 5%;
  margin-top: 5%;
}
.cardOuter {
  width: 20%;
  padding: 3%;
  background-color: var(--color-navy);
}
.cardDesc {
  font-size: 16px;
}
.ContactUs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    width: 100%;
    padding: 5%;
}

.Hero4Title {
  font-family: 'recons';
  display: flex;
  align-items: center;
}
.contactIcon {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
    margin-top: 5%;
}
.line-3 {
  position: relative;
  width: 200px;
  border-top: 1px solid white;
}
.contactInfo{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    margin-top: 5%;
}
.gmailInfo {
    display: flex;
    flex-direction:column;
}
.callInfo{
    display: flex;
    flex-direction: column;
}
.Footer {
    width: 100%;
    height: 400px;
    background: var(--color-navy);
    padding: 3%;
    display: flex;
    flex-direction: column;
    margin-top: 10%;
    margin-bottom: 5%;
}
.footerUp {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-bottom: 2.5%;
}
.footerDown {
    display: flex;
    align-items: center;
    width: 100%;
}
.logoFooter {
    width: 25%;
}
.footerHeadline {
    display: flex;
    width: 25%;
    justify-content: center;
    align-items: center;
}
.footerHeadline1 {
    display: flex;
    width: 25%;
    justify-content: center;
    align-items: center;
}

.bottom1 {
    width: 25%;
    padding-top: 1%;
}
.sosmedIcon {
    margin-top: 5%;
}
.buttom2{
    display: flex;
    flex-direction: column;
    width: 25%;
    justify-content: center;
    align-items: center;
}
.buttom2 a{
    text-decoration: none;
    color: white;
}
.buttom3 {
    display: flex;
    width: 25%;
    padding-bottom: 5%;
    justify-content: center;
}
.buttom3 input {
    color: white;
    background: var(--color-navy);
    width: 60%;
    height: 50px;
}
.footerSubmit {
    background: var(--color-white);
    width: 30%;
    height: 50px;
}
.headTable {
    width: 100%;
    margin-bottom: 2%;
}
.headRow {
    font-size: 18px;
    font-family: 'recons';
    width: 100%;
    overflow: auto;
    display: flex;
    justify-content: space-around;
    align-content: center;
    align-items: center;
    overflow: hidden;
    border-top: 1px white solid;
    border-bottom: 1px white solid;
}

.headCoin {
    position: relative;
    right: 6%;
}
.headPrice {
    position: relative;
    right: -1%;
}
.headHour {
    position: relative;
    right: 3%;
}
.headDay {
    position: relative;
    right: 1%;
}
.headWeek {
    position: relative;
    right: 6%;
}

.headMarket {
    position: relative;
    left: 1%;
}

.dataTable{
    font-size: 18px;
    width: 100%;
    overflow: auto;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-bottom: 2%;
}
.coinInfo{
    display: flex;
    width: 25%;
    box-sizing: border-box;
}

.rank {
    width: 20%;
    padding-right: 5%;
}


.coinName {
    width: 100%;
    display: flex;
    align-items: center;
}

.coinLogo {
    width: 10%;
    margin-right: 2%;
}

.coinPrice {
    width: 10%;
}

.oneHour {
    width: 15%;
}
.dayHour {
    width: 10%;
}
.weekHour {
    width: 20%;
}

.marketCap {
    width: 10%;
}

.cryptoTitle {
  font-size: 50px;
  font-family: 'recons';
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;
}

.chartCrypto {
  display: flex;
  justify-content: center;
}

.bg1 {
  position:absolute;
  margin-top: 5%;
  margin-left: 60%;
  overflow:auto;
  margin-right: 8%;
  animation: rotation 30s linear infinite;
  animation-iteration-count: infinite;
}
.bg1 img {
  width: 100%;
} 
.bg2 {
  position:absolute;
  margin-top: 45%;
  margin-left: 3%;
}
.bg2 img {
  width: 100%;
}

@keyframes rotation{
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-369deg);
  }
}

@media only screen and (max-width: 480px) {
.Hero1 h1{
  font-size: 32px;
}
.Hero1 h2 {
  font-size: 22px;
}
.Hero1 h4 {
  font-size: 18px;
}
.line-1 {
  display: none;
}
.line-2{
  display: none;
}

.startButton {
  width: 100%;
  margin-top: 5%;
  margin-left: 0%;
}
.startButton img {
  width: 100%;
}
.Hero2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-size: 24px;
}
.HeroLogo2 {
  display: none;
  margin-left: 0%;
}

.Hero2Upper {
  justify-content: center;
  text-align: center;
}

.Hero2Logo1 {
  display: none;
}
.Whoweare {
  font-size: 24px;
  position: relative;
}
.Hero2Title {
  font-family: 'recons';
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-size: 42px;
}

.Hero2Bot {
  position: relative;
  bottom: 200px;
  display: flex;
  flex-direction: column;
  font-size: 24px;
  width: 100%;
}
.roundTitle {
  position: relative;
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
}
.Hero2LogoBg {
  display: none;
  right: 0%;
  bottom: 0%;
  width: 100%;
}

.Hero2Desc {
  font-size: 28px;
  margin-top: 80%;
}

.Hero2Bgpic {
  display: block;
  width: 100%;
  position: relative;
}

.Hero2Bgpic img {
  width: 100%;
}
.Whoweare {
  font-size: 50px;
  position: relative;
  left: 0%;
}

.WhyChooseUs {
  font-size: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2.5%;
  margin-right: 2.5%;
}
.WhyUsCard {
  display: flex;
  flex-direction: column;
}
.Hero2Title {
  display: flex;
  justify-content: center;
}
.WhyUsCard {
  display: flex;
  box-sizing: content-box;
  gap: 0%;
  justify-content: space-evenly;
  margin-top: 5%;
}
.cardOuter {
  width: 100%;
  height: 100%;
  padding: 3%;
  background-color: var(--color-navy);
  margin-bottom: 5% ;
}
.cardDesc {
  font-size: 16px;
}

.cryptoPrice {
  display: none;
}
.chartCrypto {
  display: none;
}

.ContactUs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    width: 100%;
    padding: 5%;
}

.Hero4Title {
  font-family: 'recons';
  display: flex;
  align-items: center;
}
.contactIcon {
  display: none;
}
.line-3 {
  display: none;
}
.contactInfo{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    text-align: center;
    margin-top: 5%;
    font-size: 32px;
}
.gmailInfo {
  margin-bottom: 5%;
}
.callInfo {
  margin-bottom: 5%;
}
.gmailInfo {
    display: flex;
    flex-direction:column;
}
.callInfo{
    display: flex;
    flex-direction: column;
}

.Footer {
    width: 100%;
    height: 300px;
    background: var(--color-navy);
    padding: 3%;
    display: flex;
    flex-direction: column;
    margin-top: 10%;
    margin-bottom: 5%;
}
.footerUp {
    display: flex;
    flex-direction: row;
    justify-content: start;
    width: 100%;
    margin-top: 5%;
    margin-bottom: 2.5%;
}
.footerDown {
    display: flex;
    flex-direction: column;
    width: 100%;
}
.logoFooter {
    width: 25%;
}
.footerHeadline {
  display: none;
}
.footerHeadline1 {
  display: none;
}

.bottom1 {
    width: 100%;
    padding-top: 1%;
}
.sosmedIcon {
  display: none;
}
.buttom2{
  display: none;
}
.buttom3 {
  display: flex;
  width: 100%;
  justify-content: start;
  margin-top: 5%;
}
.buttom3 input {
    color: white;
    background: var(--color-navy);
    width: 100%;
    height: 50px;
}
.footerSubmit {
    background: var(--color-white);
    width: 40%;
    height: 50px;
}

.bg1 {
  display: none;
}
.bg2 {
  display: none;
}

}
@media only screen and (min-width: 480px) and (max-width:1200px) {

  .nav-item  {
    width: 100%;
    font-size: 32px;
  }
  .Hero1 h1{
  font-size: 32px;
}
.Hero1 h2 {
  font-size: 22px;
}
.Hero1 h4 {
  font-size: 18px;
}
.line-1 {
  display: none;
}
.line-2{
  display: none;
}

.startButton {
  width: 100%;
  margin-top: 5%;
  margin-left: 0%;
}
.startButton img {
  width: 100%;
}
.Hero2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.HeroLogo2 {
  display: none;
  margin-left: 0%;
}
.Hero2Logo1 {
  display: none;
}
.Whoweare {
  font-size: 32px;
  position: relative;
}
.Hero2Title {
  font-family: 'recons';
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.roundTitle {
  position: relative;
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
}
.Hero2LogoBg {
  display: none;
  right: 0%;
  bottom: 0%;
  width: 100%;
}

.Hero2Desc {
  font-size: 28px;
  margin-top: 80%;
}

.Hero2Bgpic img {
  width: 100%;
}
.Hero2Bot {
  position: relative;
  bottom: 200px;
  display: flex;
  flex-direction: column;
  font-size: 24px;
  width: 100%;
}
.Hero2Bgpic {
  display: block;
  width: 100%;
  position: relative;
}
.Whoweare {
  font-size: 50px;
  position: relative;
  left: 0%;
}

.WhyChooseUs {
  font-size: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2.5%;
  margin-right: 2.5%;
}
.WhyUsCard {
  display: flex;
  flex-direction: column;
}
.Hero2Title {
  display: flex;
  justify-content: center;
}
.WhyUsCard {
  display: flex;
  box-sizing: content-box;
  gap: 0%;
  justify-content: space-evenly;
  margin-top: 5%;
}
.cardOuter {
  width: 100%;
  height: 100%;
  padding: 3%;
  background-color: var(--color-navy);
  margin-bottom: 5% ;
}
.cardDesc {
  font-size: 16px;
}

.cryptoPrice {
  display: none;
}
.chartCrypto {
  display: none;
}

.ContactUs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    width: 100%;
    padding: 5%;
}

.Hero4Title {
  font-family: 'recons';
  display: flex;
  align-items: center;
}
.contactIcon {
  display: none;
}
.line-3 {
  display: none;
}
.contactInfo{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    text-align: center;
    margin-top: 5%;
    font-size: 32px;
}
.gmailInfo {
  margin-bottom: 5%;
}
.callInfo {
  margin-bottom: 5%;
}
.gmailInfo {
    display: flex;
    flex-direction:column;
}
.callInfo{
    display: flex;
    flex-direction: column;
}

.Footer {
    width: 100%;
    height: 300px;
    background: var(--color-navy);
    padding: 3%;
    display: flex;
    flex-direction: column;
    margin-top: 10%;
    margin-bottom: 5%;
}
.footerUp {
    display: flex;
    flex-direction: row;
    justify-content: start;
    width: 100%;
    margin-top: 5%;
    margin-bottom: 2.5%;
}
.footerDown {
    display: flex;
    flex-direction: column;
    width: 100%;
}
.logoFooter {
    width: 25%;
}
.footerHeadline {
  display: none;
}
.footerHeadline1 {
  display: none;
}

.bottom1 {
    width: 100%;
    padding-top: 1%;
}
.sosmedIcon {
  display: none;
}
.buttom2{
  display: none;
}
.buttom3 {
  display: flex;
  width: 100%;
  justify-content: start;
  margin-top: 5%;
}
.buttom3 input {
    color: white;
    background: var(--color-navy);
    width: 100%;
    height: 50px;
}
.footerSubmit {
    background: var(--color-white);
    width: 40%;
    height: 50px;
}
.bg1 {
  display: none;
}
.bg2 {
  display: none;
}


}
</style>