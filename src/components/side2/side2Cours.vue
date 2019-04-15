<template>
    <ul class="center-align">
        <li @click="clickside2('annuaireCours',$event)"><a class="waves-effect waves-teal btn-flat">Annuaire des Cours</a></li>
        <li @click="clickside2('emploiTemps',$event)"><a class="waves-effect waves-teal btn-flat">Emploi du temps</a></li>
        <li @click="clickside2('evaluationEtudiant',$event)"><a class="waves-effect waves-teal btn-flat">Evaluation des Etudiants</a></li>
    </ul>
</template>
<script>
export default {
    name: 'side2cours',
    methods :{
        makeBorderRight(){
            
        },
        clickside2(){
            this.$emit('setmaincontent', data);
        }

    }
}
</script>
<style>
    
</style>