'use client';

import { useEffect, useState } from 'react';

import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
  Circle,
  LoadScriptNext,
} from '@react-google-maps/api';

const GOOGLE_MAPS_APIKEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_APIKEY ?? '';

const containerStyle = {
  width: '100%',
  height: '50rem',
};

// 지도보기를 누르면 구글맵이 나타난다. => 숙박의 위치를 센터로 한다
//내위치 버튼을 누르면 내위치로 포커싱한다.그리고 반경을 표시한다.
//

const DetailLocation = ({ marker }) => {
  const [currentPosition, setCurrentPosition] = useState<any>({
    lng: marker?.lng,
    lat: marker?.lat,
  });
  const [selectMarker, setSelectMarker] = useState<any>([
    {
      lat: marker?.lat,
      lng: marker?.lng,
      id: marker?.id,
    },
  ]);

  const ClickCurretLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setSelectMarker((v) => [
          ...v,
          {
            id: selectMarker.length + 1,
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
        ]);
        setCurrentPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      console.log('이 브라우저에서는 현재위치가 지원되지 않습니다');
    }
  };

  return (
    <div className="flex flex-col border border-primary-800 p-[2rem]">
      <p>위치정보</p>
      <p>부산 광역시 어쩌고어저고</p>
      <p>지도보기 하이퍼링크</p>
      <LoadScriptNext googleMapsApiKey={GOOGLE_MAPS_APIKEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={currentPosition} zoom={15}>
          {/* <Circle
            key={marker.name}
            center={currentPosition}
            radius={3 * 1000}
            options={{
              fillColor: '#ff0',
              fillOpacity: 0.3,
              strokeColor: '#ff0000',
              strokeOpacity: 0.3,
              strokeWeight: 2,
            }}
          /> */}

          {selectMarker.map((marker, i) => (
            <Marker
              key={marker.id}
              position={{ lat: marker.lat, lng: marker.lng }}
              title={marker.title}
              onClick={() => setSelectMarker(marker)}
              icon={
                i + 1 === selectMarker.length
                  ? `http://maps.google.com/mapfiles/ms/icons/green-dot.png`
                  : `http://maps.google.com/mapfiles/ms/icons/red-dot.png`
              }
            />
          ))}
          {/* {selectMarker && (
            <InfoWindow
              position={{ lat: selectMarker.lat, lng: selectMarker.lng }}
              onCloseClick={() => setSelectMarker(null)}
            >
              <div>
                <p>TEST용 입니다</p>
                <p>{selectMarker.title}</p>
              </div>
            </InfoWindow>
          )} */}
          <div
            onClick={() => ClickCurretLocation()}
            className="absolute bottom-0 flex size-[4rem] cursor-pointer items-center justify-center bg-slate-50 opacity-70"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-12"
            >
              <path
                fillRule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </GoogleMap>
      </LoadScriptNext>
    </div>
  );
};
export default DetailLocation;
