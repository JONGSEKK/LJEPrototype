<script setup>
import PocketBase from 'pocketbase';
import { onMounted } from 'vue';
import { ref } from 'vue';
import { pekerja } from '../stores';
import router from '../router';

const pb = new PocketBase('http://127.0.0.1:8090');

const staffs = ref([]);

onMounted(async function () {
    const records = await pb.collection('staff').getFullList(200 /* batch size */, {
        sort: 'created',
    });
    
    staffs.value = records;
    
})

async function lihat(staff_id){
        const record = await pb.collection('staff').getFirstListItem( `id='${staff_id}'`, {});
        pekerja.value=record;

        router.push("/viewWorker");
    }

</script>

<template>
     <div class="w-4/5 m-auto pt-14">
            <h2 class="text-2xl font-medium pb-9">Senarai Pekerja</h2>
            <table class="w-full text-lg bg-white rounded-2xl shadow-xl">
                    <tr class="h-9">
                        <th class="first:rounded-tl-2xl bg-sky-300 border-r-2 border-blue-400">Bilangan</th>
                        <th class="bg-sky-300 border-r-2 border-blue-400">Nama</th>
                        <th class="bg-sky-300 border-r-2 border-blue-400">Nombor Kad Pengenalan</th>
                        <th class="bg-sky-300 border-r-2 border-blue-400">Nombor Telefon</th>
                        <th class="last:rounded-tr-2xl bg-sky-300">ID Pekerja</th>
                    </tr>
                    <tr class="text-center h-12 cursor-pointer hover:bg-slate-100 " v-for="staff in staffs"  @click="lihat(staff.id)">
                        <td>{{ staffs.indexOf(staff) +1}}</td>
                        <td>{{ staff.nama }}</td>
                        <td>{{ staff.noKP }}</td>
                        <td>{{ staff.telefon }}</td>
                        <td>{{ staff.staff_id }}</td>
                    </tr>
                </table>
        </div> 
</template>