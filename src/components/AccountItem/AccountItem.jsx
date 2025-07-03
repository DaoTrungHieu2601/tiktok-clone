import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "../Images/Image";

const AccountItem = () => {
    return (
        <div className="flex items-center py-[6px] px-4 cursor-pointer hover:bg-[rgba(22,24,35,0.03)]">
            <Image className="avatar w-10 h-10 rounded-full object-cover" src="https://picsum.photos/200/300" alt="Hiếu Toki" />
            <div className="info flex-1 ml-3">
                <p className="name text-[1rem] font-semibold">
                    <span>Đào Trung Hiếu</span>
                    <FontAwesomeIcon className="check ml-1.5 text-[#20D5EC]" icon={faCheckCircle} />
                </p>
                <span className="userName text-[0.8rem] text-[#161823]/50">hieutoki@gmail.com</span>
            </div>
        </div>
    )
}

export default AccountItem;