<script setup>
import Sidebar from '../components/Sidebar.vue';

</script>

<template >
    <Sidebar class="max-md:hidden"/>
    <div class="bg-blue-100 min-h-screen pl-64 max-md:pl-0">
        <h1 class="text-4xl font-semibold pb-7 pt-6 pl-5">Laporan Jualan</h1>
        <h2 class="text-lg pb-7 text-gray-600 text-center">Sila Masukkan Tarikh atau Pilih Bulan dan Tahun Bagi Tujuan Penapisan</h2>
        <div class="w-4/5 flex m-auto justify-around">
            <div class="w-3/5">
                <table>
                    <tr>
                        <td>
                            <h3 class="pr-7">Tarikh :</h3>
                        </td>
                        <td class="w-10/12">
                            <input type="text" placeholder="Tarikh" class="h-9 outline-none rounded-2xl w-full pl-6 shadow-xl"/>
                        </td>
                    </tr>
                </table>
            </div>
            <div>
                <table>
                    <tr>
                        <td class="pr-6">
                            <h3>Pilih Bulan:</h3>
                        </td>
                        <td>
                            <select name="bulan" id="bulan" class="outline-none rounded-lg drop-shadow-lg">
                                <option value="">--Pilih bulan--</option>
                                <option value="1">Januari</option>
                                <option value="2">Fabruari</option>
                                <option value="3">Mac</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                            </select>
                        </td>
                        <td class="pr-6 pl-7">
                            <h3 >Pilih Tahun:</h3>
                        </td>
                        <td>
                            <select name="tahun" id="tahun" class="outline-none rounded-lg drop-shadow-lg">
                                <option value="">--Pilih tahun--</option>
                                <option value="1">2022</option>
                                <option value="2">2023</option>
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
                       <th class="bg-sky-300 border-r-2 border-blue-400">ID Jualan</th>
                       <th class="bg-sky-300 border-r-2 border-blue-400">ID Produk</th>
                       <th class="bg-sky-300 border-r-2 border-blue-400">Kuantiti</th>
                       <th class="bg-sky-300 ">Jumlah</th>
                   </tr>
                   <tr class="text-center h-12 ">
                        <td>1</td>
                        <td>J001</td>
                        <td>BV01</td>
                        <td>2</td>
                        <td>RM70</td>
                   </tr>
                   <tr class="text-center h-12 ">
                        <td>2</td>
                        <td>J002</td>
                        <td>JE01</td>
                        <td>2</td>
                        <td>RM86</td>
                   </tr>
            </table>
        </div>
    </div>
</template>