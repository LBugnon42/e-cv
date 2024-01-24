<script setup lang="ts">
import Router from "@/components/HeaderRouter.vue"
</script>

<template>
  <main>
    <h1>Accueil</h1>
    
    <div class="miniPresentation">
      <div class="cerclePhoto">
        <img src="@/assets/photoCV.jpg">
      </div>
      <div class="textPresentation">
        <h1> Hello ! I'm Lucas ! </h1>
        <h2> I'm a French software developer </h2>
        <h2> I like to discover the world around me and learn new and exciting things </h2>
      </div>
      <Router></Router>
    </div>
    
  </main>
</template>

<style>
  .miniPresentation{
    margin-left: 15%;
    margin-right: 15%;
  }

  .cerclePhoto{
    width: 400px;
    height: 400px;
    background-color: #9867C5;
    border-radius: 100%;
    display: inline-block;
    position:relative;
  }

  .cerclePhoto img{
    width: 300px; 
    height: 300px;
    border-radius: 100%;
    margin-top: 70px; 
    margin-left: 50px;
  }

  .textPresentation{
    display: inline-block;
    position:fixed; 
  }

  .textPresentation h1{
    text-align: left;
  }

  .textPresentation h2{
    margin-left: 20px;
    margin-right: 15%;
  }
</style>