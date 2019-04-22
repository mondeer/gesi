<template>
    <ul class="center-align">
        <li @click="clickside2({side2: 'annuaireProfs',data: 'P01'},$event)" ref="P01" class="waves-effect waves-teal">Annuaire des Professeurs</li>
        <li @click="clickside2({side2: 'evaluationProfs',data: 'P02'},$event)" ref="P02" class="waves-effect waves-teal">Evaluation des Professeurs</li>
    </ul>
</template>
<script>
    export default {
        name: 'side2professeurs',
        data : function(){
            return{
                ancienRef : 'P01'
            }
        },
        mounted(){
            // this.$refs['P01'].classList.add("BackgroundGris");
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