import { useRouter } from 'next/router';

const MeetingDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>MeetingDetailPage:{id}</h1>
    </div>
  );
};

export default MeetingDetailPage;
