// global kakao

import Script from 'next/script';
// import * as stores from '@/data/store_data.json';

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
      new window.kakao.maps.Map(mapContainer, mapOptions);
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
