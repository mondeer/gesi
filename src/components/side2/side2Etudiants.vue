<template>
    <div>
        <v-btn flat block @click="clickside2({side2: 'annuaire',data: 'E01'},$event)" ref="E01">
            Annuaire des Etudiants</v-btn>
        <v-btn flat block @click="clickside2({side2: 'inscriptionForm',data: 'E02'},$event)" ref="E02">Inscription</v-btn>
        <v-btn flat block @click="clickside2({side2: 'presences',data: 'E03'},$event)" ref="E03">
            Présence des Etudiants</v-btn>
        <v-btn flat block @click="clickside2({side2: 'parcours',data: 'E04'},$event)" ref="E04">
            Parcours Scolaire</v-btn>
        <v-btn flat block @click="clickside2({side2: 'stages',data: 'E05'},$event)" ref="E05">
            Gestion des stages</v-btn>

    </div>
</template>
<script>
    export default {
        name: 'side2etudiants',
        data: function () {
            return {
                ancienRef: "E01"
            }
        },
        mounted() {
            this.$refs['E01'].$el.classList.add("BackgroundGris");
        },
        methods: {
            clickside2(data, event) {
                this.makeBackgroundGris(event, data.data);
                this.$emit('setmaincontent', data.side2);
            },
            makeBackgroundGris(event, data) {

                this.$refs[this.ancienRef].$el.classList.remove("BackgroundGris");
                this.$refs[data].$el.classList.add("BackgroundGris");
                
                this.ancienRef = data;

            }

        }
    }
</script>
<style scoped>
    .borderYellRight {
        border-right-color: #D6E8EE;
        border-right-width: 2px;
        border-right-style: solid;
    }

    div {
        text-transform: uppercase;
        color: white;
        width: 100%;
    }

    v-btn {
        padding: 8px;
        width: 100%;
    }

    .BackgroundGris {
        background-color: rgb(214, 232, 238);
        color: #02457A;
    }
</style>