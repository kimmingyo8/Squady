import { useRouter } from 'next/router';

const MeetingEditPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>MeetingEditPage:{id}</h1>
    </div>
  );
};

export default MeetingEditPage;
