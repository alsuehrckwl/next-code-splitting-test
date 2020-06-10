import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { getSportsType } from '@store/Sports/Sports.store';
import { useSelector, useDispatch } from 'react-redux';
import { useMemo, useEffect } from 'react';

const SoccerComponent = dynamic(
  () => import('@components/Score/Soccer/Soccer'),
  {
    loading: () => <p>축구 로딩 중 .....</p>,
  }
);
export default function ScoreWrapper(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.sports);

  const sportsType = useMemo(() => {
    return router.query.type;
  }, [router.query.type]);

  useEffect(() => {
    dispatch(getSportsType(sportsType))
  }, [])

  switch (sportsType) {
    case 'soccer':
      return <SoccerComponent list={state[sportsType]} />;

    default:
      return <div>error!</div>;
  }
}

ScoreWrapper.getInitialProps = async (context) => {
  const { query, store } = context;

  store.dispatch(getSportsType(query.type));
};
