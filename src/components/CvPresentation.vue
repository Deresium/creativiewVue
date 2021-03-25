<template>
    <div>
        <p class="mainWord">Hello !</p>
        <p>{{ $t("aboutMeMessages.p1") }}</p>
        <p>
            {{ $t("aboutMeMessages.p2") }}
            <router-link to="/contact">{{ $t("aboutMeMessages.pcontact") }}</router-link>
            {{ $t("aboutMeMessages.p2end") }}
        </p>
        <p>{{ $t("aboutMeMessages.p3") }}</p>
        <p>{{ $t("aboutMeMessages.p4") }}</p>
        <p>
            {{ $t("aboutMeMessages.p5") }}
            <router-link to="/contact">{{ $t("aboutMeMessages.pcontact2") }}</router-link>
            {{ $t("aboutMeMessages.p5end") }}
        </p>
        <p>{{ $t("aboutMeMessages.p6") }}</p>
        <p>
            {{ $t("aboutMeMessages.p7") }}
            <router-link to="/contact">{{ $t("aboutMeMessages.p7contact") }}</router-link>
            {{ $t("aboutMeMessages.p7end") }}
        </p>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CvAboutMe extends Vue{
}
</script>

<style scoped>
.mainWord{
    color: #005082;
    font-size: 50px;
    font-family: 'Anton', sans-serif;
}

p{
    margin-bottom: 2vh;
}

a{
    text-decoration: none;
    color: #005082;
    font-weight: bolder;
}

.slideLeft-enter-active{
    animation: slideLeft 0.3s forwards;
}

.slideLeft-leave-active{
    animation: slideLeft 0.3s forwards;
}

@keyframes slideLeft {
    from{
        left: -100px
    }
    to{
        left: 0;
    }
}

@keyframes slideLeft {
    from{
        left: 0;
    }
    to{
        left: -100px;
    }
}
</style>