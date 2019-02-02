<template>
    <div class="on">
        <!-- Element Showed -->
        <a id="menu" class="waves-effect waves-light btn btn-floating" @click="come"><i class="material-icons">menu</i></a>

        <!-- Tap Target Structure -->
        <div class="tap-target" data-target="menu">
            <div class="tap-target-content">
                <h5>Title</h5>
                <p>A bunch of text</p>
            </div>
        </div>
    </div>
</template>
<script>
    var elems = document.querySelectorAll('.tap-target');
    var instances = M.TapTarget.init(elems, options)
    export default {
        name: "feature",
        methods:{
            come(){
                var instance = M.TapTarget.getInstance(elems);
                instance.open();
            }
        }
    }
</script>
<style>

</style>