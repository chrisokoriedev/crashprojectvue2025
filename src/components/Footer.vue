<script setup>
const year = date.getFullYear();
</script>

<template>
    <footer>
        <div class="container mx-auto py-6 text-center">
            <p class="text-gray-600">© {{ year }} Your Company Name. All rights reserved.</p>
            <p class="text-gray-600">Follow us on
                <a href="https://twitter.com" class="text-blue-500 hover:underline">Twitter</a>,
                <a href="https://facebook.com" class="text-blue-500 hover:underline">Facebook</a>,
                <a href="https://instagram.com" class="text-blue-500 hover:underline">Instagram</a>.
            </p>
        </div>
    </footer>
</template>