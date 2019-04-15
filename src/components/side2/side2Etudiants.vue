<template>
    <ul class="center-align">
        <li @click="clickside1Right('annuaire',$event)"><a class="waves-effect waves-teal btn-flat">Annuaire des Etudiants</a></li>
        <li @click="clickside1Right('annuaire',$event)"><a class="waves-effect waves-teal btn-flat">Inscription</a></li>
        <li @click="clickside1Right('annuaire',$event)"><a class="waves-effect waves-teal btn-flat">Présence desnEtudiants</a></li>
        <li @click="clickside1Right('annuaire',$event)"><a class="waves-effect waves-teal btn-flat">Parcours Scolaire</a></li>
        <li @click="clickside1Right('annuaire',$event)"><a class="waves-effect waves-teal btn-flat">Gestion des stages</a></li>
    </ul>
</template>
<script>
    export default {
        name: 'side2etudiants',
        methods: {
            clickside1Right(data, event) {
                this.$emit('mon_fils_1', data);
                if (event.target.tagName == "A") {
                    event.target.classList.add("borderYellRight");
                } else {
                    event.target.parentElement.classList.add("borderYellRight");
                }
                // console.log(event.target);
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