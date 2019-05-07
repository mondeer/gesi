<template>
    <TableEtudiant />
</template>
<script>
    import TableEtudiant from '@/components/globaluse/TableEtudiant.vue'
    export default {
        name: 'annuaire',
        components: {
            TableEtudiant
        },
        mounted() {
            var elements = document.querySelectorAll('table.highlight>tbody>tr');
            elements.forEach(el => {
                el.classList.add('card');
                el.classList.add('white');
                el.classList.add('z-depth-3');
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

    .annuaire {
        width: 100%;
    }

    html {
        overflow-x: hidden;
    }
</style>