<script setup>
    import Sidebar from '../components/Sidebar.vue';
    import { RouterView } from 'vue-router';
    import PocketBase from 'pocketbase';
    import { onMounted } from 'vue';
    import router from '../router';
    import { inven } from '../stores';
    import { tori } from '../stores';

    const pb = new PocketBase('http://127.0.0.1:8090');

    onMounted(async function () {
        const records = await pb.collection('inventori').getFullList(200 /* batch size */, {
            sort: 'created',
        });
        
        inven.value = records;
    })

    async function ubah(idProduk){
        const record = await pb.collection('inventori').getFirstListItem( `id='${idProduk}'`, {});
        tori.value=record;

        router.push("/updateInventory");
    }
</script>

<template>
    <div class="w-4/5 m-auto pt-14">
           <h2 class="text-2xl font-medium pb-9">Buang Maklumat Produk</h2>
           <table class="w-full text-lg bg-white rounded-2xl shadow-xl">
                   <tr class="h-9">
                       <th class="first:rounded-tl-2xl bg-sky-300 border-r-2 border-blue-400">Bilangan</th>
                       <th class="bg-sky-300 border-r-2 border-blue-400">Nama Produk</th>
                       <th class="bg-sky-300 border-r-2 border-blue-400">Harga Produk</th>
                       <th class="bg-sky-300 border-r-2 border-blue-400">ID Produk</th>
                       <th class="bg-sky-300 border-r-2 border-blue-400">Deskripsi Produk</th>
                       <th class="last:rounded-tr-2xl bg-sky-300">Proses</th>
                   </tr>
                   <tr class="text-center h-12 " v-for="inventori in inven">
                       <td>{{ inven.indexOf(inventori)+1 }}</td>
                       <td>{{ inventori.namaProduk }}</td>
                       <td>RM {{ inventori.hargaProduk }}</td>
                       <td>{{ inventori.idProduk }}</td>
                       <td>{{ inventori.deskripsiProduk }}</td>
                       <td class="text-yellow-500"><i class="fa-sharp fa-solid fa-pen-to-square" @click="ubah(inventori.id)"></i></td>
                   </tr>
               </table>
       </div> 
</template>