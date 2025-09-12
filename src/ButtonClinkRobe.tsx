import { type ButtonClinkRobeProps } from "./types"
import { ButtonRobe } from "robes"
import useActive from "./useActive"
import { Link, Link as RouterLink } from "react-router-dom"

export default function ButtonClinkRobe (props: ButtonClinkRobeProps) {
  const { button, children, ...rest } = props
  const active = useActive(props)

  return (
    <Link as={RouterLink} {...rest}>
      <ButtonRobe {...button} isActive={active}>
        {children}
      </ButtonRobe>
    </Link>
  )
}

