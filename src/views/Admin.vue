<template>
  <div>
    <Header></Header>
    <Section></Section>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from "../components/adminComponents/Section";

export default {
  name: 'Admin',
  components: {
    Header,
    Footer,
    Section
  }
}
</script>

<style>
.img-section {
  width: 85px;
  height: 85px;
  object-fit: cover;
}
.img-children {
  width: 55px;
  height: 55px;
  object-fit: cover;
}
.img-allergens {
  width: 30px;
}
.img-dish {
  width: 100%;
  max-width: 300px;
  object-fit: cover;
}
</style>
