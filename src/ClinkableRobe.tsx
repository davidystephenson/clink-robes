import ClinkRobe from "./ClinkRobe"
import type { ClinkableRobeProps } from "./types"

export default function ClinkableRobe (props: ClinkableRobeProps) {
  if (props.to == null) {
    return <>{props.children}</>
  }
  return <ClinkRobe {...props} />
}

