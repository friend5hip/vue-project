<template>
  <div id="map" style="height: 100vh"></div>
</template>

<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(() => {
  // Kakao Maps API를 로드 후 실행
  const initMap = () => {
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      // 지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.48055147033048, 126.883197420744), // 지도 중심좌표 (예시로 안산 설정)
      level: 4, // 지도의 레벨(확대, 축소 정도)
    };
    const map = new kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

    // Vuex에서 유저 데이터를 가져옴
    const userData = store.state.userData;

    // 각 유저의 위치에 마커를 추가
    userData.forEach((user) => {
      const userLat = parseFloat(user.lat); // 유저 위도
      const userLon = parseFloat(user.lon); // 유저 경도

      const markerPosition = new kakao.maps.LatLng(userLat, userLon); // 마커 위치
      const userInfo = user.username;

      // 마커 생성
      var imageSrc = user.img; // 마커이미지의 주소입니다
      var imageSize = new kakao.maps.Size(45, 45); // 마커이미지의 크기입니다
      var imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
      var markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      );

      const marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage,
      });

      var infowindow = new kakao.maps.InfoWindow({
        content: userInfo, // 인포윈도우에 표시할 내용
      });

      // 마커를 지도 위에 표시
      marker.setMap(map);

      kakao.maps.event.addListener(
        marker,
        "mouseover",
        makeOverListener(map, marker, infowindow)
      );
      kakao.maps.event.addListener(
        marker,
        "mouseout",
        makeOutListener(infowindow)
      );
    });

    // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
    function makeOverListener(map, marker, infowindow) {
      return function () {
        infowindow.open(map, marker);
      };
    }

    // 인포윈도우를 닫는 클로저를 만드는 함수입니다
    function makeOutListener(infowindow) {
      return function () {
        infowindow.close();
      };
    }
  };

  // Kakao Maps API가 로드되면 지도 초기화 함수 실행
  if (window.kakao && window.kakao.maps) {
    initMap();
  } else {
    const script = document.createElement("script");
    script.onload = () => kakao.maps.load(initMap);
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=YOUR_APP_KEY";
    document.head.appendChild(script);
  }
});
</script>

<style lang="scss" scoped></style>
