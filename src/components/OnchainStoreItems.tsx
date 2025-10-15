import OnchainStoreItem from './OnchainStoreItem';
import { useOnchainStoreContext } from './OnchainStoreProvider';

export default function OnchainStoreItems() {
  const { products } = useOnchainStoreContext();

  return (
    <div className=" scroll mb-16 grow md:mb-0 ">
      <div className="grid h-full grid-cols-1 grid-rows-2 sm:grid-cols-2">
        {products?.map((item) => (
          <OnchainStoreItem {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
