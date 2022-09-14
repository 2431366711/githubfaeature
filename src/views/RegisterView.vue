<template>
    <div>
       <header-con></header-con>
       <register-con></register-con>
       <footer-con></footer-con>
    </div>
</template>

<script>
import HeaderCon from '../components/HeaderCon.vue'
import FooterCon from '../components/FooterCon.vue'
import RegisterCon from '../components/RegisterCon.vue'
    export default {
        components:{
            HeaderCon,
            FooterCon,
            RegisterCon
        }
    }
</script>

<style lang="scss" scoped>

</style>