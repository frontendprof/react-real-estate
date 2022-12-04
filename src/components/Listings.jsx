import house1 from '../assets/1.webp';
import house2 from '../assets/2.webp';
import house3 from '../assets/3.webp';
import house4 from '../assets/4.webp';
import Card from './Card';

const Listings = () => {
  const cards = [
    { image: house1, price: '$325,000' },
    { image: house2, price: '$995,000' },
    { image: house3, price: '$850,000' },
    { image: house4, price: '$429,500' },
  ];
  return (
    <div className="mx-8 overflow-hidden">
      <div className="mt-10">
        <p className="text-[18.5px] font-medium">
          New Listings in Fort Myers, FL
        </p>

        <a
          href="https://www.realtor.com/realestateandhomes-search/Fort-Myers_FL/show-newest-listings"
          className="text-blue-600 text-[15px] hover:underline"
        >
          View All 493 New Listings
        </a>
      </div>

      {/* Listings */}
      <div className="flex flex-nowrap pt-4 overflow-x-scroll space-x-6 w-full pb-4 mb-20">
        {cards.map((card) => (
          <Card photo={card.image} price={card.price} />
        ))}
      </div>
    </div>
  );
};

export default Listings;
