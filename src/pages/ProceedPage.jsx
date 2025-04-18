import ProceedCard from "../components/ProceedCard";
import { ADMIN_IMG, USER_IMG } from "../utils/constant";

export default function ProceedPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-neutral-900 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-neutral-800 dark:text-white mb-10 text-center">
        Proceed as
      </h1>
      <div className="flex flex-wrap justify-center gap-10">
        <ProceedCard imgSrc={USER_IMG} post={"User"} />
        <ProceedCard imgSrc={ADMIN_IMG} post={"Admin"} />
      </div>
    </div>
  );
}
