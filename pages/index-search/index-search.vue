<template>
    <view>
        {{opName}}
    </view>
</template>

<script>
    export default {
        data() {
            return {
                opName: ""
            }
        },
        methods: {},
        onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
            console.log(option.type); //打印出上个页面传递的参数。
            console.log(option.name); //打印出上个页面传递的参数。
            this.opName = option.name;
        }
    }
</script>

<style>

</style>
