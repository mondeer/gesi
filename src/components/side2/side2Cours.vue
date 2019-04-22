<template>
    <ul class="center-align">
        <li @click="clickside2({side2: 'annuaireCours',data: 'C01'},$event)" ref="C01" class="waves-effect">Annuaire des Cours</li>
        <li @click="clickside2({side2: 'emploiTemps',data: 'C02'},$event)" ref="C02" class="waves-effect">Emploi du temps</li>
        <li @click="clickside2({side2: 'evaluationEtudiants',data: 'C03'},$event)" ref="C03" class="waves-effect ">Evaluation des Etudiants</li>
    </ul>
</template>
<script>
    export default {
        name: 'side2cours',
        data : function(){
            return{
                ancienRef : "C01"
            }
        },
        mounted(){
            // this.$refs['C01'].classList.add("BackgroundGris");
        },
        methods: {
            clickside2(data, event) {
                this.makeBackgroundGris(event,data.data);
                this.$emit('setmaincontent', data.side2);
            },
            makeBackgroundGris(event,data) {
                    this.$refs[this.ancienRef].classList.remove("BackgroundGris");
                    this.$refs[data].classList.add("BackgroundGris");
                    this.ancienRef = data;
            }

        }
    }
</script>
<style scoped>
    ul {
        text-transform: uppercase;
        color: white;
        width: 100%;
    }

    ul li.waves-effect {
        padding: 8px;
        width: 100%;
    }
    .BackgroundGris{
        background-color: rgb(214, 232, 238);
        color:#02457A;
    }
</style>