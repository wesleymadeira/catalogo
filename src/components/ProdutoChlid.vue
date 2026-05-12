<script setup>
import ButtonChlid from './ButtonChlid.vue';
    defineProps(['id', 'nome', 'preco', 'categoria'])
    defineEmits(['corrigirpreco'])
    import { formataPreco } from '@/utils/produtoUtils';
</script>

<template>
    <li>
        ID: {{ id }} - {{ nome }} - {{ formataPreco(preco) }} - ({{ categoria }})
        <ButtonChlid @clique="$emit('corrigirpreco', id)">Corrigir preço</ButtonChlid>
    </li>
</template>

<style scoped>

</style>