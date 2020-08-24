<template>
    <div>
        <h3>{{ $t('needWebsiteMessages.whyWebsite') }}</h3>
        <div class="cardList">
            <div class="card">
                <h4>{{ $t("needWebsiteMessages.visibility") }}</h4>
                <img src="../../assets/icons/world.svg" alt="world icon"/>
            </div>
            <div class="card">
                <h4>{{ $t("needWebsiteMessages.eShop") }}</h4>
                <img src="../../assets/icons/shopping_basket.svg" alt="shopping basket icon"/>
            </div>
            <div class="card">
                <h4>{{ $t("needWebsiteMessages.automation") }}</h4>
                <img src="../../assets/icons/cached.svg" alt="cached icon"/>
            </div>
            <div class="card">
                <h4>{{ $t("needWebsiteMessages.facility") }}</h4>
                <img src="../../assets/icons/thumb_up.svg" alt="thumb_up icon"/>
            </div>
            <div class="card">
                <h4>{{ $t("needWebsiteMessages.timeSaver") }}</h4>
                <img src="../../assets/icons/schedule.svg" alt="schedule icon"/>
            </div>
            <div class="card">
                <h4>{{ $t("needWebsiteMessages.paperless") }}</h4>
                <img src="../../assets/icons/nature.svg" alt="nature icon"/>
            </div>
        </div>
        <h3>{{ $t("needWebsiteMessages.price") }}</h3>
        <section class="explainAsbl">
            <p>{{ $t("needWebsiteMessages.asbl") }}</p>
            <p>{{ $t("needWebsiteMessages.includePrice1") }}</p>
            <p>{{ $t("needWebsiteMessages.includePrice2") }}</p>
        </section>
        <div class="completeForm">
            <form class="formPrice" novalidate="novalidate">
                <h4>{{ $t("needWebsiteMessages.pageNumber")  }}</h4>
                <label>
                    <input type="radio" name="nbPage" value="500" v-model.number="nbPage"/>
                    <span class="libtxt">1 - 5 pages - 500€</span>
                </label>
                <label>
                    <input type="radio" name="nbPage" value="800" v-model.number="nbPage"/>
                    <span class="libtxt">6 - 10 pages - 800€</span>
                </label>
                <label>
                    <input type="radio" name="nbPage" value="1200" v-model.number="nbPage"/>
                    <span class="libtxt">+10 pages - 1200€</span>
                </label>
                <label class="spaceLabel">
                    <input type="checkbox" name="contact" v-model="contact"/>
                    <span class="checkBox">
                        <img src="../../assets/icons/done.svg" alt="done icon"/>
                    </span>
                    <span class="libtxt">{{ $t('needWebsiteMessages.contactForm') }} - 200€</span>
                </label>
                <h4>{{ $t('needWebsiteMessages.ecommerce') }}</h4>
                <label>
                    <input type="checkbox" name="connection" v-model="connection"/>
                    <span class="checkBox">
                        <img src="../../assets/icons/done.svg" alt="done icon"/>
                    </span>
                    <span class="libtxt">{{ $t('needWebsiteMessages.connection') }} - 300€</span>
                </label>
                <label>
                    <input type="checkbox" name="payment" v-model="payment"/>
                    <span class="checkBox">
                        <img src="../../assets/icons/done.svg" alt="done icon"/>
                    </span>
                    <span class="libtxt">{{ $t('needWebsiteMessages.payment') }} - 500€</span>
                </label>
                <label>
                    <input type="checkbox" name="bundle" v-model="bundle"/>
                    <span class="checkBox">
                        <img src="../../assets/icons/done.svg" alt="done icon"/>
                    </span>
                    <span class="libtxt">{{ $t('needWebsiteMessages.ecomBundle') }} - 1000€</span>
                </label>
            </form>
            <div class="total">
                <h4>Total</h4>
                <p>{{ total }}€</p>
                <router-link class="btnContact" to="/contact">{{ $t('needWebsiteMessages.contact') }}</router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CvBenefits extends Vue{
    nbPage = 800;
    contact = true;
    connection = false;
    payment = false;
    bundle = false;

    get total(): number{
        let total = this.nbPage;
        if(this.contact)
            total += 200;
        if(this.connection)
            total += 300
        if(this.payment)
            total += 500;
        if(this.bundle)
            total += 1000;
        return total;
    }
}
</script>

<style scoped>
    h3{
        display: inline-block;
        color: #005082;
        border-bottom: solid 2px #FFA41B;
        margin-bottom: 2vh;
        margin-top: 3vh;
        width: 100%;
    }

    .cardList{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .card{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #005082;
        width: 50%;
        margin-bottom: 2vh;
        padding: 1vh 5%;
        border-radius: 25px;
    }

    .card > h4{
        font-size: medium;
        color: white;
        text-align: center;
        margin-bottom: 1vh;
    }

    .card > img{
        width: 35%;
    }

    .explainAsbl{
        color: white;
        background-color: #005082;
        border-radius: 10px;
        padding: 1vh 2%;
        margin-bottom: 2vh;
    }

    .explainAsbl > p {
        margin-bottom: 1vh;
    }

    .formPrice{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .formPrice > h4{
        color: #005082;
        margin-bottom: 1vh;
    }

    .formPrice > label{
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
    }

    label > .libtxt{
        display: block;
        width: 100%;
        padding: 1vh 5%;
        border-radius: 10px;
    }

    .spaceLabel{
        margin-top: 2vh;
        margin-bottom: 4vh;
    }

    input[type=radio], input[type=checkbox]{
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    input[type=radio]:checked ~ span{
        background-color: #005082;
        color: white;
    }

    .checkBox{
        width: 3vh;
        height: 3vh;
        border: 1px solid #005082;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .checkBox > img{
        width: 100%;
        height: 100%;
        display: none;
    }

    input[type=checkbox]:checked ~ .checkBox > img{
        display: block;
    }

    .total{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        background-color: #005082;
        color: white;
        width: 80%;
        margin-left: 10%;
        margin-top: 3vh;
        margin-bottom: 3vh;
        padding-top: 2vh;
        padding-bottom: 2vh;
        border-radius: 25px;
    }

    .total > h4{
        margin-bottom: 1vh;
        font-size: large;
    }

    .total > p{
        width: 100%;
        text-align: center;
        margin-bottom: .5vh;
        font-size: x-large;
    }

    .btnContact{
        border: solid 1px #FFA41B;
        color: white;
        display: block;
        padding: 1vh 2%;
        border-radius: 10px;
        text-decoration: none;
        font-size: large;
    }

    @media(min-width: 900px){
        .cardList{
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
        }

        .card{
            width: 30%;
            padding: 1vh 2%;
        }

        .card > h4{
            font-size: large;
        }

        .card > img{
            width: 20%;
        }

        .completeForm{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 4vh;
        }

        .checkBox{
            width: 2vh;
            height: 2vh;
        }

        .formPrice{
            width: 70%;
        }

        .total{
            width: 20%;
        }
    }

</style>