<script setup>
    import { ref } from 'vue';
    import { listaProdutos } from '@/data/produtos';
    import ProdutoCard from '@/components/ProdutoCard.vue';
    const produtos = ref(listaProdutos);
    produtos.value = produtos.value.filter(p => p.categoria === 'Acessorios');
</script>

<template>
    <div class="container">
        <h1>Acessórios</h1>
        <div class="produtos">
            <ProdutoCard v-for="produto in produtos" :key="produto.id" :id="produto.id" :nome="produto.nome" :preco="produto.preco" :categoria="produto.categoria" :imagem="produto.imagem"></ProdutoCard>
        </div>        
    </div>
</template>

<style scoped>
    div{
        margin: 0 0vw 0 0vw;
        padding: 0vw 1vw 0vw 1vw;        
    }
    
    h1{
        text-align: center;
    }
    
    .produto-card{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid #ccc;
        padding: 16px;
        margin-bottom: 16px;
    }
</style>