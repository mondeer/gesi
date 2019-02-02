<template>
    <div class="page container">
        <md-tabs class="md-primary" md-alignment="centered">
            <md-tab id="tab-annuaire" md-label="Annuaire Etudiants" @click="changeContent('')"></md-tab>
            <md-tab id="tab-emploi" md-label="Inscription" @click="changeContent('Insc')"></md-tab>
            <md-tab id="tab-evaluation" md-label="Presences" @click="changeContent('')"></md-tab>
            <md-tab id="tab-parcours" md-label="Parcours scolaire" @click="changeContent('')"></md-tab>
            <md-tab id="tab-stage" md-label="Gestion des stages" @click="changeContent('')"></md-tab>
        </md-tabs>
        <div id="content">
            <keep-alive>
                <component v-bind:is="makeContent()"></component>
            </keep-alive>
        </div>
    </div>
</template>
<script>
    import CardReveal from './CardReveal.vue'
    import InscriptionForm from './InscriptionForm.vue'
    
    export default {
        name: "MenuEtudiants",
        components: {
            CardReveal,InscriptionForm
        },
        data: function () {
            return {
                content: ""
            }
        },
        methods: {
            makeContent() {
                return this.content;
            },
            changeContent(data) {
                if (data == 'Insc') {
                    this.content = 'InscriptionForm';
                }
            }
        }
    }
</script>
<style>

</style>