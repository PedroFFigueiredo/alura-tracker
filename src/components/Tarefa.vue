<template>
    <div class="box has-text-weight-bold">
        <div class="columns">
            <div class="clumn is-7">

            </div>
            <div class="column">
                <Cronometro tempoEmSegundos="15"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import CronometroVue from "./Cronometro.vue";

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Tarefa',
    components: {
        Cronometro
    }
});

</script>