<script setup>
import Sidebar from '../components/Sidebar.vue';
import SubmitButton from '../components/SubmitButton.vue';
import MyLabel from '../components/MyLabel.vue';
import PocketBase from 'pocketbase';
import { onMounted } from 'vue';
import { ref } from 'vue';
import { pekerja } from '../stores';
import { RouterLink } from 'vue-router';

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

</script>

<template>
   <Sidebar class="max-md:hidden"/>
    <div class="bg-blue-100 min-h-screen pl-64 max-md:pl-0">
        <h1 class="text-3xl font-semibold pb-14 text-bl pt-6 pl-5 ">Papar Maklumat Pekerja</h1>
        <div class="bg-white w-11/12 m-auto rounded-2xl shadow-2xl">
            <form class="w-3/5 m-auto py-14">
                        <table class="w-full">
                            <tr>
                                <td class="w-44 py-5"><MyLabel label="Nama"/></td>
                                <td>{{ namapenuh }}</td>
                            </tr>
                            <tr>
                                <td class="w-44 py-5"><MyLabel label="Nombor K/P"/></td>
                                <td>{{ noKP}}</td>
                            </tr>
                            <tr>
                                <td class="w-44 py-5"><MyLabel label="Alamat"/></td>
                                <td>{{alamat}}</td>
                            </tr>
                            <tr>
                                <td class="w-44 py-5"><MyLabel label="Nombor Telefon"/></td>
                                <td>{{telefon}}</td>
                            </tr>
                            <tr>
                                <td class="w-44 py-5"><MyLabel label="Emel"/></td>
                                <td>{{emel}}</td>
                            </tr>
                            <tr>
                                <td class="w-44 py-5"><MyLabel label="Peranan"/></td>
                                <td>{{ peranan }}</td>
                            </tr>
                            <tr>
                                <td class="w-44 py-5"><MyLabel label="ID"/></td>
                                <td>{{staff}}</td>
                            </tr>
                            <tr>
                                <td class="w-44 py-5"><MyLabel label="Kata Laluan"/></td>
                                <td>{{password}} </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <RouterLink to="/worker">
                                        <SubmitButton style="width:100%" label="Kembali"/>
                                    </RouterLink>
                                </td>
                            </tr>
                        </table>
            </form>
        </div>
    </div>
</template>