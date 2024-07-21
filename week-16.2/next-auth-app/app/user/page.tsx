import { getServerSession } from 'next-auth';
import { config } from '../lib/auth';

const Page = async () => {
  const session = await getServerSession(config);
  return <div>{JSON.stringify(session)}</div>;
};

export default Page;
