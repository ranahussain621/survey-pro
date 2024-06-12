import type { FC } from 'react'

export const LayoutCoverIcon: FC<IComponentProps<HTMLOrSVGElement>> = props => {
  return (
    <svg
      width="64"
      height="40"
      viewBox="0 0 64 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 9C3 5.68629 5.68629 3 9 3H55C58.3137 3 61 5.68629 61 9V31C61 34.3137 58.3137 37 55 37H9C5.68629 37 3 34.3137 3 31V9ZM24 22H36V24H24V22ZM40 16H24V18H40V16Z"
        fill="currentColor"
      />
    </svg>
  )
}
