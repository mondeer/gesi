<template>
    <div>
        <v-btn flat block @click="clickside2({side2: 'annuaireCours',data: 'C01'},$event)" ref="C01">Annuaire
            des Cours</v-btn>
        <v-btn flat block @click="clickside2({side2: 'emploiTemps',data: 'C02'},$event)" ref="C02">Emploi du
            temps</v-btn>
        <v-btn flat block @click="clickside2({side2: 'evaluationEtudiants',data: 'C03'},$event)" ref="C03">
            Evaluation des Etudiants</v-btn>
    </div>
</template>
<script>
    export default {
        name: 'side2cours',
        data: function () {
            return {
                ancienRef: "C01"
            }
        },
        mounted() {
            this.$refs['C01'].classList.add("BackgroundGris");
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

    v-btn {
        padding: 8px;
        width: 100%;
    }

    .BackgroundGris {
        background-color: rgb(214, 232, 238);
        color: #02457A;
    }
</style>