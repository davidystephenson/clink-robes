import type { IconButtonClinkRobeProps } from "./types"
import { IconButtonRobe } from "robes"
import useActive from "./useActive"
import { Link, Link as RouterLink } from "react-router-dom"

export default function IconButtonClinkRobe (props: IconButtonClinkRobeProps) {
  
  const { button, children, ...rest } = props
  const active = useActive(props)

  return (
    <Link as={RouterLink} {...rest}>
      <IconButtonRobe {...button} isActive={active}>
        {children}
      </IconButtonRobe>
    </Link>
  )
}

