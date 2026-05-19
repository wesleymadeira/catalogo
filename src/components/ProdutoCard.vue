<script setup>
    import { ref } from 'vue';
    defineProps(['id', 'nome', 'preco', 'imagem', 'categoria']);
    import ButtonChlid from './ButtonChlid.vue';
    import { formataPreco } from '@/utils/produtoUtils';
    import ProdutoDialog from './ProdutoDialog.vue';
    const mostrarDialog = ref(false);
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
        <ButtonChlid @clique="mostrarDialog = true">Editar</ButtonChlid>
        <ProdutoDialog v-if="mostrarDialog" :nome="nome" :id="id" :categoria="categoria" :preco="preco" @fechar="mostrarDialog = false"></ProdutoDialog>
    </div>
</template>

<style scoped>
.produto-card{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 16px;
}

img {
    width: 100px;
    height: 100px;
    object-fit: cover;
}

</style>