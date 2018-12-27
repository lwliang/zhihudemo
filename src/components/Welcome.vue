<template>
    <transition name>
        <div class="welcome" :class="{ hide:isHide }">
            <div class="img-wrap">
                <img src="../assets/images/welcome.jpg" alt="" width="100%" height="100%"/>
                <span class="author">Kimon&nbsp;&nbsp;Maritz</span>
            </div>

            <div class="text-wrap">
                <div class="logo"></div>
                <div class="text">
                    <span class="title">知乎日报</span>
                    <span class="bio">每天三次，每次七分钟</span>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "Welcome",
        data: function () {
            return {
                isHide: false
            };
        },
        created: function () {
            let isFirstLoad = this.$store.state.isFirstLoad;

            if (isFirstLoad) {
                setTimeout(() => {
                    this.isHide = true;
                }, 3500);//隐藏
            } else {
                this.isHide = true;
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../assets/less/components/Welcome.less";
</style>