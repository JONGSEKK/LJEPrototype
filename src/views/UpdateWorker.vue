<script setup>
import Sidebar from '../components/Sidebar.vue';
import SubmitButton from '../components/SubmitButton.vue';
import MyLabel from '../components/MyLabel.vue';
import PocketBase from 'pocketbase';
import { onMounted } from 'vue';
import { ref } from 'vue';
import { pekerja } from '../stores';
import router from '../router';

const pb = new PocketBase('http://127.0.0.1:8090');

const namapenuh = ref("");
const noKP = ref("");
const alamat = ref("");
const telefon = ref("");
const emel = ref("");
const peranan = ref("");
const staff = ref("");
const password = ref("");

onMounted(async function (){
    namapenuh.value=pekerja.value.nama;
    noKP.value=pekerja.value.noKP;
    alamat.value=pekerja.value.alamat;
    telefon.value=pekerja.value.telefon;
    emel.value=pekerja.value.emel;
    peranan.value=pekerja.value.peranan;
    staff.value=pekerja.value.staff_id;
    password.value=pekerja.value.katalaluan;
})

async function ganti(){
    const data = {
        "nama": namapenuh.value,
        "noKP": noKP.value,
        "alamat": alamat.value,
        "telefon": telefon.value,
        "emel": emel.value,
        "peranan": peranan.value,
        "staff_id": staff.value,
        "katalaluan": password.value,
    };

    const record = await pb.collection('staff').update(pekerja.value.id, data);

    pekerja.value.nama=namapenuh.value;
    pekerja.value.noKP=noKP.value;
    pekerja.value.alamat=alamat.value;
    pekerja.value.telefon=telefon.value;
    pekerja.value.emel=emel.value;
    pekerja.value.peranan=peranan.value;
    pekerja.value.staff_id=staff.value;
    pekerja.value.katalaluan=password.value;

    alert("Berjaya Ubah Suai Maklumat Pekerja!");
    redirectHomepage();
}

function redirectHomepage() {
    router.push("/worker");
}

</script>

<template>
    <Sidebar class="max-md:hidden"/>
    <div class="bg-blue-100 min-h-screen pl-64 max-md:pl-0">
        <h1 class="text-3xl font-semibold pb-14 text-bl pt-6 pl-5 ">Ubah Suai Maklumat Pekerja</h1>
        <div class="bg-white w-11/12 m-auto rounded-2xl shadow-2xl">
            <form class="w-3/5 m-auto py-14" @submit.prevent="ganti()">
                <h2 class="text-l font-medium pb-7 text-gray-600">Sila Masukkan Maklumat Baru Pekerja Dalam Ruangan Yang Disediakan</h2>
                        <table class="w-full">
                            <tr>
                                <td class="w-44 py-5"><MyLabel label="Nama"/></td>
                                <td><input type="text" placeholder="Nama Pekerja" v-model="namapenuh" class="w-full outline-none border-b-2 border-b-blue-600 bg-slate-50 drop-shadow-md"/></td>
                            </tr>
                            <tr>
                                <td class="w-44 py-5"><MyLabel label="Nombor K/P"/></td>
                                <td><input type="text" placeholder="Nombor Kad Pengenalan Pekerja" v-model="noKP" class="w-full outline-none border-b-2 border-b-blue-600 bg-slate-50 drop-shadow-md"/></td>
                            </tr>
                            <tr>
                                <td class="w-44 py-5"><MyLabel label="Alamat"/></td>
                                <td><textarea type="text" placeholder="Alamat Pekerja" v-model="alamat" class="w-full outline-none border-b-2 border-b-blue-600 bg-slate-50 drop-shadow-md"/></td>
                            </tr>
                            <tr>
                                <td class="w-44 py-5"><MyLabel label="Nombor Telefon"/></td>
                                <td><input type="text" placeholder="Nombor Telefon Pekerja" v-model="telefon" class="w-full outline-none border-b-2 border-b-blue-600 bg-slate-50 drop-shadow-md"/></td>
                            </tr>
                            <tr>
                                <td class="w-44 py-5"><MyLabel label="Emel"/></td>
                                <td><input type="text" placeholder="Emel Pekerja" v-model="emel" class="w-full outline-none border-b-2 border-b-blue-600 bg-slate-50 drop-shadow-md"/></td>
                            </tr>
                            <tr>
                                <td class="w-44 py-5"><MyLabel label="Peranan"/></td>
                                <td><select name="Peranan" id="Peranan" v-model="peranan" class="outline-none border-b-2 border-blue-600 drop-shadow-lg">
                                        <option value="">--Pilih Peranan--</option>
                                        <option value="Pekerja">Pekerja</option>
                                        <option value="Pengurus">Pengurus</option>
                                    </select></td>
                            </tr>
                            <tr>
                                <td class="w-44 py-5"><MyLabel label="ID"/></td>
                                <td><input type="text" placeholder="ID Pekerja" v-model="staff" class="w-full outline-none border-b-2 border-b-blue-600 bg-slate-50 drop-shadow-md"/></td>
                            </tr>
                            <tr>
                                <td class="w-44 py-5"><MyLabel label="Kata Laluan"/></td>
                                <td><input type="text" placeholder="Kata Laluan Pekerja" v-model="password" class="w-full outline-none border-b-2 border-b-blue-600 bg-slate-50 drop-shadow-md"/></td>
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