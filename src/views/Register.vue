<template>
       <div class="background2">
        <div class="container">
        <div class="header">
          <nav class="navbar navbar-expand-lg navbar-dark ml-auto">
            <router-link to="/">
              <img class="navbar-brand" id="headerLogo" src="../assets/HeaderLogo.svg" />
            </router-link>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="/#/">HOME <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/#/">ABOUT US</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/#/">WHY US</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/#/">CONTACT US</a>
      </li>
      <li class="nav-item active">
          <a class="nav-link" href="/#/register">REGISTER</a>
      </li>
    </ul>
  </div>
</nav>
        </div>
        <div class="loginP">
            <div class="left">
                <img class="leftLogo" src="../assets/HeaderLogo.svg" />
                <h1 class="leftTitle">EXPERIENCE THE FUTURE OF FINANCE WITH CRYPTOHEX</h1>
            </div>
            <div class="right">
              <form @submit.prevent="submitForm">
                <div class="rightWrapper">
                    <div class="userName">
                    <label for="fullName"><strong>Full Name</strong></label>
                <input v-model="form.fullName" type="text" id="fullName" name="fullName">
                </div>
                <div class="userName">
                    <label for="email"><strong>Email</strong></label>
                <input v-model="form.userEmail" type="text" id="email" name="email">
                </div>
                <div class="userName">
                    <label for="userName"><strong>Username</strong></label>
                <input v-model="form.userName" type="text" id="userName" name="userName">
                </div>
                <div class="password">
                    <label for="password"><strong>Password</strong></label>
                <input v-model="form.userPassword" type="password" id="password" name="password">
                </div>
                <div class="password">
                    <label for="password"><strong>Confirm Password</strong></label>
                <input v-model="form.userConfirm" type="password" id="password" name="password">
                </div>
                <div class="checkAgree">
                    <input v-model="form.checkboxValue" type="checkbox" />
                    <p>i agree to the terms of users</p>
                </div>
                    <button :disabled="!isFormValid" type="submit" class="signIn">Sign Up</button>
                <div class="noAccount">
                    <a href="/#/login">Have an account?<strong>Sign In</strong></a>
                </div>
                </div>
                </form>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'RegisterPage',
    data() {
      return {
        form: {
          fullName: '',
          userEmail: '',
          userName: '',
          userPassword: '',
          userConfirm: '',
          checkboxValue: false,
        },
      }
    },
    computed: {
      text() {
        return `Hello ${this.form.fullName}, you success to register your CryptoHex account with this gmail ${this.form.userEmail}`
      },
      isFormValid() {
        return this.form.fullName.trim().length > 0 && this.form.userEmail.trim().length > 0 &&  this.form.userName.trim().length > 0 &&  this.form.userPassword.trim().length > 0 &&  this.form.userConfirm.trim().length > 0 && this.form.checkboxValue && this.form.userPassword === this.form.userConfirm
      }
    },
    methods: {
      async submitForm() {
        const token = '6154604609:AAE1qmPp-I_jOxndD-01zMxwnR2BTwtSHss';
        const chatId= '5288823606';
        const data = {text: this.text};
        try {
          const response = await axios.post(
            `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}`,
          data,
          );
          this.$router.push('/login')
        }
        catch(err) {
          console.log(err);
        }
      }
    }
}
</script>
<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  font-family: 'Quantico', sans-serif, serif;
}
.background2 {
    margin: 0%;
    padding: 0%;
  overflow: auto;
  color: white;
  width: 100%;
  height: 100vh;
  background: var(--backgroundColor2);
}

.header {
  margin-top: 2%;
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
.loginP {
    width: 90%;
    height: 75vh;
    margin-left: 5%;
    display: flex;
}
.left {
    width: 70%;
    background: var(--color-navy);
    padding:10%;
}
.leftTitle {
    font-family: 'recons';
    font-size: 32px;
}
.leftLogo {
    width: 80%;
}
.right {
    color: black;
    width: 30%;
    background: var(--color-white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 16px;
}
.rightWrapper {
    width: 80%;
    margin: 10%;
}
.userName {
    display: flex;
    flex-direction: column;
    margin-bottom: 5%;
}
.password {
    display: flex;
    flex-direction: column;
    margin-bottom: 5%;
}


.signIn {
    background: var(--color-navy);
    color: white;
    border-radius: 5%;
    width: 40%;
    height: 10%;
    margin-top: 2.5%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.noAccount {
    margin-top: 2.5%;
    display: flex;
    justify-content: end;
}

.noAccount a {
    color: black;
    text-decoration: none;
}
.checkAgree {
    display: flex;
    justify-content: center;
}
.checkAgree p{
    padding-left: 2%;
}

@media only screen and (max-width: 500px) {
  .left {
    display: none;
  }

  .right {
    color: black;
    width: 100%;
    background: var(--color-white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 16px;
}
.rightWrapper {
    width: 80%;
    margin: 10%;
}
.userName {
    display: flex;
    flex-direction: column;
    margin-bottom: 5%;
}
.password {
    display: flex;
    flex-direction: column;
    margin-bottom: 5%;
}


.signIn {
    background: var(--color-navy);
    color: white;
    border-radius: 5%;
    width: 40%;
    height: 10%;
    margin-top: 2.5%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.noAccount {
    margin-top: 2.5%;
    display: flex;
    justify-content: start;
}

.noAccount a {
    color: black;
    text-decoration: none;
}
.checkAgree {
    display: flex;
    justify-content: center;
}
.checkAgree p{
    padding-left: 2%;
}
}

@media only screen and (min-width: 500px) and (max-width:960px) {
  
  .left {
    display: none;
  }

  .right {
    color: black;
    width: 100%;
    background: var(--color-white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 24px;
}
.rightWrapper {
    width: 80%;
    margin: 10%;
}
.userName {
    display: flex;
    flex-direction: column;
    margin-bottom: 5%;
}
.password {
    display: flex;
    flex-direction: column;
    margin-bottom: 5%;
}


.signIn {
    background: var(--color-navy);
    color: white;
    border-radius: 5%;
    width: 40%;
    height: 10%;
    margin-top: 2.5%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.noAccount {
    margin-top: 2.5%;
    display: flex;
    justify-content: start;
}

.noAccount a {
    color: black;
    text-decoration: none;
}
.checkAgree {
    display: flex;
    justify-content: center;
}
.checkAgree p{
    padding-left: 2%;
}
}

</style>