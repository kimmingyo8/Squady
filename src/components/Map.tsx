// global kakao

import Script from 'next/script';
import * as stores from '@/data/store_data.json';

declare global {
  interface Window {
    kakao: any;
  }
}

const DEFAULT_LAT = 37.5518911;
const DEFAULT_LNG = 126.9917937;

const Map = () => {
  const loadKakaoMap = () => {
    // kakao map 로드
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById('map');
      const mapOptions = {
        center: new window.kakao.maps.LatLng(DEFAULT_LAT, DEFAULT_LNG),
        level: 3,
      };
      const map = new window.kakao.maps.Map(mapContainer, mapOptions);

      // 마커 띄우기
      stores?.['DATA']?.map((store) => {
        const imageSrc = store?.bizcnd_code
            ? `/images/markers/${store.bizcnd_code}.png`
            : `/images/markers/default.png`,
          imageSize = new window.kakao.maps.Size(40, 40),
          imageOption = { offset: new window.kakao.maps.Point(27.69) };

        const markerImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
            imageOption,
          ),
          // 마커 생성 위치
          markerPosition = new window.kakao.maps.LatLng(
            store?.y_dnts,
            store?.x_cnts,
          );

        // 마커 생성
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage,
        });

        // 마커 지도 위에 표시
        marker.setMap(map);
      });
    });
  };

  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_CLIENT}&autoload=false`}
        onReady={loadKakaoMap}
      />
      <div id="map" className="w-full h-screen"></div>
    </>
  );
};

export default Map;
