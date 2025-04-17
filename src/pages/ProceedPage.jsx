import ProceedCard from "../components/ProceedCard";
import { ADMIN_IMG, USER_IMG } from "../utils/constant";


export default function ProceedPage(){
    return <>
        <div>
            <ProceedCard imgSrc={USER_IMG} post={'User'}/>
            <ProceedCard imgSrc={ADMIN_IMG} post={'Admin'}/>
        </div>
    </>
}