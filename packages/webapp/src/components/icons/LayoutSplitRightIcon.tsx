import type { FC } from 'react'

export const LayoutSplitRightIcon: FC<IComponentProps<HTMLOrSVGElement>> = props => {
  return (
    <svg
      width="64"
      height="40"
      viewBox="0 0 64 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M9 22H21V24H9V22Z" fill="currentColor" />
      <path
        d="M34 3H55C58.3137 3 61 5.68629 61 9V31C61 34.3137 58.3137 37 55 37H34V3Z"
        fill="currentColor"
      />
      <path d="M9 16H25V18H9V16Z" fill="currentColor" />
    </svg>
  )
}
