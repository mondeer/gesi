<template>
    <v-app>
        <div class="page-container">
            <v-toolbar height="30px">
                <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
                <!-- <v-toolbar-title></v-toolbar-title> -->
                <v-spacer> </v-spacer>
                <v-toolbar-items class="hidden-sm-and-down">
                    <v-btn flat small @click="doAction('minimize')">
                        <v-icon>remove</v-icon>
                    </v-btn>
                    <v-btn flat small @click="doAction('maximize')">
                        <v-icon>web_asset</v-icon>
                    </v-btn>
                    <v-btn flat small color="error" @click="doAction('close')">
                        <v-icon>clear</v-icon>
                    </v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <div class="side1" id="side1" >
                <v-layout column align-center justify-start>
                    <v-btn flat color="white" block ref="etudiant"
                        @click="setContentSide2({side2: 'side2etudiants',data: 'etudiant'},$event)">
                        <v-icon>school</v-icon>
                    </v-btn>
                    <v-btn flat color="white" block ref="professeur"
                        @click="setContentSide2({side2: 'side2professeurs',data: 'professeurs'},$event)">
                        <v-icon>people</v-icon>
                    </v-btn>
                    <v-btn flat color="white" block ref="cours"
                        @click="setContentSide2({side2: 'side2cours',data: 'cours'},$event)">
                        <v-icon>library_books</v-icon>
                    </v-btn>
                    <v-btn flat color="white" block ref="gestion"
                        @click="setContentSide2({side2: 'side2gestion',data: 'gestion'},$event)">
                        <v-icon>person</v-icon>
                    </v-btn>
                </v-layout>
            </div>
            <div class="side2" id="side2">
                <v-layout column align-center justify-start>
                    <keep-alive>
                        <component v-bind:is="getContentSide2()" @setmaincontent="setMainContent"></component>
                    </keep-alive>
                </v-layout>
            </div>
            <div class="maincontent" id="maincontent">
                <keep-alive>
                    <component v-bind:is="getMainContent()"></component>
                </keep-alive>
            </div>
            <nav class="footer" id="footer"></nav>
        </div>
    </v-app>
</template>

<script>
    const {
        ipcRenderer
    } = require('electron')
    import side2etudiants from "./components/side2/side2Etudiants.vue"
    import side2professeurs from "./components/side2/side2Professeurs.vue"
    import side2cours from "./components/side2/side2Cours.vue"
    import side2gestion from "./components/side2/side2Gestion.vue"
    import annuaire from "./components/maincontent/annuaire.vue"
    import fraisScolaire from "./components/maincontent/fraisScolaire.vue"
    import gestionDepenses from "./components/maincontent/gestionDepenses.vue"
    import gestionLocaux from "./components/maincontent/gestionLocaux.vue"
    import gestionMateriel from "./components/maincontent/gestionMateriel.vue"
    import gestionBibliotheque from "./components/maincontent/gestionBibliotheque.vue"
    import gestionPaye from "./components/maincontent/gestionPaye.vue"
    import annuaireCours from "./components/maincontent/annuaireCours.vue"
    import emploiTemps from "./components/maincontent/emploiTemps.vue"
    import evaluationEtudiants from "./components/maincontent/evaluationEtudiants.vue"
    import evaluationProfs from "./components/maincontent/evaluationProfs.vue"
    import annuaireProfs from "./components/maincontent/annuaireProfs.vue"
    import presences from "./components/maincontent/presences.vue"
    import parcours from "./components/maincontent/parcours.vue"
    import stages from "./components/maincontent/stages.vue"
    import inscriptionForm from "./components/maincontent/InscriptionForm.vue"

    export default {
        name: 'App',
        components: {
            annuaire,
            annuaireCours,
            annuaireProfs,
            emploiTemps,
            evaluationEtudiants,
            evaluationProfs,
            fraisScolaire,
            gestionPaye,
            gestionLocaux,
            gestionMateriel,
            gestionDepenses,
            gestionBibliotheque,
            side2cours,
            side2etudiants,
            side2gestion,
            side2professeurs,
            inscriptionForm,
            presences,
            parcours,
            stages,
        },
        mounted() {

            //Juste une ligne d'essaye
            ipcRenderer.on('doAction', (event, arg) => {
                console.log("Render Process: " + arg);
            });
            // permet de mettre au debut le border en yellow
            this.$refs['etudiant'].classList.add("borderYell");
        },
        data: function () {
            return {
                menuVisible: false,
                maincontent: "annuaire",
                contentside2: "side2etudiants",
                ancienRef: 'etudiant',
            }
        },
        methods: {
            getContentSide2() {
                return this.contentside2;
            },
            getMainContent() {
                return this.maincontent;
            },
            setMainContent(data) {
                this.maincontent = data;
            },
            setContentSide2(data, event) {
                this.contentside2 = data.side2;
                this.makeBorderleftYellow(event, data.data);
            },
            makeBorderleftYellow(event, data) {
                if (this.ancienRef != data) {
                    this.$refs[this.ancienRef].classList.remove("borderYell");
                    this.$refs[data].classList.add("borderYell");
                    this.ancienRef = data;
                }

                event.target.classList.add("borderYell");
            },
            doAction(data) {
                ipcRenderer.send("doAction", data);
            }
        }
    }
