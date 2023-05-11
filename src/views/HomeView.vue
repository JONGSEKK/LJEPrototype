<script setup>
    import Sidebar from '../components/Sidebar.vue';
    import { RouterView } from 'vue-router';
    import { promo } from '../stores';
    import { inven } from '../stores';
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

    onMounted(async function () {
        const records = await pb.collection('promosi').getFullList(200 /* batch size */, {
            sort: '-created',
        });
        
        promo.value = records;
        
    })

    onMounted(async function () {
        const records = await pb.collection('inventori').getFullList(200 /* batch size */, {
            sort: '-created',
        });
        
        inven.value = records;
        
    })
</script>
<template >
    <Sidebar class="max-md:hidden"/>
    <div class="bg-blue-100 min-h-screen pl-64 max-md:pl-0">
        <h1 class="text-4xl font-semibold pb-7 pt-6 pl-5">Halaman Utama</h1>
            <h2 class="w-4/5 m-auto text-2xl font-medium pb-5">Gambaran Pengurusan</h2>
            <div class="flex justify-evenly m-auto w-4/5 max-md:block">
                <div class="bg-white w-1/5 rounded-xl shadow-2xl py-9 text-center max-md:w-4/5 max-md:mb-5 max-md:m-auto">
                    <div class=" block w-9 py-1 mb-3  m-auto text-xl bg-blue-100 rounded-full  text-blue-600 "><i class='bx bxs-user' ></i></div>
                    <h2 class="text-7xl font-semibold">{{ staffs.length }}</h2>
                    <p>Pekerja</p>
                </div>
                <div class="bg-white w-1/5 rounded-xl shadow-2xl py-9 text-center max-md:w-4/5 max-md:mb-5 max-md:m-auto">
                    <div class=" block w-9 py-1 mb-3 m-auto text-xl bg-purple-100 rounded-full  text-purple-600"><i class="fa-solid fa-boxes-stacked"></i></div>
                    <h2 class="text-7xl font-semibold">{{ inven.length }}</h2>
                    <p>Produk Terdaftar</p>
                </div>
                <div class="bg-white w-1/5 rounded-xl shadow-2xl py-9 text-center max-md:w-4/5 max-md:mb-5 max-md:m-auto">
                    <div class=" block w-9 py-1 mb-3 m-auto text-xl bg-green-100 rounded-full  text-green-500"><i class='bx bxs-discount' ></i></div>
                    <h2 class="text-7xl font-semibold">{{ promo.length }}</h2>
                    <p>Promosi Aktif</p>
                </div>
                <div class="bg-white w-1/5 rounded-xl shadow-2xl py-9 text-center max-md:w-4/5 max-md:mb-5 max-md:m-auto">
                    <div class=" block w-9 py-1 mb-3 m-auto text-xl bg-yellow-100 rounded-full  text-yellow-500"><i class='bx bxs-barcode' ></i></div>
                    <h2 class="text-7xl font-semibold">5</h2>
                    <p>Jualan Hari Ini</p>
                </div>
            </div> 
            <h2 class="w-4/5 m-auto text-2xl font-medium pt-10 pb-5">Gambaran Analisis Jualan</h2>     
            <div class="bg-white rounded-lg w-4/5 h-96 m-auto shadow-xl">
                <h3 class="pl-10 pt-5">Graf Jualan Bulanan (Bulan Lepas)</h3>
            </div>    
    </div>
</template>