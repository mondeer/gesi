<template>
    <div class="page-container">
        <md-app class="app">
            <md-app-toolbar class="md-primary md-dense" md-elevation="3">
                <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
                    <md-icon>menu</md-icon>
                </md-button>
                <span class="md-title">GESI</span>
                
                <div class="md-toolbar-section-end">
                    <md-button class="md-icon-button md-flat" @click="getCompte">
                        <md-avatar>
                            <img src="~@/assets/man.png" alt="Avatar" class="md-small">
                        </md-avatar>
                    </md-button>

                    <md-button class="md-icon-button">
                        <md-icon>minimize</md-icon>
                    </md-button>
                    <md-button class="md-icon-button">
                        <md-icon>clear</md-icon>
                    </md-button>
                </div>
            </md-app-toolbar>

            <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini" class="drawer md-small">
                <md-toolbar class="md-transparent md-dense" md-elevation="0">
                    <span>Navigation</span>

                    <div class="md-toolbar-section-end">
                        <md-button class="md-icon-button md-dense" @click="toggleMenu">
                            <md-icon>keyboard_arrow_left</md-icon>
                        </md-button>
                    </div>
                </md-toolbar>

                <md-list>
                    <md-list-item @click="changeContent('MenuEtudiants')">
                        <md-icon>send</md-icon>
                        <span class="md-list-item-text">Etudiants</span>
                    </md-list-item>

                    <md-list-item @click="changeContent('MenuProfs')">
                        <md-icon>send</md-icon>
                        <span class="md-list-item-text">Professeurs</span>
                    </md-list-item>

                    <md-list-item @click="changeContent('MenuCours')">
                        <md-icon>delete</md-icon>
                        <span class="md-list-item-text">Cours</span>
                    </md-list-item>

                    <md-list-item @click="changeContent('MenuGestion')">
                        <md-icon>error</md-icon>
                        <span class="md-list-item-text">Gestion</span>
                    </md-list-item>
                </md-list>
            </md-app-drawer>

            <md-app-content>
                <keep-alive>
                    <component v-bind:is="makeContent()"></component>
                </keep-alive>
            </md-app-content>
        </md-app>
    </div>
</template>

<script>
    import MenuCours from './components/MenuCours.vue'
    import MenuEtudiants from './components/MenuEtudiants.vue'
    import MenuProfs from './components/MenuProfs.vue'
    import MenuGestion from './components/MenuGestion.vue'

    export default {
        name: 'App',
        components: {
            MenuProfs,
            MenuEtudiants,
            MenuCours,
            MenuGestion
        },
        data: function () {
            return {
                menuVisible: false,
                content: "MenuEtudiants"
            }
        },
        methods: {
            toggleMenu() {
                this.menuVisible = !this.menuVisible
            },
            getCompte() {

            },
            changeContent(data) {
                this.content = data
            },
            makeContent() {
                return this.content;
            }
        }
    }
</script>

<style lang="css" scoped>
    .drawer {
        widows: 100px;
    }

    .app {
        height: 725px;
    }
</style>