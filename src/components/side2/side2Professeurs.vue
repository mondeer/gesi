<template>
    <div>
        <v-btn flat @click="clickside2({side2: 'annuaireProfs',data: 'P01'},$event)" ref="P01"
            class="waves-effect waves-teal">Annuaire des Professeurs</v-btn>
        <v-btn flat @click="clickside2({side2: 'evaluationProfs',data: 'P02'},$event)" ref="P02"
            class="waves-effect waves-teal">Evaluation des Professeurs</v-btn>
    </div>
</template>
<script>
    export default {
        name: 'side2professeurs',
        data: function () {
            return {
                ancienRef: 'P01'
            }
        },
        mounted() {
            // this.$refs['P01'].classList.add("BackgroundGris");
        },
        methods: {
            clickside2(data, event) {
                this.makeBackgroundGris(event, data.data);
                this.$emit('setmaincontent', data.side2);
            },
            makeBackgroundGris(event, data) {

                this.$refs[this.ancienRef].classList.remove("BackgroundGris");
                this.$refs[data].classList.add("BackgroundGris");
                this.ancienRef = data;


            }
        }
    }
</script>
<style scoped>
    div {
        text-transform: uppercase;
        color: white;
        width: 100%;
    }

    v-btn {
        padding: 8px;
        width: 100%;
    }

    .BackgroundGris {
        background-color: rgb(214, 232, 238);
        color: #02457A;
    }
</style>