<script setup></script>

<template>
  <section class="bg-green-50">
    <div class="container mx-auto py-10 px-6">
      <div class="flex flex-col md:flex-row gap-8">
        <main class="flex-1 md:w-2/3">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-gray-500 mb-4">Full-Time</div>
            <h1 class="text-3xl font-bold mb-4">Senior Vue Developer</h1>
            <div class="text-gray-500 mb-4 flex items-center">
              <i class="fa-solid fa-location-dot text-lg text-orange-700 mr-2"></i>
              <p class="text-orange-700">Boston, MA</p>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-green-800 text-lg font-bold mb-6">Job Description</h3>
            <p class="mb-4">
              We are seeking a talented Front-End Developer to join our team
              in Boston, MA. The ideal candidate will have strong skills in
              HTML, CSS, and JavaScript, with experience working with modern
              JavaScript frameworks such as Vue or Angular.
            </p>
            <h3 class="text-green-800 text-lg font-bold mb-2">Salary</h3>
            <p class="mb-4">$70k - $80K / Year</p>
          </div>
        </main>

        <aside class="md:w-1/3">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-6">Company Info</h3>
            <h2 class="text-2xl">NewTek Solutions</h2>
            <p class="my-2">
              NewTek Solutions is a leading technology company specializing in
              web development and digital solutions. We pride ourselves on
              delivering high-quality products and services to our clients
              while fostering a collaborative and innovative work environment.
            </p>
            <hr class="my-4" />
            <h3 class="text-xl">Contact Email:</h3>
            <p class="my-2 bg-green-100 p-2 font-bold">contact@newteksolutions.com</p>
            <h3 class="text-xl">Contact Phone:</h3>
            <p class="my-2 bg-green-100 p-2 font-bold">555-555-5555</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-xl font-bold mb-6">Manage Job</h3>
            <router-link to="/edit-job" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full block text-center mt-4">
              Edit Job
            </router-link>
            <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full mt-4">
              Delete Job
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>