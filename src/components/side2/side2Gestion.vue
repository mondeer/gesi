<template>
    <ul class="center-align">
        <li @click="makeBorderRight"><a class="waves-effect waves-teal btn-flat">Frais de scolarité</a></li>
        <li @click="makeBorderRight"><a class="waves-effect waves-teal btn-flat">Gestion des Locaux</a></li>
        <li @click="makeBorderRight"><a class="waves-effect waves-teal btn-flat">Gestion du Materiel</a></li>
        <li @click="makeBorderRight"><a class="waves-effect waves-teal btn-flat">Gestion de la Paye</a></li>
        <li @click="makeBorderRight"><a class="waves-effect waves-teal btn-flat">Gestion Bibliotheque</a></li>
        <li @click="makeBorderRight"><a class="waves-effect waves-teal btn-flat">Gestion des Dépenses</a></li>
    </ul>
</template>
<script>
    export default {
        name: 'side2gestion',
        methods: {
            makeBorderRight() {

            }
        }
    }
</script>
<style>

</style>