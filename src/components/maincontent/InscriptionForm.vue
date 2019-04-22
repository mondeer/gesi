<template>
    <div>
        Formulaire d'Inscription
    </div>
</template>

<script>
    import {
        validationMixin
    } from 'vuelidate'
    import {
        required,
        email,
        minLength,
        maxLength
    } from 'vuelidate/lib/validators'

    export default {
        name: 'InscriptionForm',
        mixins: [validationMixin],
        data: () => ({

        }),
        validations: {

        },
        methods: {

        }
    }
</script>

<style scoped>

</style>