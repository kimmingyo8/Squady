import Map from '@/components/Map';
import Markers from '@/components/Markers';
import * as squad from '@/data/squad_data.json';
import { useState } from 'react';

export default function Home() {
  const [map, setMap] = useState(null);
  const [currentSquad, setCurrentSquad] = useState(null);
  const squadData = squad['DATA'];

  console.log(currentSquad);
  return (
    <>
      <Map setMap={setMap} />
      <Markers
        squadData={squadData}
        map={map}
        setCurrentSquad={setCurrentSquad}
      />
    </>
  );
}
