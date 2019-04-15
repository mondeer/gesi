<template>
    <ul class="center-align">
        <li @click="clickside2('annuaireProfs',$event)"><a class="waves-effect waves-teal btn-flat">Annuaire des
                Professeurs</a></li>
        <li @click="clickside2('evaluationProfs',$event)"><a class="waves-effect waves-teal btn-flat">Evaluation des
                Professeurs</a></li>
    </ul>
</template>
<script>
    export default {
        name: 'side2professeurs',
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