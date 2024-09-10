<template>
  <div
    class="detailWrap d-flex justify-content-center align-items-center w-auto p-5"
  >
    <div
      class="inner d-flex justify-content-center align-items-center flex-column"
    >
      <img :src="$store.state.selectedUser?.img" alt="" class="innerImg mb-3" />
      <div class="innerText text-center fw-bold">
        <h1 class="mb-3">{{ $store.state.selectedUser?.userid }}</h1>
        <p>비밀번호: {{ $store.state.selectedUser?.password }}</p>
        <p>이름: {{ $store.state.selectedUser?.username }}</p>
        <p>주소: {{ $store.state.selectedUser?.addr }}</p>
      </div>
    </div>
    <div class="btn btn-danger" @click="$store.commit('closeDetailModal')">
      닫기
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.detailWrap {
  transition: 0.3s;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3); // (r, g, b, opacity)
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .inner {
    background-color: #fff;
    border-radius: 7px;
    padding: 75px;
    .innerImg {
      border: 5px solid var(--main-color);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      width: 200px;
      height: 200px;
    }
  }
}
</style>
