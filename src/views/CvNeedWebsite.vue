<template>
    <div class="mainPage">
      <div class="title">
        <h1>Simplifier votre prise de commandes</h1>
        <h2>Creatiview vous propose une prise de commandes rapide et sur mesure pour votre activité.</h2>
        <div class="subtitle">
          <p class="blue">Arrêtez les coups de téléphone, SMS, e-mails, messenger, ... chronophages et qui engendrent des oublis et des commandes erronées. Rassemblez vos commandes dans un système de gestion simple et redirigez vos clients vers votre boutique en ligne.</p>
        </div>
      </div>
      <a class="downloadPdf" :href="pathToPdf" target="_blank" download="Creatiview - Commandes & Eshop">Télécharger le PDF</a>

      <div class="presentation left">
        <div class="text">
          <h3>Une page d’accueil pour exposer votre activité et mettre en avant vos produits phares.</h3>
          <p>Nous élaborons ensemble un design de page d’accueil afin d’attirer les clients vers votre boutique en ligne.</p>
        </div>
        <img class="picture" src="../assets/Home.png" alt="home page"/>
      </div>

      <div class="presentation right">
        <div class="text">
          <h3>Une boutique sobre et simple d’utilisation</h3>
          <p>Vous disposez d’une boutique en ligne reprenant l’ensemble de vos produits. Selon vos préférences, nous pouvons élaborer des filtres cohérents avec votre activité afin que les clients s’y retrouvent facilement.</p>
        </div>
        <img class="picture" src="../assets/Boutique.png" alt="boutique page"/>
      </div>

      <div class="presentation left">
        <div class="text">
          <h3>Une commande passée en toute simplicité</h3>
          <p>Une fois leur panier complet, vos clients passent commande et décident s' ils souhaitent retirer sur place ou être livré. Selon votre souhait, un système de paiement par Bancontact peut être ajouté à votre boutique.</p>
          <p>Pour ne pas devoir réaliser l'encodage de leurs coordonnées à chaque commande, vos clients peuvent se créer un compte sur votre site.</p>
        </div>
        <img class="picture" src="../assets/Basket.png" alt="basket page"/>
      </div>

      <div class="presentation right">
        <div class="text">
          <h3>Un système de commandes centralisé</h3>
          <p>Toutes les commandes de vos clients sont centralisées dans votre interface d’administration. Vous avez la possibilité de faire ce que vous souhaitez avec ces commandes:</p>
          <p>➤ Un client vous sonne car il souhaite ajouter un article à sa commande? Modifier celle-ci en quelques clics.</p>
          <p>➤ Un client souhaite annuler sa commande? Vous pouvez la supprimer sans problème.</p>
          <p>➤ Un client préfère passer sa commande par téléphone? Ajouter la commande et ses produits en toute simplicité.</p>
          <p>Vous disposez d’une vue immédiate de toutes vos commandes à préparer ou à livrer.</p>
        </div>
        <img class="picture" src="../assets/commands.png" alt="commands page"/>
      </div>

      <div class="presentation left">
        <div class="text">
          <h3>Une gestion d’articles infinie</h3>
          <p>Vous n’avez aucune limite dans le nombre de produits que vous souhaitez proposer à vos clients.</p>
          <p>Donnez un nom, un descriptif, un prix, quelques photos et ajoutez le produit à votre boutique. Vous pouvez le modifier à tout moment tout en conservant l’historique des prix.</p>
        </div>
        <img class="picture" src="../assets/listesarticles.png" alt="liste articles"/>
      </div>

      <div class="presentation right">
        <div class="text">
          <h3>Une page de présentation et de contact</h3>
          <p>En plus de la boutique, profitez d’un espace pour décrire en détails votre société et ce que vous proposez. </p>
          <p>Selon les textes et les photos que vous souhaitez inclure, nous élaborons ensemble un design pour que votre contenu soit agréable à consulter aussi bien sur PC que sur smartphone.</p>
          <p>Enfin, profitez d’une page de contact via laquelle vos clients peuvent vous contacter grâce à un formulaire classique.</p>
        </div>
        <img class="picture" src="../assets/contact.png" alt="contact page"/>
      </div>

      <div class="end">
        <p class="big">Si vous souhaitez que Creatiview vous accompagne dans votre digitalisation, cette offre est au prix de <span class="orange">1500€</span> ou en location à <span class="orange">50€ / mois</span>*.</p>
        <p class="medium">Un montant de 15€* / mois est à prévoir pour l'hébergement du site web.</p>
        <router-link class="contactMe" to="/contact">Contactez-moi</router-link>
        <p class="little">*Petite entreprise soumise au régime de la franchise de TVA - TVA non applicable.</p>
      </div>

    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class CvNeedWebsite extends Vue {
      get pathToPdf(){
        return `${process.env.BASE_URL}commands.pdf#zoom=100`;
      }

    }
</script>

<style scoped>
.mainPage{
  margin-top: 30px;
}

h1, h2, h3{
  font-family: 'Anton', sans-serif;
}

h1{
  font-size: x-large;
  font-weight: normal;
}

h1, h3, p{
  color: #005082;
}

p{
  margin-bottom: 10px;
}

h2{
  color: #FFA41B;
  font-size: large;
  font-weight: normal;
}

h3{
  margin-bottom: 10px;
  font-weight: normal;
}

.blue{
  color: #005082;
}

.presentation{
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 50px;
}

.picture{
  width: 100%;
  border: 1px solid #FFA41B;
}

.text{
  width: 100%;
}

.big{
  font-family: 'Anton', sans-serif;
}

.medium{
  font-family: 'Anton', sans-serif;
  font-size: smaller;
}

.orange{
  font-family: 'Anton', sans-serif;
  color: #FFA41B;
}

.contactMe{
  display: inline-block;
  text-decoration: none;
  color:#005082;
  border: 1px solid #005082;
  padding: 10px;
  margin-bottom: 20px;
}

.little{
  font-size: small;
}

.downloadPdf{
  display: inline-block;
  border: solid 1px #005082;
  text-decoration: none;
  color: #005082;
  padding: 10px;
}

@media (min-width: 900px) {
  h1{
    font-size: xx-large;
  }

  h2{
    font-size: x-large;
  }

  .big{
    font-size: larger;
  }

  .presentation{
    justify-content: space-between;
    align-items: center;
  }

  .left{
    flex-direction: row;
  }

  .right{
    flex-direction: row-reverse;
  }
  .picture{
    width: 50%;
  }

  .text{
    width: 45%;
  }
}

</style>