<template>
    <div class="page-container">
        <nav class="tete" id="tete">
            <div class="nav-wrapper">
                <span class="brand"><i class="material-icons right tiny">add</i></span>
                <a class="waves-effect waves-teal btn-flat right"><i class="material-icons right tiny">add</i></a>
            </div>
        </nav>
        <div class="side1" id="side1">
            <ul>
                <li @click="setContentSide2('side2etudiants',$event)"><a class="waves-effect waves-teal btn-flat"><i class="material-icons medium">supervisor_account</i></a></li>
                <li @click="setContentSide2('side2professeurs',$event)"><a class="waves-effect waves-teal btn-flat"><i class="material-icons medium">person</i></a></li>
                <li @click="setContentSide2('side2cours',$event)"><a class="waves-effect waves-teal btn-flat"><i class="material-icons medium">library_books</i></a></li>
                <li @click="setContentSide2('side2gestion',$event)"><a class="waves-effect waves-teal btn-flat"><i class="material-icons medium">assignment</i></a></li>
            </ul>
        </div>
        <div class="side2" id="side2">
            <keep-alive>
                <component v-bind:is="getContentSide2()" @setmaincontent="setMainContent"></component>
            </keep-alive>
        </div>

        <div class="maincontent">
            <keep-alive>
                <component v-bind:is="getMainContent()"></component>
            </keep-alive>
        </div>
        <nav class="footer"></nav>
    </div>
</template>

<script>
    import side2etudiants from   "./components/side2/side2Etudiants.vue"
    import side2professeurs from "./components/side2/side2Professeurs.vue"
    import side2cours from       "./components/side2/side2Cours.vue"
    import side2gestion from     "./components/side2/side2Gestion.vue"
    import mainvide from         "./components/globaluse/mainvide.vue"
    import annuaire from         "./components/maincontent/annuaire.vue"
    import presences from        "./components/maincontent/presences.vue"
    import parcours from         "./components/maincontent/parcours.vue"
    import stages from           "./components/maincontent/stages.vue"
    import inscriptionForm from  "./components/maincontent/inscriptionForm.vue"

    export default {
        name: 'App',
        components: {
            side2cours,
            side2etudiants,
            side2gestion,
            side2professeurs,
            inscriptionForm,
            presences, 
            stages,
            parcours,
            annuaire,
            mainvide
        },
        data: function () {
            return {
                menuVisible: false,
                maincontent: "mainvide",
                lastTarget: null,
                contentside2: "side2etudiants"
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
            setContentSide2(data,event) {
                this.contentside2 = data;
                this.makeBorderYellow(event);
            },
            makeBorderYellow(event) {
                if (event.target.tagName == "A") {
                    event.target.classList.add("borderYell");
                } else {
                    event.target.parentElement.classList.add("borderYell");
                }
                console.log(event.target);

            },
            callme(don){
                console.log('Je suis reveillé: '+don);
            }
        }
    }
</script>

<style lang="css" scoped>
    .page-container {
        max-height: 728px;
        overflow-y: hidden;
    }

    .footer {
        position: absolute;
        top: 705px;
        left: 0;
        height: 23px;
        background-color: brown;
    }

    .borderYell {
        border-left-color: #ffff00;
        border-left-width: 2px;
        border-left-style: solid;
    }

    .borderYellRight {
        border-right-color: #D6E8EE;
        border-right-width: 2px;
        border-right-style: solid;
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
        height: 35px;
        background-color: white;
        box-shadow: none;
        color: black;
    }

    .tete li a {
        position: relative;
        height: 100% !important;
    }

    #side1 {
        height: 670px;
        width: 50px;
        position: absolute;
        z-index: 1;
        top: 35px;
        left: 0;
        text-align: center;
        line-height: 50%;
        align-content: center;
        background-color: #02457A;
        overflow-x: hidden;
        padding-top: 60px;
        transition: 0.5s;
    }

    .side1 a {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
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
        height: 670px;
        color: white;
        width: 200px;
        position: absolute;
        z-index: 1;
        top: 35px;
        left: 50px;
        background-color: #001B48;
        overflow-x: hidden;
        transition: 0.5s;
    }

    .side2 ul {
        width: 100%;
        color: white;
    }

    .maincontent {
        transition: margin-left .5s;
        position: relative;
        left: 250px;
        height: 700px;
        align-content: center;
        background-color: #D6E8EE;
    }
</style>