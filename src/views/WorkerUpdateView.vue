<script setup>
    import Sidebar from '../components/Sidebar.vue';
    import { RouterView } from 'vue-router';
    import { staffs } from '../stores';
    import { pekerja } from '../stores';
    import PocketBase from 'pocketbase';
    import { onMounted } from 'vue';
import router from '../router';

    const pb = new PocketBase('http://127.0.0.1:8090');

    onMounted(async function () {
        const records = await pb.collection('staff').getFullList(200 /* batch size */, {
            sort: 'created',
        });
        
        staffs.value = records;
    })

    async function ubah(staff_id){
        const record = await pb.collection('staff').getFirstListItem( `id='${staff_id}'`, {});
        pekerja.value=record;

        router.push("/updateWorker");
    }
</script>

<template>
    <div class="w-4/5 m-auto pt-14">
            <h2 class="text-2xl font-medium pb-9">Padam Maklumat Pekerja</h2>
            <table class="w-full text-lg bg-white rounded-2xl shadow-xl">
                    <tr class="h-9">
                        <th class="first:rounded-tl-2xl bg-sky-300 border-r-2 border-blue-400">Bilangan</th>
                        <th class="bg-sky-300 border-r-2 border-blue-400">Nama</th>
                        <th class="bg-sky-300 border-r-2 border-blue-400">Nombor Kad Pengenalan</th>
                        <th class="bg-sky-300 border-r-2 border-blue-400">Nombor Telefon</th>
                        <th class="bg-sky-300 border-r-2 border-blue-400">ID Pekerja</th>
                        <th class="last:rounded-tr-2xl bg-sky-300">Proses</th>
                    </tr>
                    <tr class="text-center h-12 " v-for="staff in staffs">
                        <td>{{ staffs.indexOf(staff) +1}}</td>
                        <td>{{ staff.nama }}</td>
                        <td>{{ staff.noKP }}</td>
                        <td>{{ staff.telefon }}</td>
                        <td>{{ staff.staff_id }}</td>
                        <td class="text-yellow-500"><i class="fa-sharp fa-solid fa-pen-to-square" @click="ubah(staff.id)"></i></td>
                        
                    </tr>
               </table>
       </div> 
</template>