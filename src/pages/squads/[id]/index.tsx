import { useRouter } from 'next/router';

const SquadDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>SquadDetailPage:{id}</h1>
    </div>
  );
};

export default SquadDetailPage;
