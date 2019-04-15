<template>
    <ul class="center-align">
        <li @click="clickside2('annuaire',$event)"><a class="waves-effect waves-teal btn-flat">Annuaire des Etudiants</a></li>
        <li @click="clickside2('inscriptionForm',$event)"><a class="waves-effect waves-teal btn-flat">Inscription</a></li>
        <li @click="clickside2('presences',$event)"><a class="waves-effect waves-teal btn-flat">Présence desnEtudiants</a></li>
        <li @click="clickside2('parcours',$event)"><a class="waves-effect waves-teal btn-flat">Parcours Scolaire</a></li>
        <li @click="clickside2('stages',$event)"><a class="waves-effect waves-teal btn-flat">Gestion des stages</a></li>
    </ul>
</template>
<script>
    export default {
        name: 'side2etudiants',
        methods: {
            clickside2(data, event) {
                this.$emit('setmaincontent', data);
            },
            makeBorderRight() {

            }

        }
    }
</script>
<style>
    .borderYellRight {
        border-right-color: #D6E8EE;
        border-right-width: 2px;
        border-right-style: solid;
    }

    ul li a {
        color: white;
    }
</style>