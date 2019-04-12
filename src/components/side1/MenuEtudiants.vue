<template>
    <div class="page container">
        <md-tabs class="md-primary" md-alignment="centered">
            <md-tab id="tab-annuaire" md-label="Annuaire Etudiants" @click="changeContent('annuaire')"></md-tab>
            <md-tab id="tab-emploi" md-label="Inscription" @click="changeContent('inscription')"></md-tab>
            <md-tab id="tab-evaluation" md-label="Presences" @click="changeContent('presences')"></md-tab>
            <md-tab id="tab-parcours" md-label="Parcours scolaire" @click="changeContent('parcours')"></md-tab>
            <md-tab id="tab-stage" md-label="Gestion des stages" @click="changeContent('stages')"></md-tab>
        </md-tabs>
        <div id="content">
            <keep-alive>
                <component v-bind:is="makeContent()"></component>
            </keep-alive>
        </div>
    </div>
</template>
<script>
    import annuaire from  './maincontent/annuaire.vue'
    import parcours from  './maincontent/parcours.vue'
    import stages from    './maincontent/stages.vue'
    import presences from './maincontent/presences.vue'
    import inscription from './maincontent/inscription.vue'

    export default {
        name: "MenuEtudiants",
        components: {
            presences,
            annuaire,
            stages,
            parcours,
            inscription
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
                this.content = data;
            }
        }
    }
</script>
<style>

</style>