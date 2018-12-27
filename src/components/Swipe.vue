<template>
    <div class="swipe">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="topStory in topStories" :key="topStory.id"
                           @click.native="viewDetail(topStory.id)">
                <img :src="attachImageUrl(topStory.image)" :alt="topStory.title"/>
                <span class="">{{topStory.title}}</span>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    import axios from 'axios';
    import router from '../router';

    export default {
        name: "swipe",
        data() {
            return {
                topStories: {}
            };
        },
        created() {
            axios.get('api/news/latest')
                .then(response => {
                    this.topStories = response.data.top_stories;
                }).catch(error => {
                //console.log(error);
                console.log(error);
            });
        },
        methods: {
            // 跳转到对应id的文章详情页
            viewDetail: function (id) {
                router.push({name: 'newsDetail', params: {id: id}});
            },
            attachImageUrl: function (srcUrl) {
                if (srcUrl !== undefined) {
                    return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
                }
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../assets/less/components/Swipe.less";
</style>