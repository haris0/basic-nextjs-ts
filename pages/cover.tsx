import { NextPage } from 'next';
import Image from 'next/image';
import Cover96 from '../public/Volume_96.png';

const CoverList: NextPage = () => {
  const coverList = [
    'Volume_97',
    'Volume_98',
    'Volume_99',
    'Volume_100',
    'Volume_101',
  ];

  return (
    <div className="op-cover">
      <Image
        src={Cover96}
        placeholder="blur"
        alt="Cover"
        width="280"
        height="420"
      />
      {coverList.map((cover) => (
        <div key={cover}>
          <Image
            src={`/${cover}.png`}
            placeholder="blur"
            blurDataURL={`/${cover}.png`}
            alt={cover}
            width="280"
            height="420"
          />
        </div>
      ))}
    </div>
  );
};

export default CoverList;
