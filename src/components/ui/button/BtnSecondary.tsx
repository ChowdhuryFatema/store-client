export type TBtnProps = {
    btnText: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  };
  
  const BtnSecondary = ({ btnText, ...otherProps }: TBtnProps) => {
    return (
      <button {...otherProps} className="rounded border border-orange-500 !text-orange-500 font-bold !px-3 !py-2">
        {btnText}
      </button>
    );
  };
  
  export default BtnSecondary;