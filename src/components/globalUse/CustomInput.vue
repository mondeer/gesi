<template>
    <div class="input-field col s4">
        <input :id="last_name" :type="text" class="validate">
        <label :for="{content}">{{content}}</label>
    </div>
</template>
<script>
    export default {
        name: "custominput",
        props: {
            id: {
                type: String,
                required: true
            },
            type: {
                type: String,
                required: true,
                default: 'text'
            },
            content: {
                required: true,
                validator: function (value) {
                    return value.length < 15
                }
            }
        }
    }
</script>
<style>

</style>