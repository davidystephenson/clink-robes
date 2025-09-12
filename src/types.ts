import type { ClinkProps } from "clink-react"
import type { ButtonLinkableRobeProps, ButtonLinkRobeProps, IconButtonLinkableRobeProps, IconButtonLinkRobeProps, LinkableRobeProps, LinkRobeProps } from "robes"

export type ClinkRobeProps = ClinkProps & LinkRobeProps
export type ClinkableRobeProps = ClinkProps & LinkableRobeProps
export type ButtonClinkRobeProps = ClinkProps & ButtonLinkRobeProps
export type ButtonClinkableRobeProps = ClinkProps & ButtonLinkableRobeProps
export type IconButtonClinkRobeProps = ClinkProps & IconButtonLinkRobeProps
export type IconButtonClinkableRobeProps = ClinkProps & IconButtonLinkableRobeProps