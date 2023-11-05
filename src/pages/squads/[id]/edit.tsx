import { useRouter } from 'next/router';

const SquadEditPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>SquadEditPage:{id}</h1>
    </div>
  );
};

export default SquadEditPage;
