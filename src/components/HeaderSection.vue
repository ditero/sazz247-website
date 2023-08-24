<template>
    <header class="header">
      <div class="container">
        <div class="header-content">
          <!-- <div class="logo">
            <img src="@/assets/sazz.png" alt="SAZZ24-7" />
          </div> -->
          <v-img src="@/assets/sazz.png" alt="SAZZ24-7" max-width="90px" top="5px" left="10px"></v-img>
          <!-- <v-img
            src="@/assets/sazz.png" alt="SAZZ24-7"
        ></v-img> -->
          <nav class="navigation">
            <ul class="nav-links">
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/services">Services</router-link></li>
              <li><router-link to="/about">About</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    // Component logic here
  };
  </script>
  
  <style scoped>
  .header {
    background-color: #d0a12bbb;
    color: #ffffff;
    padding: 20px 0;
    position: fixed;
    top: 25px;
    width: 100%;
    z-index: 1000;
  }
  
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .nav-links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  
  .nav-links li {
    margin-right: 20px;
  }
  
  .nav-links a {
    color: #ffffff;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.3s ease;
  }
  
  .nav-links a:hover {
    color: #ffd700;
  }
  </style>
  



  