<template>
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <img src="/assets/logo.png" alt="SAZZ24-7" />
          </div>
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
    top: 60px;
    width: 100%;
    z-index: 1000;
  }
  
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo img {
    max-width: 150px;
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
  



  