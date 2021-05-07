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
import Section from "../components/clientComponents/Section";

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Section
  }
}
</script>
