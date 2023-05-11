<script setup>
import Sidebar from '../components/Sidebar.vue';
import MyLabel from '../components/MyLabel.vue';
import SubmitButton from '../components/SubmitButton.vue';
import { ref } from 'vue';
import { onMounted } from 'vue';

    import PocketBase from 'pocketbase'; 
    import { tori } from '../stores';

    const pb = new PocketBase('http://127.0.0.1:8090');

    const idCarian = ref("");

    async function cari(idCari){
       
        const ehek = {
            "idCari": idCarian.value,
        };

        const record = await pb.collection('inventori').getFirstListItem( `idProduk="idCari"`, ehek);
        tori.value=record;

    }
    
    onMounted(async function(){
        const props = {
            name : tori.value.namaProduk,
            aidi : tori.value.idProduk,
            description : tori.value.deskripsiProduk,
            price : tori.value.hargaProduk,
        };
    })

    // const namaI = ref("");
    // // const gambarI = ref("");
    // const idI = ref("");
    // const hargaI = ref("");
    // const deskripsiI = ref("");

    // onMounted(async function (){
    //     namaI.value=tori.value.namaProduk;
    //     idI.value=tori.value.idProduk;
    //     hargaI.value=tori.value.hargaProduk;
    //     deskripsiI.value=tori.value.deskripsiProduk;
    // })
    
</script>

<template>
    <Sidebar class="max-md:hidden"/>
    <div class="bg-blue-100 min-h-screen pl-64 max-md:pl-0">
        <h1 class="text-4xl font-semibold pb-7 pt-6 pl-5">Rekod Jualan</h1>
            <div class="bg-white w-11/12 m-auto  rounded-2xl shadow-2xl">
                <form class="w-3/5 m-auto py-14" v-on:submit.prevent="register">
                    <h2 class="text-xl font-medium pb-7 text-gray-600">Sila Masukkan Maklumat Jualan Di Ruangan Yang Diperlukan.</h2>
                        <table class="w-full">
                            <tr>
                                <td class="w-44 py-5"><MyLabel label="ID Produk"/></td>
                                <td><input type="text" placeholder="Masukkan secara manual atau imbas kod bar" v-model="idCarian" class="w-3/5 outline-none border-b-2 border-b-blue-600 bg-slate-50 drop-shadow-md"/></td>
                                <td><SubmitButton @click="cari(inventori.id)" style="width:100%" label="Cari" /></td>
                            </tr>
                            <tr>
                                <td colspan="2" class="py-6">
                                    <div class="border-solid border-2 border-blue-600 rounded-xl shadow-xl px-14 flex m-auto ">
                                        <div class="pr-20 py-5 w-3/5">
                                            <table>
                                                <tr>
                                                    <td>
                                                        <MyLabel label="ID Produk" style="padding-top: 10px; padding-bottom: 10px;"></MyLabel>
                                                    </td>
                                                    <td class="pl-10 text-blue-600 font-semibold">
                                                        <p>{{ aidi }}</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <MyLabel label="Nama Produk " style="padding-top: 10px; padding-bottom: 10px;"></MyLabel>
                                                    </td>
                                                    <td class="pl-10 text-blue-600 font-semibold">
                                                        <p>{{ name }}</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <MyLabel label="Deskripsi Produk" style="padding-top: 10px; padding-bottom: 10px;"></MyLabel>
                                                    </td>
                                                    <td class="pl-10 text-blue-600 font-semibold">
                                                        <p>{{ description }}</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <MyLabel label="Harga Produk" style="padding-top: 10px; padding-bottom: 10px;"></MyLabel>
                                                    </td>
                                                    <td class="pl-10 text-blue-600 font-semibold">
                                                        <p>{{ price }}</p>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div class="border-solid border  border-gray-600 h-40 my-auto"></div>
                                        <div class="w-1/5 py-5 m-auto">
                                            <MyLabel label="Gambar Produk" style="text-align:center;"></MyLabel>
                                            <div class="border-2 border-solid border-black rounded-lg px-3 py-3">
                                                <img src="../assets/vue.svg" class="w-full h-full">
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="w-44 py-5"><MyLabel label="Kuantiti Produk"/></td>
                                <!-- <td><select name="Kuantiti" id="Kuantiti" v-model="kuantiti" class="outline-none border-b-2 border-blue-600 drop-shadow-lg">
                                        <option value="">--Pilih Kuantiti--</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select></td> -->
                                    <td><input type="number" placeholder="Kuantiti Produk" v-model="kuantiti" class="w-1/5 outline-none border-b-2 border-b-blue-600 bg-slate-50 drop-shadow-md"/></td>
                            </tr>
                            <!-- <tr>
                                <td class="w-44 py-5"><MyLabel label="Promosi"/></td>
                                <td><select name="Promosi" id="Promosi" v-model="promosi" class="outline-none border-b-2 border-blue-600 drop-shadow-lg">
                                        <option value="">--Pilih Promosi--</option>
                                        <option value="1">P1</option>
                                        <option value="2">P2</option>
                                        <option value="3">P3</option>
                                        <option value="4">P4</option>
                                        <option value="5">P5</option>
                                    </select></td>
                            </tr> -->
                            <tr class="h-10">
                                <td class="w-44 py-5"><MyLabel label="Jumlah" style="font-size: x-large;"/></td>
                                <td class="font-semibold text-3xl">RM 0.00</td>
                            </tr>
                           
                            <tr>
                                <td colspan="2">
                                    <SubmitButton style="width:100%" label="Rekod"/>
                                </td>
                            </tr>
                        </table>
                </form>
            </div>
            <br>
    <br>
    </div>
    
</template>