<script setup>
defineProps({
    year: Number
});
</script>

<template>
    <footer>
        <div class="container-lg bg-green-600 text-white mx-auto py-6 text-center">
            <div class="flex flex-row space-x-4 m-3 justify-between">
                <div>© {{ year }} Your Company Name. All rights reserved.</div>
                <div class="flex  space-x-5">
                    <a href="https://twitter.com" class=" pi pi-twitter"></a>
                    <a href="https://facebook.com" class=" pi pi-facebook"></a>
                    <a href="https://instagram.com" class=" pi pi-instagram"></a>
                </div>
            </div>
        </div>
    </footer>
</template>
