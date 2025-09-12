import { IconButtonRobe } from "robes"
import type { IconButtonClinkableRobeProps } from "./types"
import IconButtonClinkRobe from "./IconButtonClinkRobe"

export default function IconButtonClinkableRobe (props: IconButtonClinkableRobeProps) {
  if (props.to == null) {
    return <IconButtonRobe {...props.button} />
  }
  return <IconButtonClinkRobe {...props} href={props.href} />
}

