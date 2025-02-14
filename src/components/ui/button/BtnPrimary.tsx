import { TBtnProps } from "./BtnSecondary";


const BtnPrimary = ({ btnText, ...otherProps }: TBtnProps) => {
    return (
        <button {...otherProps} className="rounded bg-orange-500 hover:bg-orange-600 duration-500 !text-white font-bold !px-3 !py-2">
            {btnText}
        </button>
    );
};

export default BtnPrimary;