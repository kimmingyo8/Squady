import { SquadType } from '@/interface';
import { Dispatch, SetStateAction, useCallback, useEffect } from 'react';

interface MarkerProps {
  map: any;
  squadData: SquadType[];
  setCurrentSquad: Dispatch<SetStateAction<any>>;
}

const Markers = ({ map, squadData, setCurrentSquad }: MarkerProps) => {
  const loadKakaoMarkers = useCallback(() => {
    if (map) {
      // 마커 띄우기
      squadData?.map((squad) => {
        const imageSrc = squad?.bizcnd_code
            ? `/images/markers/${squad.bizcnd_code}.png`
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
            squad?.y_dnts,
            squad?.x_cnts,
          );

        // 마커 생성
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage,
        });

        // 마커 지도 위에 표시
        marker.setMap(map);

        // 마커 위에 커서 오버 됬을 때 인포윈도우 생성
        const content = `<div class="infoWindow">${squad?.sq_name}</div>`;

        const customOberlay = new window.kakao.maps.CustomOverlay({
          position: markerPosition,
          content: content,
          xAnchor: 0.6,
          yAnchor: 0.91,
        });

        window.kakao.maps.event.addListener(marker, 'mouseover', () => {
          customOberlay.setMap(map);
        });

        window.kakao.maps.event.addListener(marker, 'mouseout', () => {
          customOberlay.setMap(null);
        });

        // 선택한 가게 저장
        window.kakao.maps.event.addListener(marker, 'click', () => {
          setCurrentSquad(squad);
        });
      });
    }
  }, [map, setCurrentSquad, squadData]);

  useEffect(() => {
    loadKakaoMarkers();
  }, [loadKakaoMarkers, map]);

  return <div>Markers</div>;
};

export default Markers;
