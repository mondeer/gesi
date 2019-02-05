<template>
    <div class="page-container">
        <nav class="tete"  id="tete">
            <div class="nav-wrapper">
                <span class="brand"></span>
                <a href="#" class="waves-effect waves-teal btn-flat right"><i class="material-icons right tiny">add</i></a>

            </div>
        </nav>
        <div class="side1" id="side1">
            <div @click="makeBorder" class="center "><a class=" center waves-effect waves-teal btn-flat"><i class="center material-icons right medium">delete</i></a></div>
            <div @click="makeBorder"><a class="waves-effect waves-teal btn-flat"><i class="material-icons right medium">add</i></a></div>
            <div @click="makeBorder"><a class="waves-effect waves-teal btn-flat"><i class="material-icons right medium">description</i></a></div>
            <div @click="makeBorder"><a class="waves-effect waves-teal btn-flat"><i class="material-icons right medium">data_usage</i></a></div>
        </div>
        <div class="side2" id="side2">
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Clients</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

        </div>

        <div class="content">
        </div>
        <nav class="footer"></nav>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data: function () {
            return {
                menuVisible: false,
                content: "MenuEtudiants",
                lastTarget: null,
                currentTarget: ""
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
            },
            makeBorder(event) {
                if (this.lastTarget != this.currentTarget && this.lastTarget != null && this.currentTarget != null) {
                    this.lastTarget.classList.remove("borderYell");
                    event.target.classList.add("borderYell");
                    this.lastTarget = event.target;
                } else {
                    this.lastTarget = event.target;
                    this.currentTarget = event.target;
                }
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
        height: 28px;
        background-color: brown;
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
        height: 35px;
        background-color: white;
        box-shadow: none;
        color: black;
    }
    .tete li a {
        position: relative;
        height: 100% !important;
    }
    .side1 {
        height: 100%;
        width: 50px;
        position: absolute;
        z-index: 1;
        top: 35px;
        left: 0;
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
    .side1 a:hover {
        color: #f1f1f1;
    }
    .side2 {
        height: 100%;
        width: 200px;
        position: absolute;
        z-index: 1;
        top: 35px;
        left: 50px;
        background-color: #001B48;
        overflow-x: hidden;
        transition: 0.5s;
    }
    .content {
        transition: margin-left .5s;
        height: 700px;
        background-color: #D6E8EE;
    }
</style>