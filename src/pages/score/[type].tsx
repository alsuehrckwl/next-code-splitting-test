import {useRouter} from 'next/router';
import dynamic from 'next/dynamic';

const SoccerComponent = dynamic(
  () => import('@components/Score/Soccer/Soccer'),
  {
    loading: () => <p>축구 로딩 중 .....</p>,
  }
)
export default function ScoreWrapper({ type }) {
  const router = useRouter()
    
  switch (router.query.type) {
    case 'soccer':
      return <SoccerComponent/>
  
    default:
      return <div>error!</div>
  }
}