import { createStore } from "vuex";

export default createStore({
  state: {
    userData: [
      {
        userid: "friend5hip",
        password: "wjsdnwjd",
        username: "전우정",
        addr: "서울",
        lat: "37.48215173449151",
        lon: "126.87967868125399",
        img: "https://picsum.photos/seed/1/100",
      },
      {
        userid: "waybronze1234",
        password: "ghdrlfehd",
        username: "홍길동",
        addr: "서울",
        lat: "37.48289221824694",
        lon: "126.88131691845201",
        img: "https://picsum.photos/seed/2/100",
      },
      {
        userid: "steelwater679",
        password: "rlacjftn",
        username: "김철수",
        addr: "서울",
        lat: "37.47954445709484",
        lon: "126.88535840986323",
        img: "https://picsum.photos/seed/3/100",
      },
      {
        userid: "yhpark0212",
        password: "qkrdudgml99",
        username: "박영희",
        addr: "서울",
        lat: "37.48361852389308",
        lon: "126.886923786908",
        img: "https://picsum.photos/seed/1/100",
      },
    ],
    selectedUser: null,
    coords: {
      moveLat: "0",
      moveLon: "0",
    },
    isMapModal: false,
    isDetailModal: false,
  },
  mutations: {
    addUser(state, payload) {
      state.userData.push(payload);
      console.log("User added: " + state.userData.userid);
    },
    updateUser(state, payload) {
      const userIndex = state.userData.findIndex(
        (user) => user.userid === payload.userid
      );

      if (userIndex !== -1) {
        state.userData[userIndex].username = payload.username;
        state.userData[userIndex].password = payload.password;
        state.userData[userIndex].addr = payload.addr;
        state.userData[userIndex].img = payload.img;
        console.log("Updated User ID " + payload.userid);
      } else {
        alert("사용자가 없습니다.");
        console.log("Update: User not found");
      }
    },
    deleteUser(state, payload) {
      const userIndex = state.userData.findIndex(
        (user) => user.userid === payload
      );

      // 유저가 존재하면 splice로 해당 유저를 배열에서 삭제
      state.userData.splice(userIndex, 1);
      console.log("Deleted User ID " + payload);
    },
    selectUser(state, user) {
      state.selectedUser = user; // 선택된 유저를 저장
    },
    openMapModal(state) {
      state.isMapModal = true;
    },
    openDetailModal(state) {
      state.isDetailModal = true;
    },
    closeDetailModal(state) {
      state.isDetailModal = false;
    },
    closeMapModal(state) {
      state.isMapModal = false;
    },
    updateLocation(state, payload) {
      state.coords.moveLat = payload.lat;
      state.coords.moveLon = payload.lon;
      console.log(
        "Selected Location: " +
          state.coords.moveLat +
          " " +
          state.coords.moveLon
      );
    },
  },
});