</script>

<style lang="css" scoped>
    .v-btn {
        min-width: 45px;
    }

    .page-container {
        max-height: 728px;
        overflow-y: hidden;
    }

    nav .nav-wrapper i {
        height: 30px;
        line-height: 30px;
    }

    .footer {
        position: absolute;
        top: 708px;
        width: 100%;
        left: 0;
        height: 20px;
        background-color: rgb(51, 143, 219);
    }

    .borderYell {
        border-left-color: #ffff00;
        border-left-width: 2px;
        border-left-style: solid;
    }

    .brand {
        position: absolute;
        top: 0;
        left: 0;
        width: 50px;
        height: 100%;
        background-color: yellow;
    }

    .tete {
        height: 30px;
        background-color: white;
        box-shadow: none;
        color: black;
    }

    .tete li a {
        position: relative;
        height: 100% !important;
    }

    #side1 {
        height: 678px;
        width: 50px;
        position: absolute;
        z-index: 1;
        top: 30px;
        /* left: 0; */
        text-align: center;
        align-content: center;
        background-color: #001B48;
        overflow-x: hidden;
        padding-top: 40px;
        transition: 0.5s;
    }

    .side1 a {
        /* padding: 8px 8px 8px 32px; */
        text-decoration: none;
        /* font-size: 25px; */
        color: white;
        display: block;
        transition: 0.3s;
    }

    .side1 li {
        align-content: center;
        text-align: center;
    }

    .side1 a:hover {
        color: #f1f1f1;
    }

    .side2 {
        text-align: center;
        height: 678px;
        width: 250px;
        position: absolute;
        z-index: 1;
        top: 30px;
        left: 50px;
        background-color: #02457A;
        color: yellow;
        overflow-x: hidden;
        transition: 0.5s;
    }

    #side2 ul {
        width: 100%;
        color: white;
        vertical-align: center;
    }

    #side2 ul li {
        width: 100%;
    }

    .maincontent {
        transition: margin-left .5s;
        position: relative;
        width: 1066px;
        left: 300px;
        padding: 10px;
        height: 678px;
        align-content: center;
        background-color: #D6E8EE;
    }

    #side2>ul>li {
        color: white;
        width: 100%;
        display: block;

    }

    #brand2 {
        text-align: center;
        align-content: center;

    }

    .notif {
        width: 100%;
        height: 25px;
        background-color: rgba(255, 255, 255, 0.884);
        margin-bottom: 5px;
    }
</style>