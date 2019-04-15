<template>
    <ul class="center-align">
        <li @click="clickside2('fraisScolaire',$event)"><a class="waves-effect waves-teal btn-flat">Frais de scolarité</a></li>
        <li @click="clickside2('gestionLocaux',$event)"><a class="waves-effect waves-teal btn-flat">Gestion des Locaux</a></li>
        <li @click="clickside2('gestionMaterial',$event)"><a class="waves-effect waves-teal btn-flat">Gestion du Materiel</a></li>
        <li @click="clickside2('gestionPaye',$event)"><a class="waves-effect waves-teal btn-flat">Gestion de la Paye</a></li>
        <li @click="clickside2('gestionBibliotheque',$event)"><a class="waves-effect waves-teal btn-flat">Gestion Bibliotheque</a></li>
        <li @click="clickside2('gestionDepenses',$event)"><a class="waves-effect waves-teal btn-flat">Gestion des Dépenses</a></li>
    </ul>
</template>
<script>
    export default {
        name: 'side2gestion',
        methods: {
            makeBorderRight() {

            },
            clickside2() {
                this.$emit('setmaincontent', data);
            }
        }
    }
</script>
<style>

</style>