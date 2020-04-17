<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="praise_bubble" ref="praise_bubble">
        <img class="bubble  b_offset" src="@/assets/image/bubble.jpg" alt="图片加载失败">
    </div>
  </div>
</template>
<style lang="scss">
  .about{
    .praise_bubble{
      width: 100px;
      height: 300px;
      position: relative;
      background: #f4f4f4;
      margin: auto;

    }
    .bubble{
      position: absolute;
      left:23%;
      bottom: 0;
      height: 50px;
    }

    .b_offset{
       animation: bubble_offset 3s linear 1 forwards;

    }
    @keyframes bubble_offset{
      0%{
         transform: scale(0.3);
          margin-bottom: 0;
      }
      25%{
        margin-left: -8px;
      }
      50%{
        margin-left: 8px;
        transform: scale(1);
      }
      75%{
        margin-left: -15px;
        opacity: 1;
      }
      100%{
        margin-left: 15px;
        opacity: 0;
        margin-bottom: 250px;
      }
    }
  }
</style>
