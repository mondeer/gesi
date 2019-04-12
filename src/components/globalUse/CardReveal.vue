<template>
    <div class="main z-depth-5">
        <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="http://materializecss.com/images/office.jpg">
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'CardReveal'
    }
</script>
<style lang='scss' scoped>
    // @import 'materialize-css/dist/css/materialize.css';
    // @import 'materialize-css';

    .main {
        width: 250px;
        margin: 10px;
    }
</style>