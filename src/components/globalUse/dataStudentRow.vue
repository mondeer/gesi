<template>
    <div class="content">
        <span class="left">Nom </span>
        <span class="left">PreNom </span>
        <span class="center-align">PostNom </span>
        <span class="right">Niveau </span>
        <span class="right">Etat </span>
    </div>
</template>

<script>
    export default {
        name: 'datastudentrow',
        props: {
            nom: String,
            prenom: String,
            postnom: String,
            niveau: String,
            statut: String,
        }
    }
</script>

<style>

</style>