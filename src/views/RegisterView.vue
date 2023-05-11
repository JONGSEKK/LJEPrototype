<script setup>
import PocketBase from 'pocketbase';
import SubmitButton from '../components/SubmitButton.vue';
import MyLabel from '../components/MyLabel.vue';
import { ref } from 'vue';
document.title = "Daftar Pekerja";

const namapenuh = ref("");
const noKP = ref("");
const alamat = ref("");
const telefon = ref("");
const emel = ref("");
const peranan = ref("");
const staff = ref("");
const password = ref("");

const pb = new PocketBase('http://127.0.0.1:8090');

async function register(){
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

const record = await pb.collection('staff').create(data);
console.log(record);

alert('Successful');

}

</script>

<template>
    <div class="grid grid-cols-2 min-h-screen max-md:block relative">
        <img src="../assets/Fluid-10s-1920px.png" class="absolute -z-10" alt="">
        <div class="grid place-items-center max-md:hidden">
            <img src="../assets/undraw_resume_re_hkth.svg" alt="" >
        </div>
        <div class="grid place-items-center max-md:pt-32 " >
            <div class="bg-white w-4/5 h-4/5 drop-shadow-2xl">
                <h1 class="text-center pt-14 text-5xl font-semibold tracking-wider leading-snug text-blue-900">Pendaftaran Pekerja</h1>
                <h2 class="text-center text-l font-medium pb-12">Sila Masukkan Maklumat Pekerja Dalam Ruangan Yang Disediakan</h2>

                <form class="pl-24" v-on:submit.prevent="register">
                    <table class="w-full">
                        <tr>
                            <td class="w-36"><MyLabel label="Nama"/></td>
                            <td><input type="text" placeholder="Nama Pekerja" v-model="namapenuh" class="w-4/5 outline-none border-b-2 border-b-blue-600 bg-slate-50 drop-shadow-md"/></td>
                        </tr>
                        <tr>
                            <td><MyLabel label="Nombor K/P"/></td>
                            <td><input type="text" placeholder="Nombor Kad Pengenalan Pekerja" v-model="noKP" class="w-4/5 outline-none border-b-2 border-b-blue-600 bg-slate-50 drop-shadow-md"/></td>
                        </tr>
                        <tr>
                            <td><MyLabel label="Alamat"/></td>
                            <td><input type="text" placeholder="Alamat Pekerja" v-model="alamat" class="w-4/5 outline-none border-b-2 border-b-blue-600 bg-slate-50 drop-shadow-md"/></td>
                        </tr>
                        <tr>
                            <td><MyLabel label="Nombor Telefon"/></td>
                            <td><input type="text" placeholder="Nombor Telefon Pekerja" v-model="telefon" class="w-4/5 outline-none border-b-2 border-b-blue-600 bg-slate-50 drop-shadow-md"/></td>
                        </tr>
                        <tr>
                            <td><MyLabel label="Emel"/></td>
                            <td><input type="text" placeholder="Emel Pekerja" v-model="emel" class="w-4/5 outline-none border-b-2 border-b-blue-600 bg-slate-50 drop-shadow-md"/></td>
                        </tr>
                        <tr>
                            <td><MyLabel label="Peranan"/></td>
                            <td><select name="Peranan" id="Peranan" v-model="peranan" class="outline-none border-b-2 border-blue-600 drop-shadow-lg">
                                    <option value="">--Pilih Peranan--</option>
                                    <option value="Pekerja">Pekerja</option>
                                    <option value="Pengurus">Pengurus</option>
                                </select></td>
                        </tr>
                        <tr>
                            <td><MyLabel label="ID"/></td>
                            <td><input type="text" placeholder="ID Pekerja" v-model="staff" class="w-4/5 outline-none border-b-2 border-b-blue-600 bg-slate-50 drop-shadow-md"/></td>
                        </tr>
                        <tr>
                            <td><MyLabel label="Kata Laluan"/></td>
                            <td><input type="text" placeholder="Kata Laluan Pekerja" v-model="password" class="w-4/5 outline-none border-b-2 border-b-blue-600 bg-slate-50 drop-shadow-md"/></td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <SubmitButton style="width:85%;" label="Daftar Masuk"/>
                            </td>
                        </tr>
                    </table>
    
                </form>
                
            </div>
        </div>
    </div>
</template>

<style>
.pl-24 .w-full td{
    padding-bottom: 25px;
}
</style>