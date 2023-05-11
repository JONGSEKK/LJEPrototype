<script setup>
import PocketBase from 'pocketbase';
import SubmitButton from '../components/SubmitButton.vue';
import { ref } from "vue";
import router from "../router";
document.title = "Log Masuk";

const pb = new PocketBase("http://127.0.0.1:8090");

const staff = ref("");
const password = ref("");

async function login() {
    try {
        const resultList = await pb
            .collection("staff")
            .getFirstListItem(`staff_id =  "${staff.value}"`);
        if (password.value !== resultList.katalaluan) {
            alert("error");
            return;
        }
        alert("success");
        redirectHomepage();
    } catch (error) {
        alert("error");
    }
}

function redirectHomepage() {
    router.push("/home");
}
</script>

<template>
    <div class="grid grid-cols-2 min-h-screen max-md:block bg-login relative">
        <img src="../assets/Fluid-10s-1920px.png" class="absolute -z-10" alt="">
        <div class="grid place-items-center max-md:hidden">
            <img src="../assets/undraw_login_re_4vu2.svg" alt="" >
        </div>
        <form class="grid place-items-center max-md:pt-32" v-on:submit.prevent="login" >
            <div>
                <div>
                    <h1 class="text-center pb-2 text-5xl font-semibold tracking-wider leading-snug text-blue-700">Sistem Pengurusan<br />Ladies Jeans Enterprise</h1>
                    <h2 class="text-center pb-2 text-2xl font-bold tracking-wide pt-5">Log Masuk</h2>
                    <p class="text-center pb-5 text-xl font-light">Sila Masukkan ID dan Kata Laluan</p>
                    <div class="w-4/5 mx-auto">
                        <input type="text" v-model="staff" placeholder="ID Pekerja" class="w-full outline-none border-b-2 border-b-blue-600 pt-5 pb-3 mb-2 bg-transparent"/>
                        <input type="password" v-model="password" placeholder="Kata Laluan" class="w-full outline-none border-b-2 border-b-blue-600 pt-5 pb-3 mb-2 bg-transparent"/>
                        <SubmitButton style="width: 100%;" label="Log Masuk" />
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<style>

</style>