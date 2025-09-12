import { type JSX } from 'react'
import { type ClinkRobeProps } from './types'
import { useLinkRobe } from 'robes'
import { Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import useActive from './useActive'

export function ClinkRobe(
  props: ClinkRobeProps
): JSX.Element {
  const active = useActive(props)
  const link = useLinkRobe({ ...props, active })
  return (
    <Link as={RouterLink} {...props} {...link}>
      {props.children}
    </Link>
  )
}

export default ClinkRobe