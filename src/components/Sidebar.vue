<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <div class="sidebar">
    <div class="logo-details" style="border-bottom: 1px solid white;">
        <div class="logo_name">Sistem Pengurusan LJE</div>
    </div>
    <ul class="nav-list">
      <li>
        <RouterLink to="/home"><i class='bx bx-grid-alt'></i>
          <span class="links_name">Halaman Utama</span>
        </RouterLink>
      </li> 
      <li>
       <RouterLink to="/worker">
         <i class='bx bx-user' ></i>
         <span class="links_name">Pengurusan Pekerja</span>
        </RouterLink>
     </li>
     <li>
       <RouterLink to="/sales">
        <i class='bx bxs-barcode' ></i>
         <span class="links_name">Rekod Jualan</span>
      </RouterLink>
     </li>
     <li>
      <RouterLink to="/promotion">
        <i class='bx bxs-discount' ></i>
         <span class="links_name">Pengurusan Promosi</span>
        </RouterLink>
     </li>
     <li>
       <RouterLink to="/inventory">
         <i class='bx bx-package' ></i>
         <span class="links_name">Pengurusan Inventori</span>
        </RouterLink> 
     </li>
     <li>
       <RouterLink to="/stock">
        <i class='bx bx-show' ></i>
         <span class="links_name">Paparan Stok</span>
       </RouterLink>
     </li>
     <li>
      <RouterLink to="/report">
        <i class='bx bx-stats' ></i>
         <span class="links_name">Laporan</span>
        </RouterLink>
     </li>
     
     <RouterLink to="/">
      <li class="profile">
          <i class='bx bx-log-out' id="log_out" ></i>
      </li>
      </RouterLink>
    </ul>
  </div>
</template>

<style>
.sidebar{
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 250px;
  background: #11101D;
  padding: 6px 14px;
  z-index: 99;
  transition: all 0.5s ease;
}
.sidebar .logo-details{
  height: 60px;
  display: flex;
  align-items: center;
  position: relative;
}
.sidebar .logo-details .logo_name{
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  opacity: 1;
  transition: all 0.5s ease;
}
.sidebar .logo-details #btn{
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  font-size: 22px;
  transition: all 0.4s ease;
  font-size: 23px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s ease;
}
.sidebar.open .logo-details #btn{
  text-align: right;
}
.sidebar i{
  color: #fff;
  height: 60px;
  min-width: 50px;
  font-size: 28px;
  text-align: center;
  line-height: 60px;
}
.sidebar .nav-list{
  margin-top: 20px;
  height: 100%;
}
.sidebar li{
  position: relative;
  margin: 8px 0;
  list-style: none;
}
.sidebar li a{
  display: flex;
  height: 100%;
  width: 100%;
  border-radius: 12px;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  background: #11101D;
}
.sidebar li a:hover{
  background: #FFF;
}
.sidebar li a .links_name{
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  white-space: nowrap;
  opacity: 1;
  pointer-events: none;
  transition: 0.4s;
}
.sidebar.open li a .links_name{
  opacity: 1;
  pointer-events: auto;
}
.sidebar li a:hover .links_name,
.sidebar li a:hover i{
  transition: all 0.5s ease;
  color: #11101D;
}
.sidebar li i{
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  border-radius: 12px;
}
.sidebar li.profile{
  position: fixed;
  height: 60px;
  width: 250px;
  left: 0;
  bottom: -8px; 
  padding: 10px 14px;
  background: #1d1b31;
  transition: all 0.5s ease;
  overflow: hidden;
}
.sidebar .profile #log_out{
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: #1d1b31;
  width: 100%;
  height: 60px;
  line-height: 60px;
  border-radius: 0px;
  transition: all 0.5s ease;
  cursor: pointer;
}
@media (max-width: 420px) {
  .sidebar li .tooltip{
    display: none;
  }
}
</style>