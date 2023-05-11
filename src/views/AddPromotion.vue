<script setup>
import Sidebar from '../components/Sidebar.vue';
import PocketBase from 'pocketbase';
import SubmitButton from '../components/SubmitButton.vue';
import MyLabel from '../components/MyLabel.vue';
import { ref } from 'vue';
import router from '../router';
document.title = "Daftar Pekerja";

const namaP = ref("");
const hargaP = ref("");
const deskripsiP = ref("");
const kategori = ref("");

const pb = new PocketBase('http://127.0.0.1:8090');

async function daftarP(){
    const data = {
    "namaPromosi": namaP.value,
    "hargaPromosi": hargaP.value,
    "deskripsiPromosi": deskripsiP.value,
    "kategori": kategori.value,
    };

    const record = await pb.collection('promosi').create(data);
    console.log(record);

    alert('Successful');
    redirectBack();

    namaP.value = "";
    hargaP.value = "";
    deskripsiP.value = "";
    kategori.value = "";
}

function redirectBack() {
    router.push("/promotion");
}
</script>

<template>
    <Sidebar class="max-md:hidden"/>
    <div class="bg-blue-100 min-h-screen pl-64 max-md:pl-0">
        <h1 class="text-3xl font-semibold pb-14 text-bl pt-6 pl-5 ">Daftar Promosi</h1>
        <div class="bg-white w-11/12 m-auto rounded-2xl shadow-2xl">
            <form class="w-3/5 m-auto py-14" v-on:submit.prevent="daftarP">
                <h2 class="text-l font-medium pb-7 text-gray-600">Sila Masukkan Maklumat Promosi Dalam Ruangan Yang Disediakan</h2>
                        <table class="w-full">
                            <tr>
                                <td class="w-44 py-5"><MyLabel label="Nama Promosi"/></td>
                                <td><input type="text" placeholder="Nama Promosi" v-model="namaP" class="w-full outline-none border-b-2 border-b-blue-600 bg-slate-50 drop-shadow-md"/></td>
                            </tr>
                            <tr>
                                <td class="w-44 py-5"><MyLabel label="Harga Promosi"/></td>
                                <td><input type="text" placeholder="Harga Promosi (RM)" v-model="hargaP" class="w-full outline-none border-b-2 border-b-blue-600 bg-slate-50 drop-shadow-md"/></td>
                            </tr>
                            <tr>
                                <td class="w-44 py-5"><MyLabel label="Deskripsi"/></td>
                                <td><textarea type="text" placeholder="Deskripsi Promosi" v-model="deskripsiP" class="w-full outline-none border-b-2 border-b-blue-600 bg-slate-50 drop-shadow-md"/></td>
                            </tr>
                            <tr>
                                <td class="w-44 py-5"><MyLabel label="Kategori Terlibat"/></td>
                                <td><select name="kategori" id="kategori" v-model="kategori" class="outline-none border-b-2 border-blue-600 drop-shadow-lg">
                                        <option value="">--Pilih kategori--</option>
                                        <option value="K1">K1</option>
                                        <option value="K2">K2</option>
                                    </select></td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <SubmitButton style="width:100%" label="Simpan"/>
                                </td>
                            </tr>
                        </table>
            </form>
        </div>
    </div>
</template>

<style>

</style>