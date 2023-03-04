
import { useGetYearEndAdjustment } from '@/lib/hooks/useGetYearEndAdjustment';
import { StartYearEndAdjustment } from '@/components/organisms/StartYearEndAdjustment';
import { signIn, signOut, useSession } from 'next-auth/react';

const getUserId = () => {
  return ''
};

const userId = getUserId();

export default function Home() {
  const { data, isLoading, isError } = useGetYearEndAdjustment(userId);
  const { data: session } = useSession();

  if (session && session.user) {
    if (isLoading) {
      return <></>
    }

    if (isError) {
      return <></>
    }

    return (
      <div className="bg-white">
        <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {data?.targetYear}年分
              <br />
              年末調整
            </h2>
          </div>
          <StartYearEndAdjustment userId={userId} progress={data.progress} />
        </div>
      </div>
    )
  } else {
    return (
      <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    );
  }
}
