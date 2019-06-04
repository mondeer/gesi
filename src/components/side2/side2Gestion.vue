<template>
    <div>
        <v-btn @click="clickside2({side2: 'fraisScolaire',data: 'G01'},$event)" ref="G01"
            class="waves-effect waves-teal ">Frais de scolarité</v-btn>
        <v-btn @click="clickside2({side2: 'gestionLocaux',data: 'G02'},$event)" ref="G02"
            class="waves-effect waves-teal ">Gestion des Locaux</v-btn>
        <v-btn @click="clickside2({side2: 'gestionMateriel',data: 'G03'},$event)" ref="G03"
            class="waves-effect waves-teal">Gestion du Materiel</v-btn>
        <v-btn @click="clickside2({side2: 'gestionPaye',data: 'G04'},$event)" ref="G04"
            class="waves-effect waves-teal">Gestion de la Paye</v-btn>
        <v-btn @click="clickside2({side2: 'gestionBibliotheque',data: 'G05'},$event)" ref="G05"
            class="waves-effect waves-teal">Gestion Bibliotheque</v-btn>
        <v-btn @click="clickside2({side2: 'gestionDepenses',data: 'G06'},$event)" ref="G06"
            class="waves-effect waves-teal">Gestion des Dépenses</v-btn>
    </div>
</template>
<script>
    export default {
        name: 'side2gestion',
        data: function () {
            return {
                ancienRef: 'G01'
            }
        },
        mounted() {
            // this.$refs['G01'].classList.add("BackgroundGris");
        },
        methods: {
            clickside2(data, event) {
                this.makeBackgroundGris(event, data.data);
                this.$emit('setmaincontent', data.side2);
            },
            makeBackgroundGris(event, data) {
                this.$refs[this.ancienRef].classList.remove("BackgroundGris");
                this.$refs[data].classList.add("BackgroundGris");
                this.ancienRef = data;
            }
        }
    }
</script>
<style scoped>
    div {
        text-transform: uppercase;
        color: white;
        width: 100%;
    }

    div v-btn.waves-effect {
        padding: 8px;
        width: 100%;
    }

    .BackgroundGris {
        background-color: rgb(214, 232, 238);
        color: #02457A;
    }
</style>