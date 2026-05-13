<script setup>
    import { ref } from 'vue';
    const props = defineProps(['nome', 'preco', 'categoria', 'id']);
    import ButtonChlid from './ButtonChlid.vue';
    import { formataPreco } from '@/utils/produtoUtils';
    const novoPreco = ref(0);
    novoPreco.value = props.preco
    defineEmits(['fechar']);
</script>

<template>
    <div class="overlay">
    <div class="produto-dialog">
            <h2>{{ props.nome }}</h2>
            <p>Preço: {{ formataPreco(props.preco) }}</p>
            <p>Categoria: {{ categoria }}</p>
            <input type="number" v-model.number="novoPreco" />
            <ButtonChlid>Corrigir Preço</ButtonChlid>
            <ButtonChlid @clique="$emit('fechar')">Fechar</ButtonChlid>
    </div>
    </div>
</template>

<style scoped>
.produto-dialog{
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 24px;
    background-color: white;
    min-width: 320px;
    color: #000;
}
.overlay{
    position: fixed;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000   ;
}
</style>