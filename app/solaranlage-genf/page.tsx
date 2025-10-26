import CityPage from '../solaranlage-[city]/page';

export default function Page() {
  return <CityPage params={{ city: 'genf' }} />;
}

export { generateMetadata } from '../solaranlage-[city]/page';
