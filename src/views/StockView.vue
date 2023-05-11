<script setup>
    import Sidebar from '../components/Sidebar.vue';
    import PocketBase from 'pocketbase';
    import { onMounted } from 'vue';
    import { ref } from 'vue';
    import { inven } from '../stores';

    const pb = new PocketBase('http://127.0.0.1:8090');

onMounted(async function () {
    const records = await pb.collection('inventori').getFullList(200 /* batch size */, {
        sort: 'created',
    });
    
    inven.value = records;
    
})
</script>

<template >
    <Sidebar class="max-md:hidden"/>
    <div class="bg-blue-100 min-h-screen pl-64 max-md:pl-0">
        <h1 class="text-4xl font-semibold pb-7 pt-6 pl-5">Paparan Stok</h1>
        <h2 class="text-lg pb-7 text-gray-600 text-center">Sila Masukkan Maklumat Produk atau Pilih Kategori Bagi Tujuan Penapisan</h2>
        <div class="w-4/5 flex m-auto justify-around">
            <div class="w-3/5">
                <table>
                    <tr>
                        <td>
                            <h3 class="pr-7">Cari Produk :</h3>
                        </td>
                        <td class="w-10/12">
                            <input type="text" placeholder="Carian Produk" class="h-9 outline-none rounded-2xl w-full pl-6 shadow-xl"/>
                        </td>
                    </tr>
                </table>
            </div>
            <div>
                <table>
                    <tr>
                        <td class="pr-6">
                            <h3>Pilih Kategori:</h3>
                        </td>
                        <td>
                            <select name="kategori" id="kategori" v-model="kategori" class="outline-none rounded-lg drop-shadow-lg">
                                <option value="">--Pilih kategori--</option>
                                <option value="K1">K1</option>
                                <option value="K2">K2</option>
                            </select>
                        </td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="w-10/12 bg-gray-200 shadow-2xl px-8 py-8 m-auto mt-10 rounded-2xl">
            <h2 class="pb-6 text-2xl font-semibold">Senarai Stok</h2>
            <table class="w-full shadow-xl bg-white">
                <tr class="h-9">
                       <th class="bg-sky-300 border-r-2 border-blue-400">Bilangan</th>
                       <th class="bg-sky-300 border-r-2 border-blue-400">Nama Produk</th>
                       <th class="bg-sky-300 border-r-2 border-blue-400">ID Produk</th>
                       <th class="bg-sky-300 border-r-2 border-blue-400">Saiz</th>
                       <th class="bg-sky-300 border-r-2 border-blue-400">Harga Produk</th>
                       <th class="bg-sky-300 border-r-2 border-blue-400">Kategori</th>
                       <th class="bg-sky-300 border-r-2 border-blue-400">Kuantiti</th>
                       <th class="bg-sky-300">Deskripsi Produk</th>
                   </tr>
                   <tr class="text-center h-12 " v-for="inventori in inven" >
                       <td>{{ inven.indexOf(inventori)+1 }}</td>
                       <td>{{ inventori.namaProduk }}</td>
                       <td>{{ inventori.idProduk }}</td>
                       <td>{{ inventori.saiz }}</td>
                       <td>RM {{ inventori.hargaProduk }}</td>
                       <td>{{ inventori.kategori }}</td> 
                       <td>{{ inventori.kuantiti }}</td> 
                       <td>{{ inventori.deskripsiProduk }}</td>
                   </tr>
            </table>
        </div>
    </div>
</template>