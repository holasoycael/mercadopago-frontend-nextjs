type IconProps = {
  width?: string | number
  height?: string | number
  fill?: string
  size?: string | number
  ariaLabel?: string
}

function IconSuccess({
  width = '12',
  height = '12',
  fill = 'currentColor',
  size,
  ariaLabel
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={String(size ? size : width)}
      height={String(size ? size : height)}
      viewBox="0 0 78.369 78.369"
      fill={String(fill)}
      data-name="FillBack"
      aria-label={ariaLabel || ''}
    >
      <path d="M78.049,19.015L29.458,67.606c-0.428,0.428-1.121,0.428-1.548,0L0.32,40.015c-0.427-0.426-0.427-1.119,0-1.547l6.704-6.704 c0.428-0.427,1.121-0.427,1.548,0l20.113,20.112l41.113-41.113c0.429-0.427,1.12-0.427,1.548,0l6.703,6.704 C78.477,17.894,78.477,18.586,78.049,19.015z" />
    </svg>
  )
}

export default IconSuccess
