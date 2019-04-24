<template>
    <div class="annuaire">
        <TableSearch />

        <!-- Button d'ajout d'un Etudiant -->
        <div class="fixed-action-btn">
            <a class="btn-floating waves-effect btn-large red">
                <i class="large material-icons">add</i>
            </a>
        </div>
    </div>
</template>
<script>
    import TableSearch from '@/components/globaluse/TableSearch.vue'
    export default {
        name: 'annuaire',
        components: {
            TableSearch
        },
        mounted() {
            var elements = document.querySelectorAll('table.highlight>tbody>tr');
            elements.forEach(el => {
                el.classList.add('card');
                el.classList.add('white');
                el.classList.add('z-depth-3');
                // el.classList.add('darken-1');
            });

            var fabtn = document.querySelectorAll('.fixed-action-btn');
            M.FloatingActionButton.init(fabtn);
        }
    }
</script>
<style lang="css">
    .fixed-action-btn {
        margin: 15px;
    }
.annuaire{
    width: 100%;
}
</style>