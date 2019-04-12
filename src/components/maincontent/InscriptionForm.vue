<template>
    <div>
        <form novalidate class="md-layout" @submit.prevent="validateUser">
            <md-card class="md-layout-item md-size-50 md-small-size-100">
                <md-card-header>
                    <div class="md-title">Identité</div>
                </md-card-header>

                <md-card-content>
                    <div class="md-layout md-gutter">
                        <div class="md-layout-item md-small-size-100">
                            <md-field :class="getValidationClass('nom')">
                                <label for="first-name">Nom</label>
                                <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.nom"
                                    :disabled="sending" />
                                <span class="md-error" v-if="!$v.form.nom.required">Le nom est obligatoire</span>
                                <span class="md-error" v-else-if="!$v.form.nom.minlength">Le nom est invalide</span>
                            </md-field>
                        </div>

                        <div class="md-layout-item md-small-size-100">
                            <md-field :class="getValidationClass('postnom')">
                                <label for="last-name">Post nom</label>
                                <md-input name="last-name" id="last-name" autocomplete="family-name" v-model="form.postnom"
                                    :disabled="sending" />
                                <span class="md-error" v-if="!$v.form.postnom.required">Le post nom est obligatoire</span>
                                <span class="md-error" v-else-if="!$v.form.postnom.minlength">Post nom invalide</span>
                            </md-field>
                        </div>
                    </div>

                    <div class="md-layout md-gutter">
                        <div class="md-layout-item md-small-size-100">
                            <md-field :class="getValidationClass('genre')">
                                <label for="genre">Genre</label>
                                <md-select name="genre" id="genre" v-model="form.genre" md-dense :disabled="sending">
                                    <md-option></md-option>
                                    <md-option value="M">M</md-option>
                                    <md-option value="F">F</md-option>
                                </md-select>
                                <span class="md-error">le genre est obligatoire</span>
                            </md-field>
                        </div>

                        <div class="md-layout-item md-small-size-100">
                            <md-datepicker v-model="selectedDate">
                                <label>Date de naissance</label>
                            </md-datepicker>
                        </div>
                    </div>

                    <md-field :class="getValidationClass('email')">
                        <label for="email">Email</label>
                        <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email"
                            :disabled="sending" />
                        <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
                        <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
                    </md-field>
                </md-card-content>

                <md-progress-bar md-mode="indeterminate" v-if="sending" />

                <md-card-actions>
                    <md-button type="submit" class="md-primary" :disabled="sending">ENREGISTRER</md-button>
                </md-card-actions>
            </md-card>

            <md-snackbar :md-active.sync="userSaved">The user {{ lastUser }} was saved with success!</md-snackbar>
        </form>
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
            form: {
                nom: null,
                postnom: null,
                genre: null,
                dateNaissance: null,
                email: null,
            },
            userSaved: false,
            sending: false,
            lastUser: null
        }),
        validations: {
            form: {
                nom: {
                    required,
                    minLength: minLength(3)
                },
                postnom: {
                    required,
                    minLength: minLength(3)
                },
                age: {
                    required,
                    maxLength: maxLength(3)
                },
                genre: {
                    required
                },
                email: {
                    required,
                    email
                }
            }
        },
        methods: {
            getValidationClass(fieldName) {
                const field = this.$v.form[fieldName]

                if (field) {
                    return {
                        'md-invalid': field.$invalid && field.$dirty
                    }
                }
            },
            clearForm() {
                this.$v.$reset()
                this.form.nom = null
                this.form.postnom = null
                this.form.age = null
                this.form.genre = null
                this.form.email = null
            },
            saveUser() {
                this.sending = true

                // Instead of this timeout, here you can call your API
                window.setTimeout(() => {
                    this.lastUser = `${this.form.nom} ${this.form.postnom}`
                    this.userSaved = true
                    this.sending = false
                    this.clearForm()
                }, 1500)
            },
            validateUser() {
                this.$v.$touch()

                if (!this.$v.$invalid) {
                    this.saveUser()
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .md-progress-bar {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
    }
</style>