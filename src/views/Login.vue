<template>
    <Navbar />
    <div class="min-h-screen flex items-center justify-center bg-gray-100 p-5">
        <div class="w-full max-w-md">
            <div class="text-center">
                <h2 class="text-2xl font-extrabold text-[#121441] tracking-wide">Welcome back</h2>
                <p class="text-black font-light p-3">Login to your account to funds and support for your business</p>
            </div>

            <button @click="loginWithGoogle"
                class="w-full py-2 mt-6 font-medium text-[#2A2F9A] rounded border-2 border-[#2A2F9A] focus:outline-none focus:shadow-outline-blue hover:bg-gray-200 flex items-center justify-center gap-3 p-4 cursor-pointer">
                Login with Google
                <i class="fa-brands fa-google"></i>
            </button>

            <div class="mt-6">
                <label for="email" class="block text-sm font-medium text-gray-600">Email Address</label>
                <input v-model="email" type="email" id="email"
                    class="mt-1 p-2 w-full border rounded focus:outline-none focus:shadow-outline-blue"
                    placeholder="john.doe@example.com" />
            </div>

            <button @click="continueWithEmail"
                class="w-full mt-6 py-2 bg-[#2A2F9A] rounded-md text-white focus:outline-none focus:shadow-outline-blue hover:bg-blue-700 cursor-pointer">
                Continue
            </button>

            <div class="mt-6 text-center">
                <p class="text-sm text-gray-900">New to Kappoh? <a href="#" class="text-[#2A2F9A]">Create an account</a></p>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from './Navbar.vue';
export default {
    components: {
        Navbar,
    },
    data() {
        return {
            email: '',
        };
    },
    methods: {
        loginWithGoogle() {
            console.log('Logging in with Google');
        },
        continueWithEmail() {
            console.log('Continuing with email:', this.email);
        },
    },
};
</script>

<style scoped>
</style>
