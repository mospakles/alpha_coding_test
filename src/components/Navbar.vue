<template>
    <div>
        <nav class="bg-gray-800 p-4">
            <div class="flex items-center justify-between">
                <div class="text-white flex items-center">
                    <img src="@/assets/alphalogo.png" alt="Logo" class="w-8 h-8 mr-2">
                </div>
                <div class="hidden md:flex space-x-4">
   
                    <a href="#" class="text-gray-700">About Us</a>
                    <a href="#" class="text-gray-700">Our Solutions</a>
                    <a href="#" class="text-gray-700">Partners</a>
                    <a href="#" class="text-gray-700">Help</a>
                    <a href="#" class="text-gray-700">Blog</a>
                    <a href="#" class="text-white border-2 border-[#2A2F9A] p-4 rounded-sm">Connect with Investors</a>
                </div>
                <div class="md:hidden">

                    <button @click="toggleSidebar" class="text-white">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>

        <aside v-if="isSidebarVisible" class="md:hidden fixed inset-0 bg-[#2A2F9A] bg-opacity-75">
            <div class="flex justify-end p-4">
                <button @click="toggleSidebar" class="text-white">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                        </path>
                    </svg>
                </button>
            </div>
            <div class="flex flex-col items-center">
                <a href="#" class="text-white py-2">About</a>
                <a href="#" class="text-white py-2">Our Solution</a>
                <a href="#" class="text-white py-2">Partners</a>
                <a href="#" class="text-white py-2">Help</a>
                <a href="#" class="text-white py-2">Blog</a>
                <a href="#" class="text-white py-2">Connect with Investors</a>
            </div>
        </aside>

        <div class="min-h-screen flex items-center justify-center bg-gray-100">
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
