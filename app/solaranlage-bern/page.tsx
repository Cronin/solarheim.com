import CityPage from '../solaranlage-[city]/page';

export default function Page() {
  return <CityPage params={{ city: 'bern' }} />;
}

export { generateMetadata } from '../solaranlage-[city]/page';
