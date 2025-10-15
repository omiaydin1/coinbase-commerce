import Image from 'next/image';
import CommerceScreenImage from '../images/commerceScreen.png';
import type { OnchainStoreModalReact } from 'src/types';
import { GITHUB_LINK } from 'src/links';
import { CloseSvg } from 'src/svg/CloseSvg';

export default function OnchainStoreModal({
  closeModal,
}: OnchainStoreModalReact) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative z-10 flex h-full xs:h-auto max-w-lg flex-col gap-2 xs:rounded-[10px] bg-[white] p-6 px-10">
        <button
          type="button"
          className="absolute top-2 right-4"
          onClick={closeModal}
        >
          <CloseSvg />
        </button>
        <div className="flex flex-col items-start gap-2 pt-4 pb-4">
          <div className="font-bold">Try it locally</div>
          <span className="text-sm ">
            <a href={GITHUB_LINK} className="ock-text-primary">
              Fork the template and experience the end-to-end checkout flow.{' '}
            </a>
            Your users will see the below screen when the payment flow is
            active.
          </span>
          <div className="mx-auto flex grow justify-center py-4">
            <Image
              src={CommerceScreenImage}
              alt="123"
              className="mx-auto h-[400px] w-auto rounded-[10px]"
            />
          </div>
          <div className="ock-text-foreground-muted text-xs ">
            These products are not for sale. We have disabled the end-to-end
            checkout flow on production.
          </div>
        </div>
      </div>
    </div>
  );
}
