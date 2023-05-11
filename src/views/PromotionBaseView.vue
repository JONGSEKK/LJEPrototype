<script setup>
import PocketBase from 'pocketbase';
import { onMounted } from 'vue';
import { ref } from 'vue';
import { promo } from '../stores';

const pb = new PocketBase('http://127.0.0.1:8090');


onMounted(async function () {
    const records = await pb.collection('promosi').getFullList(200 /* batch size */, {
        sort: 'created',
    });
    
    promo.value = records;
    
})

</script>

<template>
    <div class="w-4/5 m-auto pt-14">
           <h2 class="text-2xl font-medium pb-9">Senarai Promosi</h2>
           <table class="w-full text-lg bg-white rounded-2xl shadow-xl">
                   <tr class="h-9">
                       <th class="first:rounded-tl-2xl bg-sky-300 border-r-2 border-blue-400">Bilangan</th>
                       <th class="bg-sky-300 border-r-2 border-blue-400">Nama Promosi</th>
                       <th class="bg-sky-300 border-r-2 border-blue-400">Harga Promosi</th>
                       <th class="last:rounded-tr-2xl bg-sky-300">Deskripsi Promosi</th>
                   </tr>
                   <tr class="text-center h-12 hover:bg-slate-100 cursor-pointer" v-for="promosi in promo" >
                       <td>{{ promo.indexOf(promosi)+1 }}</td>
                       <td >{{ promosi.namaPromosi }}</td>
                       <td>RM {{ promosi.hargaPromosi }}</td>
                       <td>{{ promosi.deskripsiPromosi }}</td>
                   </tr>
               </table>
       </div> 
</template>