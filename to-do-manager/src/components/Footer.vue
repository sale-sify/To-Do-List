<!-- #######################################################################################
########## Footer.vue - Composant de pied de page de l'application To-Do Manager  ##########
#########################################################################################-->


<script setup lang="ts">

// Recuperation et formatage de la date actuelle
    let date = new Date();

    function formatDate(date: Date): string {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

</script>



<template>

    <footer class="footer">
        <p class="footer-right">2025 ETNA To-Do Manager. All rights reserved.</p>
        <p>Today, {{ formatDate(date) }}</p>
    </footer>

</template>



<style>

.footer {
    width: 100%;
    padding: 1rem;
    background-color: var(--color-background);
    border-top: 1px solid var(--color-border);
    height: 10vh;
}

</style>