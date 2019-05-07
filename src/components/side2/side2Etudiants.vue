<template>
    <ul class="center-align">
        <li @click="clickside2({side2: 'annuaire',data: 'E01'},$event)" ref="E01" class="waves-effect waves-teal">Annuaire des Etudiants</li>
        <li @click="clickside2({side2: 'inscriptionForm',data: 'E02'},$event)" ref="E02" class="waves-effect waves-teal">Inscription</li>
        <li @click="clickside2({side2: 'presences',data: 'E03'},$event)" ref="E03" class="waves-effect waves-teal ">Présence des Etudiants</li>
        <li @click="clickside2({side2: 'parcours',data: 'E04'},$event)" ref="E04" class="waves-effect waves-teal ">Parcours Scolaire</li>
        <li @click="clickside2({side2: 'stages',data: 'E05'},$event)" ref="E05" class="waves-effect waves-teal ">Gestion des stages</li>
    </ul>
</template>
<script>
    export default {
        name: 'side2etudiants',
        data : function(){
            return{
                ancienRef : "E01",
            }
        },
        mounted(){
            
        },
        methods: {
            clickside2(data, event) {
                this.makeBackgroundGris(event, data.data);
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
    .borderYellRight {
        border-right-color: #D6E8EE;
        border-right-width: 2px;
        border-right-style: solid;
    }
    ul{
        text-transform: uppercase;
        color: white;
        width: 100%;
    }
    ul li.waves-effect{
        padding : 8px;
        width: 100%;
    }
    .BackgroundGris{
         background-color: rgb(214, 232, 238);
         color:#02457A;
    }

</style>