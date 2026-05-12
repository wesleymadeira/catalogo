<script setup>
    defineProps(['id', 'nome', 'preco', 'imagem', 'categoria']);
    import ButtonChlid from './ButtonChlid.vue';
    import { formataPreco } from '@/utils/produtoUtils';
</script>

<template>
    <div class="produto-card">
        <div>
            <h2>{{ nome }}</h2>
            <p>Preço: {{ formataPreco(preco) }} </p>
        </div>
        <div>
            <img :src="imagem" :alt="nome" class="produto-image">
        </div>
        <ButtonChlid>Editar</ButtonChlid>
    </div>
</template>

<style scoped>
.produto-card{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ccc;
    padding: 16px;
    margin-bottom: 16px;
}

.produto-imagem{
    width: 100px;
    height: 100px;
    object-fit: cover;
}
</style>