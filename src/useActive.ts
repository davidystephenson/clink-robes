import { useLocation } from "react-router-dom"
import type { ClinkRobeProps } from "./types"

export default function useActive (props: ClinkRobeProps): boolean {
  const location = useLocation()
  const routeActive = location.pathname === props.to
  const active = props.active ?? routeActive
  return active
}