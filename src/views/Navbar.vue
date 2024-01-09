<template>
    <div>
        <nav class="p-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <img src="@/assets/alphalogo.png" alt="Logo" class="w-24 h-8 md:ml-20">
                </div>
                <div class="hidden md:flex space-x-4">
   
                    <a href="#" class="text-gray-700 p-2 mt-2">About Us</a>
                    <a href="#" class="text-gray-700 p-2 mt-2">Our Solutions</a>
                    <a href="#" class="text-gray-700 p-2 mt-2">Partners</a>
                    <a href="#" class="text-gray-700 p-2 mt-2">Help</a>
                    <a href="#" class="text-gray-700 p-2 mt-2">Blog</a>
                    <a href="#" class="text-[#2A2F9A] border-2 border-[#2A2F9A] p-4 rounded-md">Connect with Investors</a>
                </div>
                <div class="md:hidden">

                    <button @click="toggleSidebar" class="text-black">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>

        <aside v-if="isSidebarVisible" class="md:hidden fixed inset-0 bg-[#2A2F9A] ">
            <div class="flex justify-end p-4">
                <button @click="toggleSidebar" class="text-white">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                </path>
              </svg>
            </button>

            </div>
            <div class="flex flex-col py-5 divide-y divide-slate-500 w-full">
                <a href="#" class="text-white px-3 py-5 font-medium tracking-widest">About Us</a>
                <a href="#" class="text-white px-3 py-5 font-medium tracking-widest">Our Solution</a>
                <a href="#" class="text-white px-3 py-5 font-medium tracking-widest">Partners</a>
                <a href="#" class="text-white px-3 py-5 font-medium tracking-widest">Help</a>
                <a href="#" class="text-white px-3 py-5 font-medium tracking-widest">Blog</a>
                <div href="#" class="bg-white text-[#2A2F9A] rounded-md py-5 font-bold tracking-widest p-3 mt-5">Get Started</div>
            </div>
        </aside>

        <div class="">
            <div class="w-full sm:w-96 mx-4">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isSidebarVisible: false,
        };
    },
    methods: {
        toggleSidebar() {
            this.isSidebarVisible = !this.isSidebarVisible;
        },
        loginWithGoogle() {
            console.log('Logging in with Google');
        },
        continueWithEmail() {
            console.log('Continuing with email:', this.email);
        },
    },
};
</script>
