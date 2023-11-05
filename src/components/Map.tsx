// global kakao

import Script from 'next/script';
import { Dispatch, SetStateAction } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

const DEFAULT_LAT = 37.5518911;
const DEFAULT_LNG = 126.9917937;

interface MapProps {
  setMap: Dispatch<SetStateAction<any>>;
}

const Map = ({ setMap }: MapProps) => {
  const loadKakaoMap = () => {
    // kakao map 로드
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById('map');
      const mapOptions = {
        center: new window.kakao.maps.LatLng(DEFAULT_LAT, DEFAULT_LNG),
        level: 3,
      };
      const map = new window.kakao.maps.Map(mapContainer, mapOptions);
      setMap(map);
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
