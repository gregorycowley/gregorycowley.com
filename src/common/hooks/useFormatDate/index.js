import { format } from 'date-fns'
import { fr, enUS } from 'date-fns/locale'
import { useParams } from 'react-router-dom'
import LANG from 'common/wording/lang'

const useFormatDate = () => {
  const { lang } = useParams()
  const isFr = lang === LANG.FR.SLUG
  const locale = isFr ? fr : enUS
  const formatFullDate = isFr ? 'dd MMMM yyyy' : 'do MMMM yyyy'

  return (date, formatType = formatFullDate) =>
    format(date, formatType, {
      locale
    })
}

export default useFormatDate
