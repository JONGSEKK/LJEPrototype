<script setup>
    import Sidebar from '../components/Sidebar.vue';
    import { RouterView } from 'vue-router';
    import { staffs } from '../stores';
    import PocketBase from 'pocketbase';
    import { onMounted } from 'vue';

    const pb = new PocketBase('http://127.0.0.1:8090');

    onMounted(async function () {
        const records = await pb.collection('staff').getFullList(200 /* batch size */, {
            sort: '-created',
        });
        
        staffs.value = records;
        
    })
</script>

<template>
    <Sidebar class="max-md:hidden"/>
    <div class="bg-blue-100 min-h-screen pl-64 max-md:pl-0">
        <h1 class="text-4xl font-semibold pb-14 text-bl pt-6 pl-5">Halaman Pengurusan Pekerja</h1>
        <h2 class="w-4/5 m-auto text-2xl font-medium pb-10">Proses Pengurusan Pekerja</h2>
        <div class="flex justify-evenly m-auto w-4/5 max-md:block">
                <div class="bg-white w-1/5 rounded-xl shadow-2xl py-9 text-center max-md:w-4/5 max-md:mb-5 max-md:m-auto">
                    <RouterLink to="/worker/"><div class=" block w-9 py-1 mb-3  m-auto text-xl bg-blue-100 rounded-full  text-blue-600 "><i class='bx bxs-user' ></i></div>
                    <h2 class="text-7xl font-semibold" >{{ staffs.length }}</h2>
                    <p>Pekerja</p>
                    </RouterLink>
                </div>
                <div class=" hover:scale-110 ease-out duration-300 cursor-pointer bg-white h-2/5 w-1/5 rounded-xl shadow-2xl py-9 my-auto text-center max-md:w-4/5 max-md:mb-5 max-md:m-auto ">
                    <RouterLink to="/addWorker"><div class=" w-9 py-1 mb-3 m-auto text-xl bg-green-100 rounded-full  text-green-500"><i class="fa-solid fa-plus "></i></div>
                        <p>Daftar Pekerja</p></RouterLink>
                </div>
                <div class="hover:scale-110 ease-out duration-300 cursor-pointer bg-white  h-2/5 w-1/5 rounded-xl shadow-2xl py-9 my-auto text-center max-md:w-4/5 max-md:mb-5 max-md:m-auto active:bg-blue-200">
                    <RouterLink to="/worker/delete"><div class=" block w-9 py-1 mb-3 m-auto text-xl bg-red-100 rounded-full  text-red-500"><i class="fa-solid fa-minus"></i></div>
                    <p>Buang Maklumat Pekerja</p></RouterLink>
                </div>
                <div class="hover:scale-110 ease-out duration-300 cursor-pointer bg-white h-2/5 w-1/5 rounded-xl shadow-2xl py-9 my-auto text-center max-md:w-4/5 max-md:mb-5 max-md:m-auto active:bg-blue-200">
                    <RouterLink to="/worker/update"><div class=" block w-9 py-1 mb-3 m-auto text-xl bg-yellow-100 rounded-full  text-yellow-500"><i class="fa-solid fa-pen-to-square"></i></div>
                    <p>Ubah Suai Maklumat Pekerja</p></RouterLink>
                </div>
        </div>
        <RouterView/> 
    </div>
</template>