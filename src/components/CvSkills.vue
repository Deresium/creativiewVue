<template>
    <div>
        <div class="twoSection">
            <section>
                <img class="heartbeat" src="../assets/Node.js_logo.svg" alt="img logo node">
                <div class="txt">
                    <h2>BACK-END</h2>
                    <div class="txtSkill">
                        <p>Node.js & Express framework</p>
                        <p>Java</p>
                        <p>RESTful API</p>
                    </div>
                </div>
            </section>
            <section>
                <div class="txt">
                    <h2>FRONT-END</h2>
                    <div class="txtSkill">
                        <p>Vue 2 & 3</p>
                        <p>Typescript</p>
                        <p>HTML & CSS</p>
                    </div>
                </div>
                <img class="heartbeat" src="../assets/Vue.js_Logo.svg" alt="img logo vue">
            </section>
        </div>

        <div class="twoSection">
            <section>
                <img class="heartbeat postgres" src="../assets/Postgresql_elephant.svg" alt="img logo postgres">
                <div class="txt">
                    <h2>DATABASE</h2>
                    <div class="txtSkill">
                        <p>SQL & NoSQL</p>
                        <p>ACID</p>
                        <p>Normalization</p>
                        <p>ORM (Sequelize - JPA - Mongoose)</p>
                    </div>
                </div>
            </section>
            <section>
                <div class="txt">
                    <h2>SECURITY</h2>
                    <div class="txtSkill">
                        <p>SQL & NoSQL Injections</p>
                        <p>TLS protocol</p>
                        <p>JWT</p>
                        <p>XSS & CSRF Attacks</p>
                        <p>Google Sign In</p>
                        <p>Google Recaptcha</p>
                        <p>2FA Authentication</p>
                        <p>Random Salted Password</p>
                        <p>Browser Fingerprint</p>
                    </div>
                </div>
                <img class="heartbeat security" src="../assets/icons/verified.svg" alt="img logo security">
            </section>
        </div>
        <div class="twoSection">
            <section>
                <img class="heartbeat security" src="../assets/icons/coding.svg" alt="img logo code">
                <div class="txt">
                    <h2>CODING & Analysis</h2>
                    <div class="txtSkill">
                        <p>OOP</p>
                        <p>Design Patterns</p>
                        <p>Unit Testing</p>
                        <p>Algorithms & Data Structures</p>
                        <p>Merise & UML</p>
                    </div>
                </div>
            </section>
            <section>
                <div class="txt">
                    <h2>DESIGN</h2>
                    <div class="txtSkill">
                        <p>Mockups</p>
                        <p>Adobe XD</p>
                        <p>Photoshop</p>
                    </div>
                </div>
                <img class="heartbeat security" src="../assets/Adobe_XD.svg" alt="img logo adobe">
            </section>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CvAboutMe extends Vue{
}
</script>

<style scoped>
h2{
    font-family: 'Anton',serif;
    color: #005082;
    margin-bottom: 10px;
}

.txt{
    padding-left: 15px;
    padding-right: 15px;
}

.txtSkill p{
    margin-bottom: 10px;
    color: #005082;
}

img{
    height: 80px;
}

img.postgres{
    height: 120px;
}

img.security{
    height: 100px;
}

section{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 50px;
    width: 100%;
}

.skill{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.heartbeat{
    animation: heartbeat 3s infinite alternate;
}

@keyframes heartbeat {
    to{
        transform: scale(.90, .90);
    }
}

@media(min-width: 1400px){
    section{
        justify-content: space-between;
        width: 45%;
    }

    .txt{
        width: 60%;
    }

    .twoSection{
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
    }

    img{
        height: auto;
        width: 30%
    }
}


</style>