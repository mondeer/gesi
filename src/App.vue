<template>
    <v-app>
            <nav class="tete" id="tete">
                <div class="nav-wrapper">
                    <div class="brand"><i class="material-icons center-align">add</i></div>
                    <div class="waves-effect waves-teal btn-flat right" id="brand2" @click="doAction('close')"><i
                            class="material-icons center-align tiny">close</i></div>
                    <div class="waves-effect waves-teal btn-flat right" id="brand3" @click="doAction('maximize')"><i
                            class="material-icons center-align tiny">remove</i></div>
                    <div class="waves-effect waves-teal btn-flat right" id="brand4" @click="doAction('minimize')"><i
                            class="material-icons center-align tiny">add</i></div>
                </div>
            </nav>
            <div class="side1 valign-wrappr" id="side1">
                <ul>
                    <li @click="setContentSide2({side2: 'side2etudiants',data: 'etudiant'},$event)" class="tooltipped"
                        data-position="right" data-tooltip="Etudiants"><a ref="etudiant"
                            class="waves-effect waves-teal btn-flat"><i
                                class="material-icons medium">supervisor_account</i></a></li>
                    <li @click="setContentSide2({side2: 'side2professeurs',data: 'professeurs'},$event)"
                        class="tooltipped" data-position="right" data-tooltip="Professeurs"><a ref="professeurs"
                            class="waves-effect waves-teal btn-flat"><i class="material-icons medium">person</i></a>
                    </li>
                    <li @click="setContentSide2({side2: 'side2cours',data: 'cours'},$event)" class="tooltipped"
                        data-position="right" data-tooltip="Cours"><a ref="cours"
                            class="waves-effect waves-teal btn-flat"><i
                                class="material-icons medium">library_books</i></a></li>
                    <li @click="setContentSide2({side2: 'side2gestion',data: 'gestion'},$event)" class="tooltipped"
                        data-position="right" data-tooltip="Gestion"><a ref="gestion"
                            class="waves-effect waves-teal btn-flat"><i class="material-icons medium">assignment</i></a>
                    </li>
                </ul>
            </div>
            <div class="side2 valign-wrapper" id="side2">
                <keep-alive>
                    <component v-bind:is="getContentSide2()" @setmaincontent="setMainContent"></component>
                </keep-alive>
            </div>
            <div class="maincontent" id="maincontent">
                <keep-alive>
                    <component v-bind:is="getMainContent()"></component>
                </keep-alive>
            </div>
            <nav class="footer" id="footer"></nav>
        
    </v-app>
</template>

<script>
    const {ipcRenderer} = require('electron')
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
    import inscriptionForm from "./components/maincontent/inscriptionForm.vue"

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
            var elems = this.$el.querySelectorAll(".tooltipped");
            M.Tooltip.init(elems);

            var fbtn = document.querySelectorAll('.fixed-action-btn');
            M.FloatingActionButton.init(fbtn);

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

                if (event.target.tagName == "A") {
                    event.target.classList.add("borderYell");
                } else {
                    event.target.parentElement.classList.add("borderYell");
                }
            },
            doAction(data) {
                ipcRenderer.send("doAction", data);
            }
        }
    }
</script>

<style lang="css" scoped>
    * {
        overflow-y: hidden;
        max-height: 728px;
    }

    nav .nav-wrapper i {
        height: 30px;
        line-height: 30px;
    }

    .footer {
        position: absolute;
        top: 705px;
        left: 0;
        height: 23px;
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
        height: 675px;
        width: 50px;
        position: absolute;
        z-index: 1;
        top: 30px;
        left: 0;
        text-align: center;
        align-content: center;
        background-color: #001B48;
        overflow-x: hidden;
        padding-top: 40px;
        transition: 0.5s;
    }

    .side1 a {
        text-decoration: none;
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
        height: 675px;
        width: 220px;
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
        width: 1096px;
        left: 270px;
        padding: 10px;
        height: 700px;
        align-content: center;
        background-color: #D6E8EE;
    }

    #side2>ul>li {
        color: white;
        width: 100%;
        display: block;

    }
    .brand {
        text-align: center;
        align-content: center;
        height: 30px;
    }
</style>