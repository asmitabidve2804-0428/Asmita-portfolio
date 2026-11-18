import { Navigate, useParams } from 'react-router-dom'
import { PATH_TO_HASH } from '../../constants/nav'

/** Sends /about → /#about so old/path links still land on the single page section. */
export default function HashRedirect() {
  const { section } = useParams()
  const id = PATH_TO_HASH[section]
  if (!id) return <Navigate to="/" replace />
  return <Navigate to={`/#${id}`} replace />
}
