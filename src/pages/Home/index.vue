<template>
        <!-- 商品分类导航 -->
<div>
    <typeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor/>
    <Grand/>
</div>

</template>

<script>
import ListContainer from '@/pages/Home/ListContainer';
import Recommend from '@/pages/Home/Recommend';
import Rank from '@/pages/Home/Rank';
import Like from '@/pages/Home/Like';
import Floor from '@/pages/Home/Floor';
import Grand from '@/pages/Home/Grand';

import {mapState} from 'vuex';
export default {
    name: '',
    components:{
        ListContainer,
        Recommend,
        Rank,
        Like,
        Floor,
        Grand,
    },
    computed:{
       
    },
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="less" scoped>

</style>