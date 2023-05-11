<script setup>
    import Sidebar from '../components/Sidebar.vue';
    import SubmitButton from '../components/SubmitButton.vue';
    import MyLabel from '../components/MyLabel.vue';
    import PocketBase from 'pocketbase';
    import { onMounted } from 'vue';
    import { ref } from 'vue';
    import router from '../router';
    import { tori } from '../stores';

    const pb = new PocketBase('http://127.0.0.1:8090');

    const namaI = ref("");
    // const gambarI = ref("");
    const idI = ref("");
    const saiz = ref("");
    const hargaI = ref("");
    const kategoriI = ref("");
    const deskripsiI = ref("");

    onMounted(async function (){
        namaI.value=tori.value.namaProduk;
        idI.value=tori.value.idProduk;
        saiz.value=tori.value.saiz;
        hargaI.value=tori.value.hargaProduk;
        kategoriI.value=tori.value.kategori;
        deskripsiI.value=tori.value.deskripsiProduk;
    })

    async function ganti(){
        const data = {
            "namaProduk": namaI.value,
            "idProduk": idI.value,
            "saiz": saiz.value,
            "hargaProduk": hargaI.value,
            "kategori": kategoriI.value,
            "deskripsiProduk": deskripsiI.value,
        };

        const record = await pb.collection('inventori').update(tori.value.id, data);

        tori.value.namaProduk=namaI.value;
        tori.value.idProduk=idI.value;
        tori.value.saiz=saiz.value;
        tori.value.hargaProduk=hargaI.value;
        tori.value.kategori=kategoriI.value;
        tori.value.deskripsiProduk=deskripsiI.value

        alert("Berjaya Ubah Suai Maklumat Produk!");
        redirectBalik();
    }

    function redirectBalik() {
        router.push("/inventory");
    }
</script>

<template>
    <Sidebar class="max-md:hidden"/>
    <div class="bg-blue-100 min-h-screen pl-64 max-md:pl-0">
        <h1 class="text-3xl font-semibold pb-14 text-bl pt-6 pl-5 ">Ubah Suai Maklumat Produk</h1>
        <div class="bg-white w-11/12 m-auto rounded-2xl shadow-2xl">
            <form class="w-3/5 m-auto py-14" v-on:submit.prevent="ganti">
                <h2 class="text-l font-medium pb-7 text-gray-600">Sila Masukkan Maklumat Produk Dalam Ruangan Yang Disediakan</h2>
                        <table class="w-full">
                            <tr>
                                <td class="w-44 py-5"><MyLabel label="Nama Produk"/></td>
                                <td><input type="text" placeholder="Nama Produk" v-model="namaI" class="w-full outline-none border-b-2 border-b-blue-600 bg-slate-50 drop-shadow-md"/></td>
                            </tr>
                            <!-- <tr>
                                <td class="w-44 py-5" ><MyLabel label="Gambar Produk"/></td>
                                <td><input type="file"/></td>
                            </tr> -->
                            <tr>
                                <td class="w-44 py-5"><MyLabel label="ID Produk"/></td>
                                <td><input type="text" placeholder="ID Produk" v-model="idI" class="w-full outline-none border-b-2 border-b-blue-600 bg-slate-50 drop-shadow-md"/></td>
                            </tr>
                            <tr>
                                <td class="w-44 py-5"><MyLabel label="Saiz"/></td>
                                <td><input type="text" placeholder="Saiz Produk" v-model="saiz" class="w-full outline-none border-b-2 border-b-blue-600 bg-slate-50 drop-shadow-md"/></td>
                            </tr>
                            <tr>
                                <td class="w-44 py-5"><MyLabel label="Harga"/></td>
                                <td><input type="text" placeholder="Harga Produk" v-model="hargaI" class="w-full outline-none border-b-2 border-b-blue-600 bg-slate-50 drop-shadow-md"/></td>
                            </tr>
                            <tr>
                                <td class="w-44 py-5"><MyLabel label="Kategori"/></td>
                                <td><select name="kategori" id="kategori" v-model="kategoriI" class="outline-none border-b-2 border-blue-600 drop-shadow-lg">
                                        <option value="">--Pilih Kategori--</option>
                                        <option value="K1">K1</option>
                                        <option value="K2">K2</option>
                                    </select></td>
                            </tr>
                            <tr>
                                <td class="w-44 py-5"><MyLabel label="Deskripsi"/></td>
                                <td><textarea type="text" placeholder="Deskripsi Produk" v-model="deskripsiI" class="w-full outline-none border-b-2 border-b-blue-600 bg-slate-50 drop-shadow-md"/></td>
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