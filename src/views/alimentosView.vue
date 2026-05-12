<script setup>
    import { ref } from 'vue';
    import { listaProdutos } from '@/data/produtos';
    import { formataPreco } from '@/utils/produtoUtils';
    const produtos = ref(listaProdutos);
    produtos.value = produtos.value.filter(p => p.categoria === 'Alimentos');
</script>

<template>
    <div class="container">
        <h1>Alimentos</h1>
        <div class="produtos">
            <div v-for="produto in produtos" :key="produto.id" class="produto-card">
                <div>
                    <h2>{{ produto.nome }}</h2>
                    <p>Preço: {{ formataPreco(produto.preco) }}</p>
                </div>
                <div>
                    <img :src="produto.imagem" :alt="produto.nome" class="produto-imagem">
                </div>
            </div>
        </div>        
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
</style>