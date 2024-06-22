import React, {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasIcon?: boolean;
  onShowPasswordToggle?: () => void;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { hasIcon = true, onShowPasswordToggle, children, ...props },
  ref
) => {
  const [prefix, suffix] = React.Children.toArray(children);

  return (
    <div className="flex justify-between gap-4 w-full p-4 rounded bg-gray-light">
      <div className="flex gap-4 items-center w-full">
        {prefix}
        <span
          className={`${
            hasIcon
              ? "border-[1px] bg-bluish-gray rounded w-[1px] h-6"
              : "hidden"
          }`}
        />
        <input
          ref={ref}
          className="grow min-w-5 outline-none text-base font-normal text-purple-dark bg-gray-light appearance-none"
          {...props}
        />
      </div>
      {suffix}
    </div>
  );
};

export default forwardRef(Input);
