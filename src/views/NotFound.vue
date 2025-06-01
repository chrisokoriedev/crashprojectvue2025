<template>
  <div class="min-h-screen flex flex-col justify-center items-center text-center">
    <i class="pi pi-link text-2xl text-green-600"></i>
    <h1 class=" text-2xl font-bold text-green-600 mb-4">404</h1>
    <p class=" text-5xl font-bold">Oops! Page not found.</p>
    <div class="mt-10 flex items-center justify-center gap-x-6">
      <RouterLink to="/"
        class="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
        Go back home</RouterLink>
      <a class="text-sm font-semibold text-gray-900">Contact support <span aria-hidden="true">&rarr;</span></a>
    </div>
  </div>
</template>
